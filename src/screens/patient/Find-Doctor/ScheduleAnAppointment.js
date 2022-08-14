import { MaterialCommunityIcons } from "react-native-vector-icons";
import {
  Divider,
  HStack,
  Image as NImage,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Screen } from "../../../components";
import { useTheme } from "../../../hooks";
import AppointmentForm from "./AppointmentForm";
import Setps from "./Steps";

export default (props) => {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <VStack bgColor={"coolGray.200"}>
          <Setps step={2} totalSteps={3} />
          <Text textAlign={"center"} fontSize="lg" my={2} fontWeight={"bold"}>
            Schedule An Appointment
          </Text>
        </VStack>
        <ProfileCard />
        <AppointmentForm />
      </ScrollView>
    </Screen>
  );
};

const ProfileCard = ({}) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <VStack space={2} p="2" mb="2">
      <Text fontSize="md" my={2} fontWeight={"bold"}>
        Appointment Details
      </Text>
      <VStack space={2}>
        <HStack>
          <NImage
            source={assets.doctor}
            height="100px"
            width="100px"
            alt="doctor"
            resizeMode="cover"
          />
          <VStack px={2}>
            <Text fontSize="md" fontWeight={"bold"}>
              Prof. Dr. Muhammad Shamsir
            </Text>
            <Text>Obstetrics and Gynaecology</Text>
          </VStack>
        </HStack>
        <VStack px={2} space={2}>
          <HStack alignItems={"center"} space={2}>
            <MaterialCommunityIcons name="calendar" size={20} />
            <Text> Date And Time</Text>
          </HStack>
          <Text ml={3}>Friday, 01 April, 2022</Text>
        </VStack>

        <VStack px={2} space={2}>
          <HStack alignItems={"center"} space={2}>
            <MaterialCommunityIcons name="map-marker" size={20} />
            <Text fontWeight={"bold"}> Location</Text>
          </HStack>
          <Text ml={3}>doctor location Details</Text>
        </VStack>

        <VStack px={2} space={2}>
          <HStack alignItems={"center"} space={2}>
            <MaterialCommunityIcons name="clipboard-check" size={20} />
            <Text fontWeight={"bold"}> Visit Type</Text>
          </HStack>
          <Text ml={3}>Office Visit</Text>
        </VStack>

        <Divider my={2} />

        <VStack px={2} space={2}>
          <Text fontWeight={"bold"}>Accepted Insuraces</Text>
          <Text ml={3}>Allianz General Insurance Company</Text>
          <Text ml={3}>MyHealth Insurance Company</Text>
          <Text ml={3}>Health Everywhere Insurance Company</Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
