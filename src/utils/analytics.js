// Lightweight analytics wrapper around PostHog. If VITE_POSTHOG_KEY isn't
// set (see .env.example), main.jsx never assigns window.posthog and every
// call below is a safe no-op.
export function track(event, props = {}) {
  if (typeof window === 'undefined') return;
  if (!window.posthog?.capture) {
    // eslint-disable-next-line no-console
    console.warn('[analytics] track() called but window.posthog is not ready — event dropped:', event, props);
    return;
  }
  // eslint-disable-next-line no-console
  console.log('[analytics] capture:', event, props);
  window.posthog.capture(event, props);
}

export function trackPageView(page) {
  track('page_view', { page });
}

export function trackMenuClick(item) {
  track('home_menu_click', { item });
}

export function trackBirthFormSubmit(context) {
  track('birth_form_submit', { context });
}

export function trackShareDownload(context) {
  track('share_card_download', { context });
}

export function trackIdolMatchSubmit(mode) {
  track('idol_match_submit', { mode: mode || 'soulmate' });
}

export function trackIdolRequestClick(context) {
  track('idol_request_click', { context });
}
