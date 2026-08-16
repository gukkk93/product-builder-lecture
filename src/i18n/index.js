import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ko from './locales/ko.json';

// Adding another language means adding a `locales/{lang}.json` file (same
// shape as en.json) and registering it below, plus a matching block in
// each src/data/*Templates.js content bank.
const savedLanguage = typeof localStorage !== 'undefined' ? localStorage.getItem('language') : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ko: { translation: ko },
  },
  lng: savedLanguage || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
