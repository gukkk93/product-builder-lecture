import { useTranslation } from 'react-i18next';

/**
 * Wraps a preview (chart, section, etc.) with a blurred/dimmed silhouette
 * and a lock overlay — purely visual, no payment logic. Meant for content
 * that's fully built but not ready to actually unlock yet (see
 * LifeScoreChart's use in Saju.jsx); reusable for bundling more sections
 * behind the same treatment later (신살/귀인 content, sajuStrengthTemplates)
 * once real payment is wired up.
 */
export default function LockedPreview({ children }) {
  const { t } = useTranslation();

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{ filter: 'blur(6px)', opacity: 0.55, pointerEvents: 'none', userSelect: 'none' }}
        aria-hidden="true"
      >
        {children}
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          textAlign: 'center',
          padding: 12,
        }}
      >
        <span style={{ fontSize: 26 }} role="img" aria-label="locked">🔒</span>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>
          {t('saju.premiumLockedNote')}
        </p>
      </div>
    </div>
  );
}
