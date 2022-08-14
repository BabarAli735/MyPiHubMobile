import { useNavigation } from "@react-navigation/native";
import { Input, Stack, Text } from "native-base";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Block, Button, Screen, Text as MyText } from "../../../components";
import { Inpatient_Locations } from "../../../constants/mocks";
import { useTheme } from "../../../hooks";
import HospitalCardSecond from "./HospitalCardSecond";
import OutpatientLocations from "./OutpatientLocations";
import SpecialServices from "./SpecialServices";

export default (props) => {
  const { assets, gradients, sizes } = useTheme();

  const { navigate } = useNavigation();

  return (
    <Screen style={styles.container}>
      <FlatList
        data={Inpatient_Locations}
        ListHeaderComponent={
          <Stack>
            <ImageBackground
              style={styles.background}
              source={assets.background}
            >
              <Text textAlign={"center"} my={2} color="white">
                Find a Hospital/Clinic and scheduale appointment
              </Text>
              <Text
                textAlign={"center"}
                mb={5}
                fontWeight="bold"
                fontSize={"lg"}
                color="white"
              >
                Find Clinic
              </Text>
              <Input
                width="90%"
                bgColor="white"
                placeholder="Search by Clinics by or Treatment/Name"
              />
              <Button
                onPress={() => navigate("PatientFindHospitalLocation")}
                row
                gradient={gradients.dark}
                width="90%"
                marginTop={3}
              >
                <Block
                  row
                  align="center"
                  justify="center"
                  paddingHorizontal={sizes.sm}
                >
                  <MyText size={12} white bold transform="uppercase">
                    Search
                  </MyText>
                </Block>
              </Button>
              <Button
                onPress={() => navigate("PatientFindHospitalLocation")}
                row
                gradient={gradients.dark}
                width="90%"
                marginTop={3}
              >
                <Block
                  row
                  align="center"
                  justify="center"
                  paddingHorizontal={sizes.sm}
                >
                  <MyText size={12} white bold transform="uppercase">
                    Nearby Clinics
                  </MyText>
                </Block>
              </Button>
            </ImageBackground>
            <Text
              textAlign={"center"}
              color="gray.500"
              mt={20}
              fontWeight="bold"
              fontSize={"xl"}
            >
              Hospitals/Clinics
            </Text>
          </Stack>
        }
        renderItem={({ item }) => (
          <HospitalCardSecond
            title={item.title}
            info={item.info}
            image={item.image}
          />
        )}
        ListFooterComponent={
          <>
            <OutpatientLocations />
            <SpecialServices />
          </>
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  background: {
    height: 240,
    alignItems: "center",
  },
});
