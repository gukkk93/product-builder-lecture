import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getZodiacLabel } from '../utils/saju';
import ElementCharacter from './ElementCharacter';
import ShareCardFooter from './ShareCardFooter';

export const ELEMENT_GRADIENT = {
  Wood: ['#1c3a24', '#4caf50'],
  Fire: ['#3a1414', '#ef4444'],
  Earth: ['#332616', '#b08d57'],
  Metal: ['#332c10', '#c9a227'],
  Water: ['#0f1f33', '#2f4d78'],
};

export const SITE_URL = 'getohaeng.com';

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

// Subtle geometric texture (two soft ripples + a diagonal stripe repeat)
// layered full-bleed behind every share card's content, tinted from that
// card's own accent color (the lighter half of ELEMENT_GRADIENT) so it
// always matches the card's palette. Pure CSS background-image — no
// pattern/chart library — meant to replace flat gradient-only backgrounds
// with a bit of texture. Render as the first child of the card's
// `position: relative; overflow: hidden` root, before the z-indexed
// content wrapper.
export function getSharePatternStyle(toColor) {
  const [r, g, b] = hexToRgb(toColor);
  const rgba = (a) => `rgba(${r}, ${g}, ${b}, ${a})`;
  return {
    position: 'absolute',
    inset: 0,
    backgroundImage: [
      `radial-gradient(circle at 18% 14%, ${rgba(0.24)}, transparent 34%)`,
      `radial-gradient(circle at 88% 84%, ${rgba(0.2)}, transparent 38%)`,
      `repeating-linear-gradient(135deg, ${rgba(0.07)} 0px, ${rgba(0.07)} 2px, transparent 2px, transparent 26px)`,
    ].join(', '),
    pointerEvents: 'none',
  };
}

// Cards that show a headline + first-paragraph teaser truncate it to a
// clean word boundary with a visible "…" — -webkit-line-clamp's own
// UA-generated ellipsis doesn't survive html-to-image's toPng() export
// (confirmed by rendering: the clipped line just stops mid-sentence with
// no dots), so the ellipsis has to be real text content instead. maxLen is
// language-aware since Hangul syllables are visually wider than Latin
// letters — the same character count wraps to noticeably more lines in
// Korean, so it gets a shorter budget to land at a similar line count.
const TRUNCATE_MAX_LEN = { ko: 150, en: 260 };

export function truncateForShareCard(text, lang) {
  if (!text) return '';
  const maxLen = TRUNCATE_MAX_LEN[lang] || TRUNCATE_MAX_LEN.en;
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  const trimmed = lastSpace > maxLen * 0.6 ? cut.slice(0, lastSpace) : cut;
  return `${trimmed.trimEnd()}…`;
}

const CARD_FONT = "'Pretendard', 'Segoe UI', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";

const ShareCard = forwardRef(function ShareCard({ element, zodiac, overallLine, fandomLine }, ref) {
  const { t, i18n } = useTranslation();
  const [from, to] = ELEMENT_GRADIENT[element];

  return (
    <div
      ref={ref}
      style={{
        width: 360,
        height: 640,
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(160deg, ${from}, ${to})`,
        color: '#ffffff',
        fontFamily: CARD_FONT,
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      <div style={getSharePatternStyle(to)} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '36px 28px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ fontSize: 14, letterSpacing: 2, opacity: 0.85, textTransform: 'uppercase' }}>
          {t('app.name')}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <ElementCharacter element={element} size={140} />
          <div style={{ fontSize: 30, fontWeight: 800, wordBreak: 'keep-all' }}>{t(`elements.${element}`)}</div>
          <div style={{ fontSize: 13, opacity: 0.65, wordBreak: 'keep-all' }}>
            {t('result.zodiacLabel')}: {getZodiacLabel(zodiac, i18n.language)}
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.6, margin: '10px 0 0', maxWidth: 280, wordBreak: 'keep-all' }}>
            {overallLine}
          </p>

          <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, maxWidth: 280, opacity: 0.8, wordBreak: 'keep-all' }}>
            ✨ {fandomLine}
          </p>
        </div>

        <ShareCardFooter />
      </div>
    </div>
  );
});

export default ShareCard;
