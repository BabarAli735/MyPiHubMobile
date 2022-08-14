import { FontAwesome5 } from "react-native-vector-icons";
import { HStack, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Block, Button } from "../../components";
import { useTheme } from "../../hooks";
import AppointmentsRequests from "./DashboardComponents/AppointmentsRequests";
import DoctorReviews from "./DashboardComponents/DoctorReviews";
import GenderLegend from "./DashboardComponents/GenderLegend";
import { HistogramChart } from "./DashboardComponents/HistogramChart";
import LineChart from "./DashboardComponents/LineChart";
import NextPatient from "./DashboardComponents/NextPatient";
import StatisticCards from "./DashboardComponents/StatisticCards";
import TodayAppointments from "./DashboardComponents/TodayAppointments";

const Dashboard = () => {
  const { sizes } = useTheme();

  return (
    <Block
      scroll
      padding={sizes.padding}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: sizes.xxl }}
    >
      <Block card marginBottom={sizes.sm}>
        <StatisticCards />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <TodayAppointments />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <NextPatient />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <AppointmentsRequests />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <AppointmentsRequests />
      </Block>

      <Block card marginBottom={sizes.sm}>
        <HStack mb="2" alignItems={"center"} justifyContent="space-between">
          <Text fontWeight={"bold"}>Revenues</Text>
          <Button>
            <HStack
              alignItems={"center"}
              space={2}
              bgColor={"blue.100"}
              p={2}
              px={3}
              rounded="lg"
            >
              <Text textAlign={"center"}>Monthly</Text>
              <FontAwesome5 name="angle-down" />
            </HStack>
          </Button>
        </HStack>
        <HistogramChart />
      </Block>

      <Block card marginBottom={sizes.sm}>
        <HStack mb="2" alignItems={"center"} justifyContent="space-between">
          <Text fontWeight={"bold"}>Patient Visit By Gender</Text>
          <Button>
            <HStack
              alignItems={"center"}
              space={2}
              bgColor={"blue.100"}
              p={2}
              px={3}
              rounded="lg"
            >
              <Text textAlign={"center"}>Monthly</Text>
              <FontAwesome5 name="angle-down" />
            </HStack>
          </Button>
        </HStack>
        <LineChart />
        <GenderLegend />
      </Block>

      <Block card marginBottom={sizes.sm}>
        <DoctorReviews />
      </Block>
    </Block>
  );
};

export default Dashboard;

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
