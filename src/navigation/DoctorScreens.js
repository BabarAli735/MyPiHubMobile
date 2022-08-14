import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useScreenOptions } from "../hooks";
import {
  DoctorAccount,
  DoctorAppointment,
  DoctorDashboard,
  DoctorProfile,
  DoctorRewards,
  DoctorSettings,
  DoctorSubscription,
  MyPatients,
  SmartAssistant,
} from "../screens/doctor";
import { Chat, Chats } from "../screens/doctor/Inbox";

const Stack = createNativeStackNavigator();

export default () => {
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator
      initialRouteName="DoctorDashboard"
      screenOptions={screenOptions.stack}
    >
      <Stack.Screen
        name="DoctorDashboard"
        component={DoctorDashboard}
        options={{ title: "Dashboard" }}
      />
      <Stack.Screen
        name="DoctorAppointments"
        component={DoctorAppointment}
        options={{ title: "Appointment" }}
      />
      <Stack.Screen
        name="DoctorPatients"
        component={MyPatients}
        options={{ title: "My Patients" }}
      />
      <Stack.Screen
        name="SmartAssistant"
        component={SmartAssistant}
        options={{ title: "Smart Assistant" }}
      />

      <Stack.Screen
        name="DoctorSubscription"
        component={DoctorSubscription}
        options={{ title: "Subscription" }}
      />

      <Stack.Screen name="DoctorInbox" component={Chats} />

      <Stack.Screen name="DoctorChat" component={Chat} />

      <Stack.Screen
        name="DoctorAccount"
        component={DoctorAccount}
        options={{ title: "My Account" }}
      />

      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{ title: "Profile" }}
      />

      <Stack.Screen
        name="DoctorSettings"
        component={DoctorSettings}
        options={{ title: "Settings" }}
      />

      <Stack.Screen
        name="DoctorRewards"
        component={DoctorRewards}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
};
