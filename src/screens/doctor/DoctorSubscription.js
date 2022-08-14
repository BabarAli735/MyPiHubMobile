import DatePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { FlatList, VStack } from "native-base";
import React, { useCallback, useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Block, Button, Image, Text } from "../../components";
import SelectActionSheet from "../../components/SelectActionSheet";
import { mocks } from "../../constants";
import { useTheme } from "../../hooks";
import Market from "./Market";
import Pharmacy from "./Pharmacy";

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

export default () => {
  const [isReasonModalOpen, setIsReasonModalOpen] = useState(false);
  const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false);
  const [isPaymenModalOpen, setIsPaymenModalOpen] = useState(false);

  const [tab, setTab] = useState(0);
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setOpen(Platform.OS === "ios");
    setDate(currentDate);
  };

  const [openTime, setOpenTime] = useState(false);
  const [time, setTime] = useState("");

  const onTimeChange = (event, selectedTime) => {
    console.log(selectedTime);
    const currentDate = selectedTime || time;
    setOpenTime(Platform.OS === "ios");
    setTime(currentDate);
  };

  const handleProducts = useCallback(
    (tab) => {
      setTab(tab);
    },
    [setTab]
  );

  const Toggle = () => (
    <Block
      row
      flex={0}
      align="center"
      justify="center"
      color={colors.card}
      paddingBottom={sizes.s}
    >
      <Button onPress={() => handleProducts(0)}>
        <Block row align="center">
          <Block
            flex={0}
            radius={6}
            align="center"
            justify="center"
            marginRight={sizes.s}
            width={sizes.socialIconSize}
            height={sizes.socialIconSize}
            gradient={gradients?.[tab === 0 ? "primary" : "secondary"]}
          >
            <Image source={assets.extras} color={colors.white} radius={0} />
          </Block>
          <Text h6 font={fonts?.[tab === 0 ? "medium" : "normal"]}>
            Pharmacy
          </Text>
        </Block>
      </Button>
      <Block
        gray
        flex={0}
        width={1}
        marginHorizontal={sizes.sm}
        height={sizes.socialIconSize}
      />
      <Button onPress={() => handleProducts(1)}>
        <Block row align="center">
          <Block
            flex={0}
            radius={6}
            align="center"
            justify="center"
            marginRight={sizes.s}
            width={sizes.socialIconSize}
            height={sizes.socialIconSize}
            gradient={gradients?.[tab === 1 ? "primary" : "secondary"]}
          >
            <Image
              radius={0}
              color={colors.white}
              source={assets.documentation}
            />
          </Block>
          <Text h6 font={fonts?.[tab === 1 ? "medium" : "normal"]}>
            Market
          </Text>
        </Block>
      </Button>
    </Block>
  );

  return (
    <View style={{ flex: 1 }}>
      <VStack bgColor={colors.card} h={"full"}>
        <FlatList
          ListHeaderComponent={
            <VStack>
              {/* <Search /> */}
              <Toggle />
              {tab == 1 ? (
                <VStack>
                  <Market />
                </VStack>
              ) : (
                <VStack>
                  <Pharmacy />
                </VStack>
              )}
            </VStack>
          }
        />
      </VStack>
      <SelectDate
        open={open}
        date={date}
        onChange={onChange}
        setOpen={setOpen}
      />
      <SelectTime
        open={openTime}
        date={time}
        onChange={onTimeChange}
        setOpen={setOpenTime}
      />
      {isReasonModalOpen && (
        <SelectActionSheet
          isOpen={isReasonModalOpen}
          setIsOpen={setIsReasonModalOpen}
          items={mocks.REASONS}
        />
      )}
      {isPriorityModalOpen && (
        <SelectActionSheet
          isOpen={isPriorityModalOpen}
          setIsOpen={setIsPriorityModalOpen}
          items={mocks.PRIORITIES}
        />
      )}
      {isPaymenModalOpen && (
        <SelectActionSheet
          isOpen={isPaymenModalOpen}
          setIsOpen={setIsPaymenModalOpen}
          items={mocks.PAYMENTS}
        />
      )}
    </View>
  );
};

const SelectDate = ({ open, date, onChange, setOpen }) => {
  return (
    open &&
    (Platform.OS === "android" ? (
      <DatePicker
        testID="dateTimePicker"
        locale="es_ES"
        mode="date"
        value={typeof date !== "string" ? date : new Date()}
        display={"default"}
        onChange={onChange}
      />
    ) : (
      <Animatable.View
        style={{
          position: "absolute",
          zIndex: 999999,
          width: "100%",
          marginTop: StatusBar.currentHeight,
          backgroundColor: "white",
          padding: 20,
          alignSelf: "center",
        }}
        duration={300}
        animation={"fadeInDown"}
      >
        <DatePicker
          testID="dateTimePicker"
          locale="es_ES"
          mode="date"
          value={typeof date !== "string" ? date : new Date()}
          display={Platform.OS === "android" ? "default" : "spinner"}
          onChange={onChange}
        />
        <Animatable.View
          delay={100}
          duration={200}
          animation={"fadeInUp"}
          style={{ width: "100%" }}
        >
          <Button
            style={Style.button}
            labelStyle={Style.label}
            onPress={() => setOpen(false)}
            color="white"
          >
            OK
          </Button>
        </Animatable.View>
      </Animatable.View>
    ))
  );
};

const SelectTime = ({ open, date, onChange, setOpen }) => {
  return (
    open &&
    (Platform.OS === "android" ? (
      <DatePicker
        testID="dateTimePicker"
        locale="es_ES"
        mode="time"
        value={typeof date !== "string" ? date : new Date()}
        display={"default"}
        onChange={onChange}
      />
    ) : (
      <Animatable.View
        style={{
          position: "absolute",
          zIndex: 999999,
          width: "100%",
          marginTop: StatusBar.currentHeight,
          backgroundColor: "white",
          padding: 20,
          alignSelf: "center",
        }}
        duration={300}
        animation={"fadeInDown"}
      >
        <DatePicker
          testID="dateTimePicker"
          locale="es_ES"
          mode="time"
          value={typeof date !== "string" ? date : new Date()}
          display={Platform.OS === "android" ? "default" : "spinner"}
          onChange={onChange}
        />
        <Animatable.View
          delay={100}
          duration={200}
          animation={"fadeInUp"}
          style={{ width: "100%" }}
        >
          <Button
            style={Style.button}
            labelStyle={Style.label}
            onPress={() => setOpen(false)}
            color="white"
          >
            OK
          </Button>
        </Animatable.View>
      </Animatable.View>
    ))
  );
};
