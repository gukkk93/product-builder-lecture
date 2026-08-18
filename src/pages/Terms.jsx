import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('terms.title')}</h1>
        <p className="subtitle">{t('terms.subtitle')}</p>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('terms.entertainmentHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('terms.entertainmentBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('terms.aboutHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('terms.aboutBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('terms.contactHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('terms.contactBody')}</p>
          <Link to="/contact" className="button" style={{ marginTop: 8 }}>{t('nav.contact')}</Link>
        </div>
      </div>
    </main>
  );
}
