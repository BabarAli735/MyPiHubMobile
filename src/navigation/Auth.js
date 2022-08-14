import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useScreenOptions, useTranslation } from "../hooks";
import { Privacy, Register } from "../screens";
import { ClinicRegisteration } from "../screens/clinic";
import ContinueAs from "../screens/ContinueAs";
import { DoctorRegisteration } from "../screens/doctor";
import { PatientRegisteration } from "../screens/patient";

const Stack = createNativeStackNavigator();

export default () => {
  // const { t } = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator
      initialRouteName={"Register"}
      screenOptions={screenOptions.stack}
    >
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContinueAs"
        component={ContinueAs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientRegisteration"
        component={PatientRegisteration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClinicRegisteration"
        component={ClinicRegisteration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorRegisteration"
        component={DoctorRegisteration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{ title: "navigation.privacy", ...screenOptions.back }}
      />
    </Stack.Navigator>
  );
};
