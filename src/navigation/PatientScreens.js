import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useScreenOptions, } from "../hooks";
import {useTranslation} from 'react-i18next'
import {
  PatientAccountAndBilling,
  PatientAppointment,
  PatientDashboard,
  PatientFamily,
  PatientFindDoctor,
  PatientFindDoctorDoctorAppointment,
  PatientFindDoctorDoctorProfile,
  PatientFindDoctorDoctors,
  PatientFindDoctorScheduleAnAppointment,
  PatientFindHospital,
  PatientFindHospitalHospitalDetails,
  PatientFindHospitalLocationHospitals,
  PatientFindHospitalSecondHospitalDetails,
  PatientFindMarket,
  PatientFindMarketLocationMarkets,
  PatientFindMarketMarketDetails,
  PatientFindMarketSecondMarketDetails,
  PatientFindPharmacy,
  PatientFindPharmacyLocationPharmacy,
  PatientFindPharmacyPharmacyDetails,
  PatientFindPharmacySecondPharmacyDetails,
  PatientHealthRecord,
  PatientProfile,
  PatientPromo,
  PatientRewards,
  PatientSettings,
} from "../screens/patient";

import { Chat, Chats } from "../screens/patient/Inbox";

const Stack = createNativeStackNavigator();

export default () => {
  const { t } = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator
      initialRouteName="PatientDashboard"
      screenOptions={screenOptions.stack}
    >
      {/* Find Pharmacy */}

      <Stack.Screen
        name="PatientFindPharmact"
        component={PatientFindPharmacy}
        options={{ title: "Search in Pharmacies/GP Clinics" }}
      />
      <Stack.Screen
        name="PatientFindSecondPharmacyDetail"
        component={PatientFindPharmacySecondPharmacyDetails}
        options={{ title: "Search in Pharmacies/GP Clinics" }}
      />
      <Stack.Screen
        name="PatientFindPharmacyDetail"
        component={PatientFindPharmacyPharmacyDetails}
        options={{ title: "Search in Pharmacies/GP Clinics" }}
      />

      <Stack.Screen
        name="PatientFindPharmacyLocation"
        component={PatientFindPharmacyLocationPharmacy}
        options={{ title: "Search in Pharmacies/GP Clinics" }}
      />

      {/* Find Market Place */}
      <Stack.Screen
        name="PatientFindMarket"
        component={PatientFindMarket}
        options={{ title: "Search in Marketeplaces" }}
      />

      <Stack.Screen
        name="PatientFindSecondMarketDetail"
        component={PatientFindMarketSecondMarketDetails}
        options={{ title: "Search in Marketplaces" }}
      />

      <Stack.Screen
        name="PatientFindMarketDetail"
        component={PatientFindMarketMarketDetails}
        options={{ title: "Search in Marketplaces" }}
      />

      <Stack.Screen
        name="PatientFindMarketLocation"
        component={PatientFindMarketLocationMarkets}
        options={{ title: "Search in Marketeplaces" }}
      />

      {/* My Account */}
      <Stack.Screen
        name="PatientAccountAndBilling"
        component={PatientAccountAndBilling}
        options={{ title: "Patient Billings and Account" }}
      />

      {/* Find Doctor */}
      <Stack.Screen
        name="PatientFindDoctorScheduleAppointment"
        component={PatientFindDoctorScheduleAnAppointment}
        options={{ title: "Appointment Schedualing" }}
      />
      <Stack.Screen
        name="PatientFindDoctorAppointment"
        component={PatientFindDoctorDoctorAppointment}
        options={{ title: "Appointment Schedualing" }}
      />
      <Stack.Screen
        name="PatientFindDoctorProfile"
        component={PatientFindDoctorDoctorProfile}
        options={{ title: "Appointment Schedualing" }}
      />
      <Stack.Screen
        name="PatientFindDoctor"
        component={PatientFindDoctor}
        options={{ title: "Find a Doctor" }}
      />
      <Stack.Screen
        name="PatientResultDoctors"
        component={PatientFindDoctorDoctors}
        options={{ title: "Find a Doctor" }}
      />

      {/* Find Hospital */}
      <Stack.Screen
        name="PatientFindSecondHospitalDetail"
        component={PatientFindHospitalSecondHospitalDetails}
        options={{ title: "Hospital Detail" }}
      />
      <Stack.Screen
        name="PatientFindHospitalDetail"
        component={PatientFindHospitalHospitalDetails}
        options={{ title: "Hospital Detail" }}
      />

      <Stack.Screen
        name="PatientFindHospital"
        component={PatientFindHospital}
        options={{ title: "Find Hospital" }}
      />
      <Stack.Screen
        name="PatientFindHospitalLocation"
        component={PatientFindHospitalLocationHospitals}
        options={{ title: "Find Hospital" }}
      />

      <Stack.Screen
        name="PatientDashboard"
        component={PatientDashboard}
        options={{ title: "Dashboard" }}
      />

      <Stack.Screen
        name="PatientAppointment"
        component={PatientAppointment}
        options={{ title: "Appointments" }}
      />

      <Stack.Screen
        name="PatientHealthRecord"
        component={PatientHealthRecord}
        options={{ title: "Health Record" }}
      />

      <Stack.Screen
        name="PatientDependents"
        component={PatientFamily}
        options={{ title: "My Dependents" }}
      />

      <Stack.Screen
        name="PatientPromo"
        component={PatientPromo}
        options={{ title: "My Promo" }}
      />

      <Stack.Screen
        name="PatientRewards"
        component={PatientRewards}
        options={{ title: "My Promo" }}
      />

      <Stack.Screen name="PatientProfile" component={PatientProfile} />

      <Stack.Screen
        name="PatientSettings"
        component={PatientSettings}
        options={{ title: t("navigation:settings"), ...screenOptions.profile }}
      />

      <Stack.Screen name="PatientInbox" component={Chats} />

      <Stack.Screen name="PatientChat" component={Chat} />
    </Stack.Navigator>
  );
};
