import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('privacy.title')}</h1>
        <p className="subtitle">{t('privacy.subtitle')}</p>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('privacy.birthDataHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('privacy.birthDataBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('privacy.partnerDataHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('privacy.partnerDataBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('privacy.shareImageHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('privacy.shareImageBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('privacy.analyticsHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('privacy.analyticsBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('privacy.storageHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('privacy.storageBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('privacy.contactHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('privacy.contactBody')}</p>
          <Link to="/contact" className="button" style={{ marginTop: 8 }}>{t('nav.contact')}</Link>
        </div>
      </div>
    </main>
  );
}
