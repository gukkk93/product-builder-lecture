import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PREVIEW_MODE_UNLOCK_ALL } from '../config';
import { useCredits } from '../context/CreditsContext';

/**
 * Same blurred-silhouette-plus-overlay look as PremiumLock.jsx, but gates
 * on a specific credit-ledger item (`unlockKey`, e.g. 'idol:bts-rm') instead
 * of a whole product's unlock flag — used only for IdolMatch/DramaMatch's
 * per-member/per-actor reads (see InsightSection.jsx's `unlockKey` prop).
 * Every other product still uses PremiumLock unchanged.
 */
export default function CreditLock({ unlockKey, children }) {
  const { t } = useTranslation();
  const { balance, unlockedKeys, consumeCredit } = useCredits();
  const [pending, setPending] = useState(false);

  if (import.meta.env.DEV && !unlockKey) {
    console.error('CreditLock: missing required `unlockKey` prop');
  }

  if (PREVIEW_MODE_UNLOCK_ALL || unlockedKeys.includes(unlockKey)) return children;

  async function handleUnlock() {
    setPending(true);
    try {
      await consumeCredit(unlockKey);
    } catch {
      // Network hiccup — leave the lock in place, button re-enables below
      // so the visitor can just try again.
    } finally {
      setPending(false);
    }
  }

  const hasCredits = balance > 0;

  return (
    <div style={{ position: 'relative', minHeight: 92 }}>
      <div style={{ filter: 'blur(6px)', opacity: 0.55, pointerEvents: 'none', userSelect: 'none' }} aria-hidden="true">
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
        <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{t('matchCommon.creditLock.note')}</p>
        {hasCredits ? (
          <button
            type="button"
            className="button"
            style={{ padding: '6px 14px', fontSize: 12, marginTop: 4 }}
            onClick={handleUnlock}
            disabled={pending}
          >
            {pending ? t('matchCommon.creditLock.unlocking') : t('matchCommon.creditLock.unlockButton')}
          </button>
        ) : (
          <Link to="/credits" className="button" style={{ padding: '6px 14px', fontSize: 12, marginTop: 4 }}>
            {t('matchCommon.creditLock.buyButton')}
          </Link>
        )}
      </div>
    </div>
  );
}
