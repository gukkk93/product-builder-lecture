import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ELEMENT_ICON_SRC } from './ElementBadge';
import { ELEMENT_GRADIENT } from './ShareCard';
import ShareCardWatermark from './ShareCardWatermark';
import ShareCardFooter from './ShareCardFooter';

const CARD_FONT = "'Pretendard', 'Segoe UI', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";

const SajuShareCard = forwardRef(function SajuShareCard({ element, strength, profileTitle, profileLine }, ref) {
  const { t } = useTranslation();
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
      <ShareCardWatermark elements={[element]} />

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
          <img
            src={ELEMENT_ICON_SRC[element]}
            alt=""
            style={{
              width: 92,
              height: 92,
              padding: 15,
              boxSizing: 'border-box',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.6)',
              objectFit: 'contain',
            }}
          />
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, wordBreak: 'keep-all' }}>{t(`elements.${element}`)}</div>
            <div style={{ fontSize: 12, letterSpacing: 1.5, opacity: 0.85, textTransform: 'uppercase', marginTop: 4, wordBreak: 'keep-all' }}>
              {t(`saju.strengthLabel.${strength}`)}
            </div>
          </div>

          <div style={{ fontSize: 21, fontWeight: 800, marginTop: 6, wordBreak: 'keep-all' }}>{profileTitle}</div>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              margin: '2px 0 0',
              maxWidth: 280,
              display: '-webkit-box',
              WebkitLineClamp: 6,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              wordBreak: 'keep-all',
            }}
          >
            {profileLine}
          </p>
        </div>

        <ShareCardFooter />
      </div>
    </div>
  );
});

export default SajuShareCard;
