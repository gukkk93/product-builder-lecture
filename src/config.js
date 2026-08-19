// App-wide feature toggles that aren't per-user settings — small enough to
// not warrant env vars, but centralized so they're easy to find and flip.

// While true, PremiumLock renders its children directly, ignoring every
// individual `locked` flag across the app — lets the pre-launch/marketing
// period show all content unlocked without touching any of the locked
// flags themselves. Flip to false when payment is wired up and the real
// paywall should take effect; every existing `locked:true`/`false` flag is
// already in place and doesn't need to change.
export const PREVIEW_MODE_UNLOCK_ALL = true;
