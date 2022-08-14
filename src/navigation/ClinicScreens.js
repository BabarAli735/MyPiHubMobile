import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useScreenOptions } from "../hooks";
import { Dashboard, Info } from "../screens/clinic";

const Stack = createNativeStackNavigator();

export default () => {
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="ClinicDashboard"
        component={Dashboard}
        options={{ title: "Dashboard" }}
      />
      <Stack.Screen
        name="ClinicInfo"
        component={Info}
        options={{ title: "Clinical Info" }}
      />
    </Stack.Navigator>
  );
};
