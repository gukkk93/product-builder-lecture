import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ELEMENT_GRADIENT, getSharePatternStyle, truncateForShareCard } from './ShareCard';
import ElementCharacter from './ElementCharacter';
import ShareCardFooter from './ShareCardFooter';

const CARD_FONT = "'Pretendard', 'Segoe UI', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";

const IdolShareCard = forwardRef(function IdolShareCard(
  { memberName, groupName, userElement, idolElement, score, tier, subheading, text },
  ref
) {
  const { t, i18n } = useTranslation();
  const [from, to] = ELEMENT_GRADIENT[idolElement];
  // "Headline + first paragraph only" — callers pass the current
  // relationshipMode's `explanation` (see friendshipTemplates.js/
  // roommateTemplates.js/groupChemistryTemplates.js), whose text may carry
  // a second paragraph, but the share card only ever shows the first one,
  // truncated to a clean ellipsis if it's still too long for the card.
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
          padding: '28px 26px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ fontSize: 13, letterSpacing: 2, opacity: 0.85, textTransform: 'uppercase' }}>
          {t('app.name')}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div>
            <div style={{ fontSize: 27, fontWeight: 800, wordBreak: 'keep-all' }}>{memberName}</div>
            <div style={{ fontSize: 12, opacity: 0.65, wordBreak: 'keep-all' }}>{groupName}</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '2px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <ElementCharacter element={userElement} size={118} />
              <span style={{ fontSize: 9, opacity: 0.65, wordBreak: 'keep-all' }}>{t('idolMatch.yourElement')}: {t(`elements.${userElement}`)}</span>
            </div>
            <div style={{ fontSize: 20, opacity: 0.7 }}>×</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <ElementCharacter element={idolElement} size={118} />
              <span style={{ fontSize: 9, opacity: 0.65, wordBreak: 'keep-all' }}>{memberName}: {t(`elements.${idolElement}`)}</span>
            </div>
          </div>

          {score != null && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1 }}>{score}%</div>
              <div style={{ fontSize: 11, letterSpacing: 1.5, opacity: 0.65, textTransform: 'uppercase', marginTop: 4 }}>
                {t('matchCommon.scoreLabel')}
              </div>
            </div>
          )}
          <div style={{ fontSize: 17, fontWeight: 700, opacity: 0.95, wordBreak: 'keep-all' }}>{tier}</div>

          {subheading && (
            <div style={{ fontSize: 24, fontWeight: 800, marginTop: 4, wordBreak: 'keep-all' }}>{subheading}</div>
          )}
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.5,
              margin: '2px 0 0',
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

export default IdolShareCard;
