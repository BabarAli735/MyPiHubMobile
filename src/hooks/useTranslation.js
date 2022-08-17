import i18n from 'i18next';
import {
 initReactI18next
} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import translations from '../constants/translations';

export const TranslationContext = React.createContext({});



export const TranslationProvider = ({
  children,
}) => {
  const [locale, setLocale] = useState('en');



//   // Set the locale once at the beginning of your app.
//   i18n.changeLanguage(locale);
//   // Set the key-value pairs for the different languages you want to support.
//   // i18n.Translation = translations;
//   // When a value is missing from a language it'll fallback to another language with the key present.
//   // i18n.fallbacks = true;

//   const t = useCallback(
//     (scope, options) => {
//       return i18n.t(scope, {...options, locale});
//     },
//     [locale],
//   );

//   // get locale from storage
//   const getLocale = useCallback(async () => {
//     // get preferance gtom storage
//     const localeJSON = await AsyncStorage.getItem('locale');

//     // set Locale / compare if has updated
//     setLocale(localeJSON !== null ? localeJSON : RNLocalize.locale);
//   }, [setLocale]);

//   useEffect(() => {
//     getLocale();
//   }, [getLocale]);

//   useEffect(() => {
//     // save preferance to storage
//     AsyncStorage.setItem('locale', locale);
//   }, [locale]);

//   const contextValue = {
//     t,
//     locale,
//     setLocale,
//     translate: t,
//   };

  return (
    <TranslationContext.Provider >
      {children}
    </TranslationContext.Provider>
  );
};

/*
 * useTranslation hook based on i18n-js
 * Source: https://github.com/fnando/i18n-js
 */
export const useTranslation = () =>
  useContext(TranslationContext) ;
