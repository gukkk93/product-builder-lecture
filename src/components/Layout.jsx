import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import Footer from './Footer';
import { ELEMENT_ICON_SRC } from './ElementBadge';

export default function Layout() {
  const { t } = useTranslation();

  return (
    <>
      <header className="site-header">
        <Link to="/" className="header-link">
          <img
            src={ELEMENT_ICON_SRC.Fire}
            alt=""
            style={{
              width: 20,
              height: 20,
              padding: 3,
              boxSizing: 'border-box',
              borderRadius: '50%',
              background: 'color-mix(in srgb, var(--el-fire) 20%, transparent)',
              objectFit: 'contain',
              marginRight: 6,
            }}
          />
          {t('app.name')}
        </Link>
        <div className="header-actions">
          <Link to="/guide" className="header-link">
            {t('guide.navLabel')}
          </Link>
          <Link to="/contact" className="header-link">
            {t('nav.contact')}
          </Link>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
