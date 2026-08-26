// Requires a D1 binding named `DB` — see db/schema.sql.
const ANON_ID_RE = /^[0-9a-f-]{16,64}$/i;

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const anonId = url.searchParams.get('anonId');
  if (!anonId || !ANON_ID_RE.test(anonId)) {
    return new Response(JSON.stringify({ error: 'invalid_anon_id' }), { status: 400 });
  }

  const now = new Date().toISOString();
  const existing = await env.DB.prepare('SELECT balance FROM credits WHERE anon_id = ?').bind(anonId).first();

  let balance;
  if (existing) {
    balance = existing.balance;
  } else {
    // First time this anon_id has ever been seen — grant the 1-credit
    // welcome bonus once (no login system, so "first request from this
    // anon_id" is the only signal available; clearing localStorage or
    // switching browsers gets a fresh anon_id and a fresh welcome credit —
    // an accepted limitation, not a bug, given there's no account system).
    await env.DB.prepare('INSERT INTO credits (anon_id, balance, updated_at) VALUES (?, 1, ?)').bind(anonId, now).run();
    balance = 1;
  }

  const unlocks = await env.DB.prepare('SELECT item_key FROM unlocks WHERE anon_id = ?').bind(anonId).all();
  const unlockedKeys = unlocks.results.map((row) => row.item_key);

  return new Response(JSON.stringify({ balance, unlockedKeys }), {
    headers: { 'content-type': 'application/json' },
  });
}
