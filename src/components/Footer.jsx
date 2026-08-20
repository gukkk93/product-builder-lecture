import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePremium } from '../context/PremiumContext';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const { isPremiumUnlocked, setPremiumUnlocked } = usePremium();

  return (
    <footer className="site-footer">
      <div className="site-footer__links">
        <Link to="/privacy">{t('footer.privacy')}</Link>
        <Link to="/terms">{t('footer.terms')}</Link>
      </div>
      <p className="site-footer__copyright">{t('footer.copyright', { year })}</p>
      {isPremiumUnlocked && (
        <button
          type="button"
          onClick={() => setPremiumUnlocked(false)}
          style={{
            marginTop: 8,
            background: 'none',
            border: 'none',
            padding: 0,
            fontSize: 11,
            color: 'var(--text-muted)',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          {t('footer.relockPremium')}
        </button>
      )}
    </footer>
  );
}
