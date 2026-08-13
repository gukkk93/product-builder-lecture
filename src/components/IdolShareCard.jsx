import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ELEMENT_ICON_SRC } from './ElementBadge';
import { ELEMENT_GRADIENT } from './ShareCard';
import ShareCardWatermark from './ShareCardWatermark';
import ShareCardFooter from './ShareCardFooter';
import MemberAvatar from './MemberAvatar';

const CARD_FONT = "'Pretendard', 'Segoe UI', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";

const IdolShareCard = forwardRef(function IdolShareCard(
  { memberName, groupName, userElement, idolElement, tier, line },
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
          padding: '36px 28px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ fontSize: 14, letterSpacing: 2, opacity: 0.85, textTransform: 'uppercase' }}>
          {t('app.name')}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <MemberAvatar element={idolElement} size={80} />
          <div>
            <div style={{ fontSize: 24, fontWeight: 800 }}>{memberName}</div>
            <div style={{ fontSize: 13, opacity: 0.8 }}>{groupName}</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, margin: '8px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <img
                src={ELEMENT_ICON_SRC[userElement]}
                alt=""
                style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.6)', objectFit: 'cover' }}
              />
              <span style={{ fontSize: 11, opacity: 0.85 }}>{t('idolMatch.yourElement')}: {t(`elements.${userElement}`)}</span>
            </div>
            <div style={{ fontSize: 22, opacity: 0.7 }}>×</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <img
                src={ELEMENT_ICON_SRC[idolElement]}
                alt=""
                style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.6)', objectFit: 'cover' }}
              />
              <span style={{ fontSize: 11, opacity: 0.85 }}>{memberName}: {t(`elements.${idolElement}`)}</span>
            </div>
          </div>

          <div style={{ fontSize: 26, fontWeight: 800 }}>{tier}</div>

          <p style={{ fontSize: 15, lineHeight: 1.6, margin: '4px 0 0', maxWidth: 280 }}>
            {line}
          </p>
        </div>

        <ShareCardFooter />
      </div>
    </div>
  );
});

export default IdolShareCard;
