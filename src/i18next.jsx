import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Las traducciones para los dos idiomas (español e inglés)
const resources = {
  en: {
    translation: {
      "cardTitle": "Adopt a Cat",
      "cardDescription": "Find your new best friend from our selection of adorable cats!",
    },
  },
  es: {
    translation: {
      "cardTitle": "Adopta un Gato",
      "cardDescription": "¡Encuentra a tu nuevo mejor amigo entre nuestra selección de adorables gatos!",
    },
  },
};

i18n
  .use(initReactI18next) // Asegúrate de usar la versión para React
  .init({
    resources,
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Si no existe traducción, usar español
    interpolation: {
      escapeValue: false, // No es necesario escapar valores
    },
  });

export default i18n;
