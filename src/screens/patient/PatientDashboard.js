import { Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Block } from "../../components";
import HelthVictory from "../../components/charts/HelthVictory";
import HospitalPie from "../../components/charts/HospitalPie";
import MarketPie from "../../components/charts/MarketPie";
import PharmacyPie from "../../components/charts/PharmacyPie";
import Points from "../../components/charts/Points";
import Radar from "../../components/charts/Radar";
import Map from "../../components/MapView";
import { useTheme } from "../../hooks";

const PatientDashboard = () => {
  const { sizes } = useTheme();

  return (
    <Block
      scroll
      padding={sizes.padding}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: sizes.xxl }}
    >
      <Block card marginBottom={sizes.sm}>
        <Text textAlign={"center"}>Nearby Hospitals/Clinics</Text>
        <Map />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <Text textAlign={"center"}>Promotions by Hospitals</Text>
        <HospitalPie />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <Text textAlign={"center"}>Overall Appointments</Text>
        <Points />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <Text textAlign={"center"}>Smart marketeplace usage by apps</Text>
        <MarketPie />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <Text textAlign={"center"}>HEALTH INDEX</Text>
        <HelthVictory />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <Text textAlign={"center"}>Promotions by Pharmacies</Text>
        <PharmacyPie />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <Text textAlign={"center"}>Chronic Wellness Tracker</Text>
        <Radar />
      </Block>
    </Block>
  );
};

export default PatientDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
