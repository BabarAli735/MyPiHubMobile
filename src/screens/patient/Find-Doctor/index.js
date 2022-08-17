import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, Input, Stack, Text, VStack } from "native-base";
import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Block, Button, Screen, Text as MyText } from "../../../components";
import { useTheme } from "../../../hooks";
import SpecialServices from "./SpecialServices";

export default (props) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const [show, setShow] = useState(false);

  return (
    <Screen style={styles.container}>
      <FlatList
        nestedScrollEnabled
        ListHeaderComponent={<SearchCard />}
        data={[
          {
            id: "1",
            title: "Allergists",
          },
          {
            id: "2",
            title: "Cardiologists",
            type: "list",
            info: [
              { id: "1", title: "Adult Congenital Heart Disease Doctors" },
              { id: "2", title: "Cardiac Electrophysiologists" },
              { id: "3", title: "Heart Failure Doctors" },
            ],
          },
          {
            id: "3",
            title: "Acupuncturists",
          },
        ]}
        renderItem={({ item }) => (
          <SpecialistCard
            title={item.title}
            info={item.info}
            type={item.type}
          />
        )}
        ListFooterComponent={
          <VStack my={2}>
            <Button
              style={{ alignSelf: "center" }}
              onPress={() => setShow(!show)}
              row
              gradient={gradients.dark}
              width="60%"
            >
              <Block
                row
                align="center"
                justify="center"
                paddingHorizontal={sizes.sm}
              >
                <MyText size={12} white bold transform="uppercase">
                  View All Specialties
                </MyText>
                <MaterialIcons
                  name={show ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  size={20}
                  color={colors.white}
                  style={{ marginLeft: sizes.s }}
                />
              </Block>
            </Button>
          </VStack>
        }
      />
    </Screen>
  );
};

const SearchCard = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  // change these
  const [items, setItems] = useState([
    { label: "Primacy Care", value: "Primary Care" },
    { label: "Cardiology", value: "Cardiology" },
  ]);
  const { assets, gradients, sizes } = useTheme();

  const { navigate } = useNavigation();

  return (
    <Stack>
      <ImageBackground style={styles.background} source={assets.background}>
        <VStack space={3} mx={4}>
          <Text
            textAlign={"center"}
            fontWeight="bold"
            fontSize={"lg"}
            color="white"
          >
            Find A Doctor
          </Text>
          <DropDownPicker
            searchable={true}
            placeholder="Speciality,Condition,Doctor or Practice"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          {/* <Input
            bgColor="white"
            placeholder="Speciality,Condition,Doctor or Practice"
          /> */}
          <Input bgColor="white" placeholder="Zip Code or Neighborhood" />
          <Button
            style={{ alignSelf: "center" }}
            onPress={() => navigate("PatientResultDoctors")}
            row
            gradient={gradients.dark}
            width="100%"
          >
            <Block
              row
              align="center"
              justify="center"
              paddingHorizontal={sizes.sm}
            >
              <MyText size={12} white bold transform="uppercase">
                Current Location
              </MyText>
            </Block>
          </Button>
          <Button
            style={{ alignSelf: "center" }}
            onPress={() => navigate("PatientResultDoctors")}
            row
            gradient={gradients.dark}
            width="100%"
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
        </VStack>
      </ImageBackground>

      <SpecialServices />
      <Text textAlign={"center"} mb={5} fontWeight="bold" fontSize={"lg"}>
        Find a Doctor by Specialty
      </Text>
      <Text textAlign={"center"}>
        Select a specialty to view all doctors and schedule an appointment.
      </Text>
    </Stack>
  );
};

const SpecialistCard = ({ type, title, info }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  const [show, setShow] = useState(false);
  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack px={2} space={2} my="2">
        <TouchableOpacity onPress={() => type == "list" && setShow(!show)}>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <HStack alignItems={"center"} space={2}>
              <Text fontWeight="bold" fontSize={"md"}>
                {title}
              </Text>
            </HStack>
            {type == "list" && (
              <Center
                p="1"
                borderRadius={"full"}
                bgColor={show ? colors.primary : "gray.300"}
              >
                <MaterialIcons
                  name={show ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  size={20}
                  color={show ? colors.white : colors.primary}
                />
              </Center>
            )}
          </HStack>
        </TouchableOpacity>

        {show && (
          <VStack space={2} mt={2}>
            {info.map((i) => (
              <TouchableOpacity key={i.id}>
                <Text fontWeight="bold" color="purple.800">
                  {i.title}
                </Text>
              </TouchableOpacity>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  background: {
    width: "100%",
    justifyContent: "center",
    paddingVertical: 10,
  },
});
