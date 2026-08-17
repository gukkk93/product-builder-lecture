import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ELEMENT_ICON_SRC } from './ElementBadge';
import { ELEMENT_GRADIENT } from './ShareCard';
import ShareCardWatermark from './ShareCardWatermark';
import ShareCardFooter from './ShareCardFooter';

const CARD_FONT = "'Pretendard', 'Segoe UI', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";

const CompatibilityShareCard = forwardRef(function CompatibilityShareCard(
  { myElement, theirElement, theirName, relationshipLabel, score, tier, line },
  ref
) {
  const { t } = useTranslation();
  const [from, to] = ELEMENT_GRADIENT[myElement];

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
      <ShareCardWatermark elements={[myElement, theirElement]} />

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

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          {theirName && (
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, wordBreak: 'keep-all' }}>{t('idolMatch.yourElement')} × {theirName}</div>
              {relationshipLabel && <div style={{ fontSize: 12, opacity: 0.8, wordBreak: 'keep-all' }}>{relationshipLabel}</div>}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <img
                src={ELEMENT_ICON_SRC[myElement]}
                alt=""
                style={{
                  width: 72,
                  height: 72,
                  padding: 12,
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.15)',
                  objectFit: 'contain',
                }}
              />
              <span style={{ fontSize: 12, opacity: 0.85, wordBreak: 'keep-all' }}>{t('idolMatch.yourElement')}: {t(`elements.${myElement}`)}</span>
            </div>
            <div style={{ fontSize: 24, opacity: 0.7 }}>×</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <img
                src={ELEMENT_ICON_SRC[theirElement]}
                alt=""
                style={{
                  width: 72,
                  height: 72,
                  padding: 12,
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.15)',
                  objectFit: 'contain',
                }}
              />
              <span style={{ fontSize: 12, opacity: 0.85, wordBreak: 'keep-all' }}>{theirName || t('idolMatch.theirElement')}: {t(`elements.${theirElement}`)}</span>
            </div>
          </div>

          {score != null && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1 }}>{score}%</div>
              <div style={{ fontSize: 12, letterSpacing: 1.5, opacity: 0.8, textTransform: 'uppercase', marginTop: 4 }}>
                {t('matchCommon.scoreLabel')}
              </div>
            </div>
          )}
          <div style={{ fontSize: 18, fontWeight: 700, opacity: 0.95, wordBreak: 'keep-all' }}>{tier}</div>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              margin: '4px 0 0',
              maxWidth: 280,
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              wordBreak: 'keep-all',
            }}
          >
            {line}
          </p>
        </div>

        <ShareCardFooter />
      </div>
    </div>
  );
});

export default CompatibilityShareCard;
