import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ComingSoon() {
  const { t } = useTranslation();

  return (
    <main className="page">
      <div className="page-content">
        <div className="card">
          <div className="coming-soon-icon">🚧</div>
          <h1>{t('comingSoon.title')}</h1>
          <p className="subtitle">{t('comingSoon.body')}</p>
          <Link to="/" className="button">{t('comingSoon.backHome')}</Link>
        </div>
      </div>
    </main>
  );
}
