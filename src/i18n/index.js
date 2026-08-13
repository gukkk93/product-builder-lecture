import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';

// Only English ships in this MVP. Adding a language later just means adding
// a `locales/{lang}.json` file (same shape as en.json) and registering it
// in `resources` below, plus a matching fortune-template file in
// src/data/fortuneTemplates.js.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
