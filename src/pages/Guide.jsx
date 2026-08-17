import { useTranslation } from 'react-i18next';
import { ELEMENTS } from '../utils/saju';
import ElementBadge from '../components/ElementBadge';

export default function Guide() {
  const { t } = useTranslation();

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

        <div className="card" style={{ textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('guide.featuresHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('guide.featuresBody')}</p>
        </div>
      </div>
    </main>
  );
}
