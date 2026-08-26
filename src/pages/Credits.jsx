import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { initializePaddle } from '@paddle/paddle-js';
import { CREDIT_PACKS } from '../data/creditPacks';
import { getOrCreateAnonId } from '../utils/credits';
import { useCredits } from '../context/CreditsContext';

const PADDLE_TOKEN = import.meta.env.VITE_PADDLE_CLIENT_TOKEN;
const PADDLE_ENV = import.meta.env.VITE_PADDLE_ENV || 'sandbox';

// Buying credits for idolMatch/dramaMatch's per-member unlocks (see
// CreditLock.jsx) — the only two products on this credit system, everything
// else still uses the plain per-product PremiumLock. Paddle.js's overlay
// checkout runs entirely client-side (no server round-trip to start it);
// the actual credit grant only ever happens server-side once Paddle's
// webhook fires (functions/webhooks/paddle.js) — this page's post-purchase
// "processing" state just polls the balance until that lands, it never
// grants credit itself.
export default function Credits() {
  const { t } = useTranslation();
  const { balance, refreshCredits } = useCredits();
  const paddleRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | processing | success | error

  useEffect(() => {
    if (!PADDLE_TOKEN) return;
    initializePaddle({
      environment: PADDLE_ENV,
      token: PADDLE_TOKEN,
      eventCallback: (event) => {
        if (event.name === 'checkout.completed') {
          pollForCredit();
        }
      },
    }).then((instance) => {
      paddleRef.current = instance;
    });
  }, []);

  async function pollForCredit() {
    setStatus('processing');
    // The webhook usually lands within a second or two, but isn't
    // instantaneous — poll rather than assume the very next fetch already
    // reflects it.
    for (let attempt = 0; attempt < 8; attempt++) {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      await refreshCredits();
    }
    setStatus('success');
  }

  function handleBuy(pack) {
    if (!paddleRef.current) return;
    paddleRef.current.Checkout.open({
      items: [{ priceId: pack.id, quantity: 1 }],
      customData: { anon_id: getOrCreateAnonId() },
    });
  }

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('credits.title')}</h1>
        <p className="subtitle">{t('credits.subtitle')}</p>

        <div className="card" style={{ textAlign: 'left' }}>
          <p style={{ marginTop: 0, fontSize: 14, color: 'var(--text-muted)' }}>
            {t('credits.currentBalance', { count: balance ?? 0 })}
          </p>

          {!PADDLE_TOKEN ? (
            <p style={{ fontSize: 14 }}>{t('credits.unavailable')}</p>
          ) : status === 'processing' ? (
            <p style={{ fontSize: 15 }}>{t('credits.processing')}</p>
          ) : status === 'success' ? (
            <>
              <p style={{ fontSize: 15 }}>{t('credits.success', { count: balance ?? 0 })}</p>
              <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                <Link className="button" to="/idol-match">{t('credits.backToIdolMatch')}</Link>
                <Link className="button secondary" to="/drama-match">{t('credits.backToDramaMatch')}</Link>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {CREDIT_PACKS.map((pack) => (
                <button
                  key={pack.id}
                  type="button"
                  className="button"
                  style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                  onClick={() => handleBuy(pack)}
                >
                  <span>{t('credits.packLabel', { count: pack.credits })}</span>
                  <span>{pack.priceLabel}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
