import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function RefundPolicy() {
  const { t } = useTranslation();

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('refundPolicy.title')}</h1>
        <p className="subtitle">{t('refundPolicy.subtitle')}</p>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('refundPolicy.digitalGoodsHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('refundPolicy.digitalGoodsBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('refundPolicy.exceptionHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('refundPolicy.exceptionBody')}</p>
        </div>

        <div className="card" style={{ textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, fontSize: 18 }}>{t('refundPolicy.contactHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{t('refundPolicy.contactBody')}</p>
          <Link to="/contact" className="button" style={{ marginTop: 8 }}>{t('nav.contact')}</Link>
        </div>
      </div>
    </main>
  );
}
