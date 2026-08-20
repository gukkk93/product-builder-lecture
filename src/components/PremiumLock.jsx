import { useTranslation } from 'react-i18next';
import { PREVIEW_MODE_UNLOCK_ALL } from '../config';
import { usePremium } from '../context/PremiumContext';

/**
 * Wraps any content with a blurred/dimmed silhouette and a lock overlay —
 * purely visual (no server-verified payment yet), but the unlock itself is
 * real: clicking the button in the overlay flips PremiumContext's state,
 * which is backed by localStorage (see utils/premiumUnlock.js) and shared
 * by every PremiumLock on the page, so they all unlock together instantly.
 *
 * PREVIEW_MODE_UNLOCK_ALL (see config.js) is a separate, coarser override
 * for the developer's own full-app review — while it's on, this renders
 * children directly regardless of the user's unlock state or any caller's
 * `locked` flag. Leave it off in normal operation; the per-user unlock
 * button below is the real live flow.
 */
export default function PremiumLock({ children }) {
  const { t } = useTranslation();
  const { isPremiumUnlocked, setPremiumUnlocked } = usePremium();

  if (PREVIEW_MODE_UNLOCK_ALL || isPremiumUnlocked) return children;

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
        <button
          type="button"
          className="button"
          style={{ padding: '6px 14px', fontSize: 12, marginTop: 4 }}
          onClick={() => setPremiumUnlocked(true)}
        >
          {t('saju.premiumUnlockButton')}
        </button>
      </div>
    </div>
  );
}
