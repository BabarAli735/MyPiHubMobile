import { NativeBaseProvider } from "native-base";
import React from "react";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import AuthProvider from "./src/contexts/auth";
import ClinicProvider from "./src/contexts/clinic";
import { DataProvider } from "./src/hooks";
import AppNavigator from "./src/navigation/App";

LogBox.ignoreLogs([
  "Each child in a list should",
  "Warning: Encountered two children with the same key",
]);

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <ClinicProvider>
          <DataProvider>
            <AppNavigator />
          </DataProvider>
        </ClinicProvider>
      </AuthProvider>
    </NativeBaseProvider>
  );
}
