// App-wide feature toggles that aren't per-user settings — small enough to
// not warrant env vars, but centralized so they're easy to find and flip.

// While true, PremiumLock renders its children directly, ignoring every
// individual `locked` flag AND the per-user unlock state from
// PremiumContext — a coarse override meant only for the developer's own
// full-app review. Leave this false in normal operation: the real live
// flow is the per-user "try it free" unlock button (see PremiumLock.jsx,
// PremiumContext.jsx, utils/premiumUnlock.js), which now handles gating
// on its own. Flip this to true only to temporarily see everything
// unlocked regardless of the visitor's own unlock state, then flip it
// back off — every existing `locked:true`/`false` flag stays untouched
// either way.
export const PREVIEW_MODE_UNLOCK_ALL = false;
