// Lightweight analytics wrapper. No PostHog project is wired up yet (that
// needs a real project key + a decision on self-host vs. PostHog Cloud —
// see ohaeng-project-summary.md, it's an explicit blocker). Once one
// exists, initialize PostHog in main.jsx
// (posthog.init(YOUR_KEY, { api_host: YOUR_HOST })) and every call below
// starts reporting automatically — nothing else here needs to change.
export function track(event, props = {}) {
  if (typeof window !== 'undefined' && window.posthog?.capture) {
    window.posthog.capture(event, props);
  }
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
