import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__links">
        <Link to="/privacy">{t('footer.privacy')}</Link>
        <Link to="/terms">{t('footer.terms')}</Link>
        <Link to="/refund-policy">{t('footer.refundPolicy')}</Link>
      </div>
      <p className="site-footer__copyright">{t('footer.copyright', { year })}</p>
    </footer>
  );
}
