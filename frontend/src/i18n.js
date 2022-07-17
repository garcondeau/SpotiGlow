import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { supportedLanguages } from "./utils/consts";

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init(
  {
    supportedLngs: Object.keys(supportedLanguages),
    fallbackLng: false,
    // debug: true,
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    react: {
      transSupportBasicHtmlNodes: true,
      bindI18n: 'languageChanged',
    },
  }
)

export default i18n;