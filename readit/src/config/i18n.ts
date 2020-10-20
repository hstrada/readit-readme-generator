import i18next from 'i18next';

import translations from '../i18n';

import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['pt', 'en'],
    fallbackLng: 'en',
    lng: 'pt',
    resources: translations,
  });

export default i18next;
