import  FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import { Center, HStack, Text, VStack } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { VictoryLegend } from "victory-native";
import { Block, Button } from "../../components";
import { useTheme } from "../../hooks";
import { FirstCards } from "./DashboardComponents";
import CaseLineChart from "./DashboardComponents/CaseLineChart";
import GenderLegend from "./DashboardComponents/GenderLegend";
import { HistogramChart } from "./DashboardComponents/HistogramChart";
import HospitalPie from "./DashboardComponents/HospitalPie";
import LineChart from "./DashboardComponents/LineChart";
import VisitedCards from "./DashboardComponents/VisitedCards";

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
        <FirstCards />
      </Block>
      <Block card marginBottom={sizes.sm}>
        <HStack alignItems={"center"} justifyContent="space-between">
          <Text fontWeight={"bold"}>Patient Visit By Department</Text>
          <Button>
            <HStack
              alignItems={"center"}
              space={2}
              bgColor={"blue.100"}
              p={2}
              px={3}
              rounded="lg"
            >
              <Text textAlign={"center"}>Weekly</Text>
              <FontAwesome5 name="angle-down" />
            </HStack>
          </Button>
        </HStack>
        <HospitalPie />
      </Block>

      <Block card marginBottom={sizes.sm}>
        <HStack mb="2" alignItems={"center"} justifyContent="space-between">
          <Text fontWeight={"bold"}>Average Patients Visit</Text>
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
        <VisitedCards />
      </Block>

      <Block card marginBottom={sizes.sm}>
        <VStack position="absolute" top={"1/4"} left={10}>
          <HStack alignItems={"center"} space={1}>
            <Center h="1" w={"2"} rounded={"md"} bgColor={"blue.400"} />
            <Text>54.3k</Text>
          </HStack>
          <HStack alignItems={"center"} space={1}>
            <Center h="1" w={"2"} rounded={"md"} bgColor={"orange.400"} />
            <Text>52.8k</Text>
          </HStack>
        </VStack>
        <HStack mb="2" alignItems={"center"} justifyContent="space-between">
          <Text fontWeight={"bold"}>Reported Cases</Text>
          <Button>
            <HStack
              alignItems={"center"}
              space={2}
              bgColor={"blue.100"}
              p={2}
              px={3}
              rounded="lg"
            >
              <Text textAlign={"center"}>Neurology</Text>
              <FontAwesome5 name="angle-down" />
            </HStack>
          </Button>
        </HStack>
        <CaseLineChart />
        <VictoryLegend
          y={20}
          x={20}
          symbolSpacer={10}
          height={40}
          orientation="horizontal"
          gutter={30}
          data={[
            { name: "Positive", symbol: { fill: "skyblue" } },
            { name: "Negative", symbol: { fill: "orange" } },
          ]}
        />
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
