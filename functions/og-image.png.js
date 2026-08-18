import { ImageResponse, loadGoogleFont } from 'workers-og';
import enLocale from '../src/i18n/locales/en.json';
import koLocale from '../src/i18n/locales/ko.json';
import { CHARACTER_DATA_URI } from './_lib/characters.js';

// Same palette as ELEMENT_GRADIENT in src/components/ShareCard.jsx — kept
// as a separate copy since this file runs in the Workers runtime, not the
// Vite bundle, and the two build pipelines don't share code by default.
const GRADIENTS = {
  Wood: ['#1c3a24', '#4caf50'],
  Fire: ['#3a1414', '#ef4444'],
  Earth: ['#332616', '#b08d57'],
  Metal: ['#332c10', '#c9a227'],
  Water: ['#0f1f33', '#2f4d78'],
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const params = url.searchParams;

  const elementParam = params.get('element');
  const element = GRADIENTS[elementParam] ? elementParam : 'Wood';
  const lang = params.get('lang') === 'ko' ? 'ko' : 'en';
  const name = (params.get('name') || '').slice(0, 40);
  const scoreRaw = params.get('score');
  const score = scoreRaw && /^\d{1,3}$/.test(scoreRaw) ? scoreRaw : '';
  const tier = (params.get('tier') || '').slice(0, 60);

  const locale = lang === 'ko' ? koLocale : enLocale;
  const elementLabel = locale.elements[element];
  const [from, to] = GRADIENTS[element];
  const characterSrc = CHARACTER_DATA_URI[element];
  const siteLabel = 'product-builder-lecture-cgp.pages.dev';
  // Pre-uppercased in JS rather than via CSS text-transform: satori renders
  // whatever glyphs the *displayed* text needs, so a text-transform would
  // need its uppercase forms in the font subset below, not the source casing.
  const appNameLabel = locale.app.name.toUpperCase();

  // Google Fonts subsetting (via the `text` param) means we only ever
  // download the handful of glyphs this particular image actually uses,
  // instead of shipping a full Hangul-coverage font in the function
  // bundle — the officially documented pattern for workers-og/satori.
  //
  // workers-og@0.0.27's loadGoogleFont builds the fonts.googleapis.com URL
  // without ever encodeURIComponent-ing the `text` param, so raw Hangul (or
  // any non-ASCII) silently breaks the request and every CJK glyph comes
  // back as tofu — pre-encoding it here works around that, since the buggy
  // code just concatenates whatever string it's given verbatim.
  const allText = encodeURIComponent(
    [name, score ? `${score}%` : '', tier, elementLabel, appNameLabel, locale.matchCommon.scoreLabel, siteLabel].join(' ')
  );
  const [fontRegular, fontBold] = await Promise.all([
    loadGoogleFont({ family: 'Noto Sans KR', weight: 400, text: allText }),
    loadGoogleFont({ family: 'Noto Sans KR', weight: 800, text: allText }),
  ]);

  const html = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:1200px;height:630px;background:linear-gradient(160deg, ${from}, ${to});color:#ffffff;font-family:'Noto Sans KR';padding:64px;box-sizing:border-box;">
      <div style="display:flex;font-size:26px;letter-spacing:4px;opacity:0.85;">${escapeHtml(appNameLabel)}</div>
      <div style="display:flex;align-items:center;gap:56px;">
        <img src="${characterSrc}" width="240" height="240" style="border-radius:50%;background:rgba(255,255,255,0.14);" />
        <div style="display:flex;flex-direction:column;gap:14px;max-width:760px;">
          ${name ? `<div style="display:flex;font-size:58px;font-weight:800;line-height:1.15;">${escapeHtml(name)}</div>` : ''}
          ${
            score
              ? `<div style="display:flex;align-items:baseline;gap:16px;"><div style="display:flex;font-size:96px;font-weight:800;line-height:1;">${score}%</div><div style="display:flex;font-size:26px;opacity:0.85;">${escapeHtml(locale.matchCommon.scoreLabel)}</div></div>`
              : `<div style="display:flex;font-size:48px;font-weight:800;">${escapeHtml(elementLabel)}</div>`
          }
          ${tier ? `<div style="display:flex;font-size:34px;font-weight:700;opacity:0.92;">${escapeHtml(tier)}</div>` : ''}
        </div>
      </div>
      <div style="display:flex;font-size:24px;opacity:0.8;">${siteLabel}</div>
    </div>
  `;

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    format: 'png',
    fonts: [
      { name: 'Noto Sans KR', data: fontRegular, weight: 400, style: 'normal' },
      { name: 'Noto Sans KR', data: fontBold, weight: 800, style: 'normal' },
    ],
    headers: {
      // Query string fully determines the image, so a long, cacheable
      // response is safe — repeat shares/re-crawls of the same result
      // hit Cloudflare's edge cache instead of re-rendering.
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
