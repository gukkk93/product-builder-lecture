// Per-product premium unlock state, stored as one JSON object in
// localStorage (same general "flat localStorage value" spirit as
// theme/language, just holding several booleans instead of one). Each of
// the app's 5 gated features unlocks independently — buying/trying one
// doesn't unlock the others. PremiumContext wraps this in React state so
// every PremiumLock for a given product reacts together instantly.
//
// Stripe integration: once real payment is wired up, figure out which
// product key was purchased (from the Checkout session or webhook
// payload) and call setProductUnlocked(thatKey, true) directly — this
// file itself needs no changes at that point.
const STORAGE_KEY = 'premiumUnlockedProducts';

// idolMatch/dramaMatch used to be here too, but both switched to the
// separate per-member/per-actor credit system (see src/utils/credits.js,
// src/context/CreditsContext.jsx) — they no longer use PremiumLock at all.
export const PRODUCTS = ['saju', 'compatibility', 'romance'];

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

/** Every product key mapped to its current unlocked boolean (missing/invalid entries read as false). */
export function getUnlockedProducts() {
  const all = readAll();
  return PRODUCTS.reduce((acc, key) => {
    acc[key] = all[key] === true;
    return acc;
  }, {});
}

export function isProductUnlocked(productKey) {
  return readAll()[productKey] === true;
}

/** Updates a single product's unlocked flag, leaving every other product's stored state untouched. */
export function setProductUnlocked(productKey, value) {
  const all = readAll();
  all[productKey] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}
