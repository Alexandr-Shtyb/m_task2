import i18n from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { Languages } from "./constants/global";
import LanguageDetector from "i18next-browser-languagedetector";
import Russian from "./locales/ru/ru.json";
import English from "./locales/en/en.json";

const resources = {
  ru: {
    translation: Russian,
  },
  en: {
    translation: English,
  },
};

i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: Languages.RU,
    fallbackLng: Languages.RU,
    interpolation: {
      escapeValue: false,
    },
  });
// i18n.changeLanguage("en");

export default i18n;
