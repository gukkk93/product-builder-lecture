import { SITE_URL } from '../components/ShareCard';

/**
 * Absolute, shareable link to a route. Carries forward the current page's
 * own query params (window.location.search) — so a URL-driven result page
 * (Result/Saju/IdolMatch/DramaMatch) reproduces itself from the link alone
 * — then merges in `extraParams`, for values a page computes but doesn't
 * reflect in its own address bar: Compatibility/Romance's second person
 * (see birthParams below), and the element/score/name/tier the dynamic
 * OG image function (functions/og-image.png.js) needs to render a preview
 * matching what the sharer actually saw. `lang` is always included so link
 * previews and the reproduced page match the sharer's language.
 */
export function buildShareUrl(path, extraParams) {
  const [pathname, presetQuery] = path.split('?');
  const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  if (presetQuery) {
    new URLSearchParams(presetQuery).forEach((value, key) => params.set(key, value));
  }
  if (extraParams) {
    Object.entries(extraParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') params.set(key, String(value));
    });
  }
  if (!params.has('lang')) {
    const lang = typeof localStorage !== 'undefined' ? localStorage.getItem('language') : null;
    params.set('lang', lang === 'ko' ? 'ko' : 'en');
  }
  const qs = params.toString();
  return `https://${SITE_URL}${pathname}${qs ? `?${qs}` : ''}`;
}

/**
 * Query-param fragment for a birth object, optionally prefixed (Compatibility
 * and Romance need two: "" for the sharer, "t" for the other person — ty/tm/
 * td/th/tcal/ttimeKnown) so both can reproduce on the receiving end.
 */
export function birthParams(birth, prefix = '') {
  if (!birth) return {};
  return {
    [`${prefix}y`]: birth.year,
    [`${prefix}m`]: birth.month,
    [`${prefix}d`]: birth.day,
    [`${prefix}h`]: birth.timeKnown ? birth.hour : undefined,
    [`${prefix}cal`]: birth.calendar,
    [`${prefix}timeKnown`]: birth.timeKnown ? '1' : '0',
  };
}
