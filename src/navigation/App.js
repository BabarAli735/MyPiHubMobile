import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { AuthContext } from "../contexts/auth";
import { ThemeProvider, TranslationProvider, useData } from "../hooks";
import Auth from "./Auth";
import ClinicMenu from "./ClinicMenu";
import DoctorMenu from "./DoctorMenu";
import PatientMenu from "./PatientMenu";

export default function MainNavigatin() {
    const { isDark, theme, setTheme } = useData();
    const { isAuth, role } = useContext(AuthContext);
  
    /* set the status bar based on isDark constant */
    useEffect(() => {
      Platform.OS === "android" && StatusBar.setTranslucent(true);
      StatusBar.setBarStyle(isDark ? "light-content" : "dark-content");
      return () => {
        StatusBar.setBarStyle("default");
      };
    }, [isDark]);
    const navigationTheme = {
      ...DefaultTheme,
      dark: isDark,
      colors: {
        ...DefaultTheme.colors,
        border: "rgba(0,0,0,0)",
        text: String(theme.colors.text),
        card: String(theme.colors.card),
        primary: String(theme.colors.primary),
        notification: String(theme.colors.primary),
        background: String(theme.colors.background),
      },
    };
  return (
    <TranslationProvider>
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <NavigationContainer theme={navigationTheme}>
        {isAuth ? (
          role === "patient" ? (
            <PatientMenu />
          ) : role === "clinic" ? (
            <ClinicMenu />
          ) : role === "doctor" ? (
            <DoctorMenu />
          ) : (
            <PatientMenu />
          )
        ) : (
          <Auth />
        )}
      </NavigationContainer>
    </ThemeProvider>
  </TranslationProvider>
  )
}

