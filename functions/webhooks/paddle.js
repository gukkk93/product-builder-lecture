import { verifyPaddleSignature } from '../_lib/paddleSignature.js';
import { PRICE_CREDITS } from '../_lib/priceCredits.js';

// Paddle webhook receiver — the ONLY place a real purchase grants credits
// (see src/context/CreditsContext.jsx for the other grant path, the
// first-visit welcome credit, which is unrelated to Paddle). Requires a D1
// binding named `DB` (see db/schema.sql) and a `PADDLE_WEBHOOK_SECRET` env
// var (from creating the notification destination — scripts/setup-paddle.mjs),
// both set in the Cloudflare Pages project's dashboard (this project has no
// wrangler.toml driving its auto-deploy, so these can't be set from a
// config file — see ohaeng-project-summary.md).
//
// Always returns 200 once the signature is verified, even for event types
// or prices we don't recognize — a non-2xx response makes Paddle retry the
// same event repeatedly, which we don't want for something we're
// intentionally ignoring rather than failing to process.
export async function onRequestPost({ request, env }) {
  const rawBody = await request.text();
  const signature = request.headers.get('paddle-signature');
  const verified = await verifyPaddleSignature(rawBody, signature, env.PADDLE_WEBHOOK_SECRET);
  if (!verified) {
    return new Response('Invalid signature', { status: 401 });
  }

  let body;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  if (body.event_type !== 'transaction.completed') {
    return new Response('Ignored (not transaction.completed)', { status: 200 });
  }

  const data = body.data || {};
  const transactionId = data.id;
  const anonId = data.custom_data?.anon_id;
  const items = Array.isArray(data.items) ? data.items : [];

  if (!transactionId || !anonId) {
    return new Response('Missing transaction id or anon_id — nothing to credit', { status: 200 });
  }

  const creditsToAdd = items.reduce((sum, item) => {
    const perUnit = PRICE_CREDITS[item?.price?.id] || 0;
    return sum + perUnit * (item?.quantity || 1);
  }, 0);

  if (creditsToAdd <= 0) {
    return new Response('No recognized credit price in this transaction', { status: 200 });
  }

  const now = new Date().toISOString();

  // Idempotency: this INSERT's PRIMARY KEY constraint on transaction_id
  // rejects a retry of the same event, so the credit grant below only ever
  // runs once per real transaction.
  try {
    await env.DB.prepare(
      'INSERT INTO processed_transactions (transaction_id, anon_id, credits_added, processed_at) VALUES (?, ?, ?, ?)'
    )
      .bind(transactionId, anonId, creditsToAdd, now)
      .run();
  } catch {
    return new Response('Already processed', { status: 200 });
  }

  await env.DB.prepare(
    `INSERT INTO credits (anon_id, balance, updated_at) VALUES (?, ?, ?)
     ON CONFLICT(anon_id) DO UPDATE SET balance = balance + excluded.balance, updated_at = excluded.updated_at`
  )
    .bind(anonId, creditsToAdd, now)
    .run();

  return new Response('OK', { status: 200 });
}
