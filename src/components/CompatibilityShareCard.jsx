import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ELEMENT_GRADIENT, getSharePatternStyle, truncateForShareCard } from './ShareCard';
import ElementCharacter from './ElementCharacter';
import ShareCardFooter from './ShareCardFooter';

const CARD_FONT = "'Pretendard', 'Segoe UI', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";

const CompatibilityShareCard = forwardRef(function CompatibilityShareCard(
  { myElement, theirElement, theirName, relationshipLabel, score, tier, subheading, text },
  ref
) {
  const { t, i18n } = useTranslation();
  const [from, to] = ELEMENT_GRADIENT[myElement];
  // "Headline + first paragraph only" — text may carry a second paragraph
  // (see matchCommon.explanation.* in en/ko.json), but the share card only
  // ever shows the first one, truncated to a clean ellipsis if it's still
  // too long for the card (matchCommon.explanation runs 400-460 chars in
  // English, 200-250 in Korean, well beyond a card-sized teaser).
  const firstParagraph = truncateForShareCard(text ? text.split('\n\n')[0] : '', i18n.language);

  return (
    <div
      ref={ref}
      style={{
        width: 360,
        height: 690,
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
          {theirName && (
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, wordBreak: 'keep-all' }}>{t('idolMatch.yourElement')} × {theirName}</div>
              {relationshipLabel && <div style={{ fontSize: 12, opacity: 0.65, wordBreak: 'keep-all' }}>{relationshipLabel}</div>}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '2px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <ElementCharacter element={myElement} size={120} />
              <span style={{ fontSize: 10, opacity: 0.65, wordBreak: 'keep-all' }}>{t('idolMatch.yourElement')}: {t(`elements.${myElement}`)}</span>
            </div>
            <div style={{ fontSize: 24, opacity: 0.7 }}>×</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <ElementCharacter element={theirElement} size={120} />
              <span style={{ fontSize: 10, opacity: 0.65, wordBreak: 'keep-all' }}>{theirName || t('idolMatch.theirElement')}: {t(`elements.${theirElement}`)}</span>
            </div>
          </div>

          {score != null && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1 }}>{score}%</div>
              <div style={{ fontSize: 12, letterSpacing: 1.5, opacity: 0.65, textTransform: 'uppercase', marginTop: 4 }}>
                {t('matchCommon.scoreLabel')}
              </div>
            </div>
          )}
          <div style={{ fontSize: 18, fontWeight: 700, opacity: 0.95, wordBreak: 'keep-all' }}>{tier}</div>

          {subheading && (
            <div style={{ fontSize: 24, fontWeight: 800, marginTop: 4, wordBreak: 'keep-all' }}>{subheading}</div>
          )}
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              margin: '4px 0 0',
              maxWidth: 280,
              textAlign: 'left',
              display: '-webkit-box',
              WebkitLineClamp: 7,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              wordBreak: 'keep-all',
            }}
          >
            {firstParagraph}
          </p>
        </div>

        <ShareCardFooter />
      </div>
    </div>
  );
});

export default CompatibilityShareCard;
