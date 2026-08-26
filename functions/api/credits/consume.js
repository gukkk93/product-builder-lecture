// Requires a D1 binding named `DB` — see db/schema.sql.
//
// Insert-into-`unlocks`-first, decrement-second — deliberately in that
// order. `unlocks`'s PRIMARY KEY (anon_id, item_key) is the actual
// concurrency guard: if two requests race to unlock the *same* item (a
// double-click before the UI's `pending` state disables the button, or two
// manual requests), only one INSERT can succeed — the other throws a
// constraint violation, which is caught below and reported as
// `alreadyOwned` without ever touching the balance. An earlier version
// checked "already unlocked?" then decremented then inserted; that let two
// concurrent requests both pass the balance check and both decrement,
// corrupting the ledger by one extra credit with no matching unlock to
// show for it. This version can't do that for a single item — the
// remaining (much narrower) race is two concurrent requests for two
// *different* items on the same anon_id both reading balance=1 as
// sufficient before either decrements; accepted as a known limitation at
// this app's scale (a single visitor, one tab, no login) rather than
// solved with a Durable Object.
const ANON_ID_RE = /^[0-9a-f-]{16,64}$/i;
const ITEM_KEY_RE = /^(idol|actor):[a-z0-9-]+$/i;

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid_json' }), { status: 400 });
  }

  const { anonId, itemKey } = body || {};
  if (!anonId || !ANON_ID_RE.test(anonId) || !itemKey || !ITEM_KEY_RE.test(itemKey)) {
    return new Response(JSON.stringify({ error: 'invalid_request' }), { status: 400 });
  }

  const now = new Date().toISOString();

  try {
    await env.DB.prepare('INSERT INTO unlocks (anon_id, item_key, unlocked_at) VALUES (?, ?, ?)').bind(anonId, itemKey, now).run();
  } catch {
    // Already unlocked — either from an earlier session, or the loser of a
    // race against another request for this same item. Either way, no charge.
    const row = await env.DB.prepare('SELECT balance FROM credits WHERE anon_id = ?').bind(anonId).first();
    return new Response(JSON.stringify({ unlocked: true, alreadyOwned: true, balance: row?.balance ?? 0 }), {
      headers: { 'content-type': 'application/json' },
    });
  }

  const decrement = await env.DB.prepare('UPDATE credits SET balance = balance - 1, updated_at = ? WHERE anon_id = ? AND balance > 0')
    .bind(now, anonId)
    .run();

  if (decrement.meta.changes === 0) {
    // The insert above succeeded but there was no balance to actually spend
    // — roll it back so the unlock isn't granted for free.
    await env.DB.prepare('DELETE FROM unlocks WHERE anon_id = ? AND item_key = ?').bind(anonId, itemKey).run();
    return new Response(JSON.stringify({ unlocked: false, reason: 'insufficient_balance', balance: 0 }), {
      status: 402,
      headers: { 'content-type': 'application/json' },
    });
  }

  const row = await env.DB.prepare('SELECT balance FROM credits WHERE anon_id = ?').bind(anonId).first();
  return new Response(JSON.stringify({ unlocked: true, balance: row?.balance ?? 0 }), {
    headers: { 'content-type': 'application/json' },
  });
}
