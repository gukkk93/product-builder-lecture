import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ELEMENT_ICON_SRC } from './ElementBadge';
import ShareCardWatermark from './ShareCardWatermark';
import ShareCardFooter from './ShareCardFooter';

export const ELEMENT_GRADIENT = {
  Wood: ['#1c3a24', '#4caf50'],
  Fire: ['#3a1414', '#ef4444'],
  Earth: ['#332616', '#b08d57'],
  Metal: ['#332c10', '#c9a227'],
  Water: ['#0f1f33', '#2f4d78'],
};

export const SITE_URL = 'product-builder-lecture-cgp.pages.dev';

const CARD_FONT = "'Pretendard', 'Segoe UI', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";

const ShareCard = forwardRef(function ShareCard({ element, zodiac, overallLine, comebackLine }, ref) {
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

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <img
            src={ELEMENT_ICON_SRC[element]}
            alt=""
            style={{
              width: 96,
              height: 96,
              padding: 16,
              boxSizing: 'border-box',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.6)',
              objectFit: 'contain',
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 800 }}>{t(`elements.${element}`)}</div>
          <div style={{ fontSize: 14, opacity: 0.85 }}>
            {t('result.zodiacLabel')}: {zodiac}
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.6, margin: '10px 0 0', maxWidth: 280 }}>
            {overallLine}
          </p>

          <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, maxWidth: 280, opacity: 0.9 }}>
            ✨ {comebackLine}
          </p>
        </div>

        <ShareCardFooter />
      </div>
    </div>
  );
});

export default ShareCard;
