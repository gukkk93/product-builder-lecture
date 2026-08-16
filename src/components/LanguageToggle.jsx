import { useTranslation } from 'react-i18next';

const LABELS = { en: 'KO', ko: 'EN' }; // shows the language you'd switch *to*

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language === 'ko' ? 'ko' : 'en';

  function toggle() {
    const next = current === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('language', next);
  }

  return (
    <button className="header-link" onClick={toggle} aria-label="Switch language">
      {LABELS[current]}
    </button>
  );
}
