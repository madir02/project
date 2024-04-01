// index.js или App.js

import React from 'react';
import ReactDOM from 'react-dom';
import '';
import App from './App';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

i18next.use(initReactI18next).init({
  lng: 'en', // Основной язык - английский
  fallbackLng: 'en', // Резервный язык - английский
  debug: true, // Включить режим отладки
  resources: {
    en: {
      translation: {
        "Latest-story": "Latest Story",
      }
    },
    ru: {
      translation: {
        "Latest-story": "Последняя история",
      }
    },
    kk: {
      translation: {
        "Latest-story": "Соңғы қысқа тарих",
      }
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
