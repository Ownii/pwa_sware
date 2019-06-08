import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './languages/de';
import en from './languages/en';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: en
    },
    de: {
        translation: de
    }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        lng: navigator.language || navigator.userLanguage,
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            wait: true
        }
    });

export default i18n;
