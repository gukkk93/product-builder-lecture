import { useTranslation } from 'react-i18next';
import { SITE_URL } from './ShareCard';

// Shared footer for both share cards (Result + IdolMatch) so their tone
// stays identical — see STYLE_GUIDE.md. The URL is a pill badge rather
// than plain text so it reads as a call to action, not fine print.
export default function ShareCardFooter() {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ fontSize: 12, opacity: 0.75 }}>{t('result.shareCardFooter')}</div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 0.5,
          padding: '8px 18px',
          borderRadius: 20,
          background: 'rgba(255,255,255,0.16)',
          border: '1px solid rgba(255,255,255,0.45)',
        }}
      >
        {SITE_URL}
      </div>
    </div>
  );
}
