// Same flat localStorage pattern as ThemeToggle/LanguageToggle — a single
// boolean flag, not tied to any account (this app has none). PremiumContext
// wraps this in React state so every locked section on a page updates
// together the moment the flag flips, without a reload.
//
// Stripe integration: once real payment is wired up, the Checkout success
// callback (or the webhook handler, if unlocking should wait for a
// server-confirmed payment) should call setPremiumUnlocked(true) directly —
// this file itself needs no changes at that point.
const STORAGE_KEY = 'premiumUnlocked';

export function isPremiumUnlocked() {
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

export function setPremiumUnlocked(value) {
  localStorage.setItem(STORAGE_KEY, value ? 'true' : 'false');
}
