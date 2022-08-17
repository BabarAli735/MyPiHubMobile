
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { Avatar, HStack, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Block, Button, Screen, Text as MyText } from "../../../components";
import CalendarTwo from "../../../components/CalendarTwo";
import { useTheme } from "../../../hooks";

export default (props) => {
  return (
    <Screen style={styles.container}>
      <FlatList ListHeaderComponent={<ProfileCard />} />
    </Screen>
  );
};

const datesData = {
  [dayjs().add(-3, "day").format("YYYY-MM-DD")]: {
    Morning: ["10:30 AM", "11:00 AM", "11:22 AM"],
    Afternoon: ["01:00 PM", "02:33 PM"],
  },
  [dayjs().format("YYYY-MM-DD")]: {
    Afternoon: ["01:00 PM", "02:33 PM"],
  },
  [dayjs().add(4, "day").format("YYYY-MM-DD")]: {
    Morning: ["09:30 AM", "10:30 AM", "11:00 AM", "11:22 AM"],
  },
};

const ProfileCard = ({}) => {
  const { navigate } = useNavigation();
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const [markedDates] = useState([
    dayjs().add(-3, "day").format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
    dayjs().add(4, "day").format("YYYY-MM-DD"),
  ]);

  const [selected, setSelected] = useState();

  const [date, setDate] = useState();

  useEffect(() => {
    if (date) {
      const times = datesData[date];
      const listItems = Object.keys(times);
      setSelected({ keys: listItems, times: times });
    }
  }, [date]);

  return (
    <VStack space={2} shadow="1" borderRadius="xl" p="3" my="2" mb="4">
      <VStack space={2}>
        <Avatar source={assets.doctor} size="lg" alignSelf="center" />
        <Text textAlign={"center"} fontWeight={"bold"}>
          Prof. Dr. Muhammad Shamsir Bin Mohd Aris
        </Text>
        <Text textAlign={"center"} fontWeight={"medium"}>
          Obstetrics and Gynaecology
        </Text>
        <HStack alignItems={"center"} justifyContent="space-between" space={2}>
          <Text fontWeight={"bold"}>Appointment Details</Text>
          <Button
            width="20%"
            minHeight={sizes.md}
            row
            gradient={gradients.danger}
          >
            <Block
              row
              align="center"
              justify="center"
              paddingHorizontal={sizes.sm}
            >
              <MyText size={12} white bold transform="uppercase">
                edit
              </MyText>
            </Block>
          </Button>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <FontAwesome5 name="user-md" size={16} />
          <Text>New To This Doctor</Text>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <MaterialCommunityIcons name="clipboard-check-outline" size={16} />
          <Text>Office Visit</Text>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <FontAwesome5 name="map-marker-alt" size={16} />
          <Text>
            Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai,
            Negeri Sembilan
          </Text>
        </HStack>
      </VStack>

      <CalendarTwo
        setDate={setDate}
        markedDates={markedDates.reduce(
          (a, v) => ({
            ...a,
            [v]: {
              selected: true,
              // marked: true,
              disabled: false,
              disableTouchEvent: false,
            },
          }),
          {}
        )}
      />

      <VStack>
        <Text fontWeight={"bold"}>
          {dayjs(date).format("dddd, MMM DD, YYYY")}
        </Text>
        {selected &&
          selected.keys.map((section) => {
            return (
              <VStack space={1.2} my={2}>
                <Text fontWeight={"bold"}>{section}</Text>
                <HStack alignItems={"center"} space={2} flexWrap="wrap">
                  {selected.times[section].map((time, index) => (
                    <Button
                      onPress={() =>
                        navigate("PatientFindDoctorScheduleAppointment")
                      }
                      width="30%"
                      minHeight={sizes.md}
                      row
                      gradient={gradients.primary}
                      marginTop={
                        selected.times[section].length > 3 && index > 2
                          ? sizes.s
                          : null
                      }
                    >
                      <Block
                        row
                        align="center"
                        justify="center"
                        paddingHorizontal={sizes.sm}
                      >
                        <MyText size={12} white bold transform="uppercase">
                          {time}
                        </MyText>
                      </Block>
                    </Button>
                  ))}
                </HStack>
              </VStack>
            );
          })}
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  map: {
    height: 200,
    width: "100%",
  },
});
