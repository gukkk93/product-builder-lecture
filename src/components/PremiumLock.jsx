import { useTranslation } from 'react-i18next';
import { PREVIEW_MODE_UNLOCK_ALL } from '../config';

/**
 * Wraps any content with a blurred/dimmed silhouette and a lock overlay —
 * purely visual, no payment logic. The shared "locked" treatment for every
 * premium-gated piece of content in the app (LifeScoreChart, individual
 * InsightSection entries via their `locked` flag, etc.) until real payment
 * is wired up.
 *
 * While PREVIEW_MODE_UNLOCK_ALL is on, this renders children directly and
 * skips the lock treatment entirely — every caller's `locked` flag stays
 * exactly as it is, so flipping the config back off restores the paywall
 * without touching any call site.
 */
export default function PremiumLock({ children }) {
  const { t } = useTranslation();

  if (PREVIEW_MODE_UNLOCK_ALL) return children;

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
