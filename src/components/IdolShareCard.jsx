import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ELEMENT_ICON_SRC } from './ElementBadge';
import { ELEMENT_GRADIENT } from './ShareCard';
import ShareCardWatermark from './ShareCardWatermark';
import ShareCardFooter from './ShareCardFooter';
import MemberAvatar from './MemberAvatar';

const CARD_FONT = "'Pretendard', 'Segoe UI', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";

const IdolShareCard = forwardRef(function IdolShareCard(
  { memberName, groupName, userElement, idolElement, idolStrength, score, tier, line },
  ref
) {
  const { t } = useTranslation();
  const [from, to] = ELEMENT_GRADIENT[idolElement];

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
      <ShareCardWatermark element={idolElement} />

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

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <MemberAvatar element={idolElement} strength={idolStrength} size={60} />
          <div>
            <div style={{ fontSize: 21, fontWeight: 800 }}>{memberName}</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>{groupName}</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '4px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <img
                src={ELEMENT_ICON_SRC[userElement]}
                alt=""
                style={{
                  width: 46,
                  height: 46,
                  padding: 8,
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.15)',
                  objectFit: 'contain',
                }}
              />
              <span style={{ fontSize: 10, opacity: 0.85 }}>{t('idolMatch.yourElement')}: {t(`elements.${userElement}`)}</span>
            </div>
            <div style={{ fontSize: 20, opacity: 0.7 }}>×</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <img
                src={ELEMENT_ICON_SRC[idolElement]}
                alt=""
                style={{
                  width: 46,
                  height: 46,
                  padding: 8,
                  boxSizing: 'border-box',
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.15)',
                  objectFit: 'contain',
                }}
              />
              <span style={{ fontSize: 10, opacity: 0.85 }}>{memberName}: {t(`elements.${idolElement}`)}</span>
            </div>
          </div>

          {score != null && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1 }}>{score}%</div>
              <div style={{ fontSize: 11, letterSpacing: 1.5, opacity: 0.8, textTransform: 'uppercase', marginTop: 4 }}>
                {t('matchCommon.scoreLabel')}
              </div>
            </div>
          )}
          <div style={{ fontSize: 17, fontWeight: 700, opacity: 0.95 }}>{tier}</div>

          <p
            style={{
              fontSize: 14,
              lineHeight: 1.5,
              margin: '2px 0 0',
              maxWidth: 280,
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
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

export default IdolShareCard;
