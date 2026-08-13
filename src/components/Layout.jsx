import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  const { t } = useTranslation();

  return (
    <>
      <header className="site-header">
        <Link to="/" className="header-link">
          {t('app.name')}
        </Link>
        <div className="header-actions">
          <Link to="/idol-match" className="header-link">
            {t('idolMatch.navLabel')}
          </Link>
          <Link to="/guide" className="header-link">
            {t('guide.navLabel')}
          </Link>
          <Link to="/partnership" className="header-link">
            {t('nav.partnership')}
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <Outlet />
    </>
  );
}
