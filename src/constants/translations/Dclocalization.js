import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
const getDefaultLang = async () => {

  const storedLang = await AsyncStorage.getItem('currentLnaguage');
  console.log(storedLang+"aaa");
  /*if(storedLang!= null){
    i18n.defaultLocale = storedLang;
    i18n.locale = storedLang;
    i18n.fallbacks = true;
  }*/

  return i18n
    .use(initReactI18next) 
    .init({
      compatibilityJSON: 'v3',
      resources: {
        en: en,
       fr:fr,
      },
      //lng: storedLang ? storedLang : 'ar', 
      lng: storedLang || "ar",
      interpolation: {
        escapeValue: false, 
      },

      fallbackLng: ['en', 'fr'],
    });
};

export default getDefaultLang();