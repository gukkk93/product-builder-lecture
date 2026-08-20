import { useTranslation } from 'react-i18next';
import { ELEMENTS } from '../utils/saju';
import { PRODUCTS } from '../utils/premiumUnlock';
import { usePremium } from '../context/PremiumContext';
import ElementBadge from '../components/ElementBadge';

export default function Guide() {
  const { t } = useTranslation();
  const { unlockedProducts, lockProduct } = usePremium();

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('guide.title')}</h1>
        <p className="subtitle">{t('guide.subtitle')}</p>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('guide.sajuHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('guide.sajuBody1')}</p>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('guide.sajuBody2')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('guide.elementsHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('guide.elementsBody')}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 20 }}>
            {ELEMENTS.map((el) => (
              <ElementBadge key={el} element={el} size="large" />
            ))}
          </div>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('guide.accuracyHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('guide.accuracyBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('guide.scoreHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('guide.scoreBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('guide.strengthHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('guide.strengthBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('guide.featuresHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('guide.featuresBody')}</p>
        </div>

        {/* Dev-only convenience — lets testing flip a single product's
            unlock state back to locked without clearing localStorage by
            hand. Not part of the real user-facing flow. */}
        <div className="card" style={{ textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 18 }}>{t('guide.premiumTestHeading')}</h2>
          <p style={{ marginTop: 0, fontSize: 13, color: 'var(--text-muted)' }}>{t('guide.premiumTestIntro')}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
            {PRODUCTS.map((product) => {
              const unlocked = unlockedProducts[product];
              return (
                <div
                  key={product}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: 12,
                    border: '1px solid var(--border)',
                  }}
                >
                  <div>
                    <strong style={{ fontSize: 14 }}>{t(`guide.premiumTestProducts.${product}`)}</strong>
                    <div style={{ fontSize: 12, color: unlocked ? 'var(--accent)' : 'var(--text-muted)' }}>
                      {t(unlocked ? 'guide.premiumTestStatusUnlocked' : 'guide.premiumTestStatusLocked')}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button secondary"
                    style={{ padding: '6px 14px', fontSize: 12 }}
                    onClick={() => lockProduct(product)}
                    disabled={!unlocked}
                  >
                    {t('guide.premiumTestRelockButton')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
