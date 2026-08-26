// Client-side API for the credits system, shared by every reading in the
// app: IdolMatch/DramaMatch gate per-member/per-actor (idolItemKey/
// actorItemKey), while Saju/Compatibility/Romance gate per birth-date
// combination (sajuItemKey/compatItemKey/romanceItemKey) — one shared
// credit pool across all five (see CREDIT_PACKS in data/creditPacks.js).
// utils/premiumUnlock.js still exists but nothing reads it anymore; kept
// rather than deleted per user request. The actual balance/unlock state
// lives server-side in Cloudflare D1 (functions/api/credits/*,
// db/schema.sql) since a Paddle webhook runs on the server and can't write
// to a specific browser's localStorage — this file just knows how to
// identify "this browser" and talk to that API.
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

/** Collapses a birth object down to the parts that actually change the
 * reading — drops `name`/`gender` (personalization only, see Saju.jsx) and
 * omits the hour entirely when it isn't known, so "same person, birth time
 * added later" would count as a different key (a real difference in the
 * chart) while two submissions of the identical known birth always collapse
 * to the same key regardless of field order. */
function birthKey(birth) {
  const calendar = birth.calendar === 'lunar' ? 'lunar' : 'solar';
  const base = `${birth.year}-${birth.month}-${birth.day}`;
  return birth.timeKnown && birth.hour != null ? `${base}-${birth.hour}-${calendar}` : `${base}-${calendar}`;
}

/** /saju — one credit unlocks that birth's entire reading (every domain
 * chapter, the Ten God chapter, and the shensha/nobleman/year-luck/samjae
 * section) at once, not section-by-section. */
export function sajuItemKey(birth) {
  return `saju:${birthKey(birth)}`;
}

/** /compatibility — keyed on the birth-date pair only. Deliberately
 * excludes the relationship label/name (compatibility.jsx's `relationship`/
 * `theirName`) since the actual content only ever varies by the two
 * charts' Five Element relation, which is fully determined by the two
 * birth dates — same pair, same reading, regardless of what you call them. */
export function compatItemKey(myBirth, otherBirth) {
  return `compat:${birthKey(myBirth)}:${birthKey(otherBirth)}`;
}

/** /romance — same birth-date-pair keying as compatItemKey, plus
 * `situation` (reunion/crush/theirFeelings) since romanceTemplates.js is a
 * genuinely separate content bank per situation, not just a different
 * framing of the same reading. */
export function romanceItemKey(situation, myBirth, otherBirth) {
  return `romance:${situation}:${birthKey(myBirth)}:${birthKey(otherBirth)}`;
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
