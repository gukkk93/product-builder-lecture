// Client-side API for the credits system that gates per-member/per-actor
// reads on IdolMatch/DramaMatch (saju/compatibility/idolMatch(product-wide)/
// dramaMatch(product-wide)/romance still use the separate, unrelated
// utils/premiumUnlock.js — this file only covers the new per-item credit
// flow). The actual balance/unlock state lives server-side in Cloudflare D1
// (functions/api/credits/*, db/schema.sql) since a Paddle webhook runs on
// the server and can't write to a specific browser's localStorage — this
// file just knows how to identify "this browser" and talk to that API.
//
// Hitting these endpoints requires Cloudflare Pages Functions to actually
// be running, which plain `npm run dev` (Vite only) doesn't provide — use
// `npm run pages:dev` (builds + runs `wrangler pages dev`) to test this
// locally, same as the other functions/*.js files.
const ANON_ID_KEY = 'ohaeng_anon_id';

export function getOrCreateAnonId() {
  try {
    let id = localStorage.getItem(ANON_ID_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(ANON_ID_KEY, id);
    }
    return id;
  } catch {
    // localStorage unavailable (private mode, etc.) — fall back to a
    // per-load id so the app doesn't crash; credits just won't persist.
    return crypto.randomUUID();
  }
}

/** Namespaces an idol member id or drama actor id so the two id spaces
 * (idols.js's group-prefixed ids vs kdramaActors.js's flat slugs) can never
 * collide in the shared `unlocks` table, even though neither file enforces
 * global uniqueness on its own. */
export function idolItemKey(memberId) {
  return `idol:${memberId}`;
}

export function actorItemKey(actorId) {
  return `actor:${actorId}`;
}

/** Returns { balance, unlockedKeys }. First call ever for a given browser
 * also grants a 1-credit welcome bonus server-side (see functions/api/
 * credits/state.js) — this function has no opinion on that, it just
 * reports whatever the server returns. */
export async function fetchCreditsState() {
  const anonId = getOrCreateAnonId();
  const response = await fetch(`/api/credits/state?anonId=${encodeURIComponent(anonId)}`);
  if (!response.ok) throw new Error(`fetchCreditsState failed: ${response.status}`);
  return response.json();
}

/** Spends 1 credit to unlock `itemKey` (see idolItemKey/actorItemKey).
 * Returns { unlocked, balance, alreadyOwned? } on success, or throws if the
 * request itself failed (network error, 400, etc.) — a 402 (insufficient
 * balance) is NOT thrown, it resolves normally with `unlocked: false` so
 * callers can show a "buy more credits" prompt instead of an error. */
export async function consumeCredit(itemKey) {
  const anonId = getOrCreateAnonId();
  const response = await fetch('/api/credits/consume', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ anonId, itemKey }),
  });
  if (!response.ok && response.status !== 402) {
    throw new Error(`consumeCredit failed: ${response.status}`);
  }
  return response.json();
}
