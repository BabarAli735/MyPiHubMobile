import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import {
  Avatar,
  Button as NButton,
  Divider,
  FlatList,
  HStack,
  Text as NText,
  VStack,
} from "native-base";
import React, { useCallback, useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  Block,
  Button,
  Image,
  Input,
  PatientUserAppointmentCard,
  Text,
} from "../../components";
import LineChart from "../../components/charts/LineChart";
import Points from "../../components/charts/Points";
import SelectActionSheet from "../../components/SelectActionSheet";
import { mocks } from "../../constants";
import { useTheme } from "../../hooks";
import {useTranslation} from 'react-i18next'
const PatientAppointment = () => {
  const [isReasonModalOpen, setIsReasonModalOpen] = useState(false);
  const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false);
  const [isPaymenModalOpen, setIsPaymenModalOpen] = useState(false);

  const { navigate } = useNavigation();

  const { t } = useTranslation();
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

  const Search = () => (
    <Block color={colors.card} flex={0} padding={sizes.padding}>
      <Input search placeholder={t("common.search")} />
      <PatientUserAppointmentCard />
    </Block>
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
            Appointments
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
            New Booking
          </Text>
        </Block>
      </Button>
    </Block>
  );

  const AppointmentDateTime = () => (
    <Block
      row
      align="center"
      justify="space-between"
      color={colors.card}
      padding={sizes.s}
      marginTop={2}
      marginBottom={20}
    >
      <Block width="46%" padding={sizes.s}>
        <Text h6 semibold>
          Date of Birth
        </Text>
        <Button row gradient={gradients.primary} onPress={() => setOpen(true)}>
          <Block
            row
            align="center"
            justify="center"
            paddingHorizontal={sizes.sm}
          >
            <Text size={12} white bold transform="uppercase">
              {date.length < 1
                ? "select date"
                : dayjs(date).format("DD-MM-YYYY")}
            </Text>
          </Block>
        </Button>
      </Block>
      <Block width="46%" padding={sizes.s}>
        <Text h6 semibold>
          Time
        </Text>
        <Button
          row
          gradient={gradients.primary}
          onPress={() => setOpenTime(true)}
        >
          <Block
            row
            align="center"
            justify="center"
            paddingHorizontal={sizes.sm}
          >
            <Text size={12} white bold transform="uppercase">
              {time.length < 1 ? "select time" : dayjs(time).format("HH:mm a")}
            </Text>
          </Block>
        </Button>
      </Block>
    </Block>
  );

  const DropDowns = () => (
    <Block color={colors.card} justify="space-between" marginBottom={sizes.s}>
      <Block
        row
        wrap="wrap"
        justify="space-between"
        marginBottom={sizes.s}
        marginHorizontal={sizes.sm}
      >
        <Button
          width="47%"
          row
          gradient={gradients.primary}
          onPress={() => setIsReasonModalOpen(true)}
        >
          <Block
            row
            align="center"
            justify="space-between"
            paddingHorizontal={sizes.sm}
          >
            <Text
              size={12}
              white
              bold
              transform="uppercase"
              marginRight={sizes.sm}
            >
              select Reason
            </Text>
            <Image
              source={assets.arrow}
              color={colors.white}
              transform={[{ rotate: "90deg" }]}
            />
          </Block>
        </Button>
        <Button
          width="47%"
          row
          gradient={gradients.primary}
          onPress={() => setIsPriorityModalOpen(true)}
        >
          <Block
            row
            align="center"
            justify="space-between"
            paddingHorizontal={sizes.sm}
          >
            <Text
              size={12}
              white
              bold
              transform="uppercase"
              marginRight={sizes.sm}
            >
              select Priority
            </Text>
            <Image
              source={assets.arrow}
              color={colors.white}
              transform={[{ rotate: "90deg" }]}
            />
          </Block>
        </Button>
      </Block>
      {/* <Button
        flex={1}
        marginHorizontal={sizes.s}
        row
        gradient={gradients.primary}
        onPress={() => setIsPaymenModalOpen(true)}
      >
        <Block
          row
          align="center"
          justify="space-between"
          paddingHorizontal={sizes.sm}
        >
          <Text white bold h6 transform="uppercase" marginRight={sizes.sm}>
            Payment Type
          </Text>
          <Image
            source={assets.arrow}
            color={colors.white}
            transform={[{ rotate: "90deg" }]}
          />
        </Block>
      </Button> */}
    </Block>
  );

  const ActionButtons = () => (
    <Block
      row
      wrap="wrap"
      justify="space-between"
      marginBottom={sizes.s}
      marginHorizontal={sizes.sm}
    >
      {/* <Button width="46%" row gradient={gradients.danger}>
        <Block row align="center" justify="center" paddingHorizontal={sizes.sm}>
          <Text size={12} white bold transform="uppercase">
            Cancel
          </Text>
        </Block>
      </Button> */}
      <Button
        width="100%"
        row
        gradient={gradients.info}
        onPress={() => navigate("PatientFindDoctor")}
      >
        <Block row align="center" justify="center" paddingHorizontal={sizes.sm}>
          <Text size={12} white bold transform="uppercase">
            Book
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
                  <ActionButtons />
                </VStack>
              ) : (
                <VStack>
                  <VStack
                    px={2}
                    mx={2}
                    bgColor={"white"}
                    shadow="1"
                    borderRadius={"lg"}
                    my={2}
                    divider={<Divider />}
                  >
                    <NText fontWeight="bold" textAlign={"center"} mb={2}>
                      Treatments Taken
                    </NText>
                    <LineChart />
                  </VStack>
                  <VStack
                    px={2}
                    mx={2}
                    bgColor={"white"}
                    shadow="1"
                    borderRadius={"lg"}
                    my={2}
                    divider={<Divider />}
                  >
                    <NText fontWeight="bold" textAlign={"center"} mb={2}>
                      Overall Appointments
                    </NText>
                    <Points />
                  </VStack>
                  <VStack
                    px={2}
                    mx={2}
                    bgColor={"white"}
                    shadow="1"
                    borderRadius={"lg"}
                    my={2}
                    divider={<Divider />}
                  >
                    <NText fontWeight="bold" textAlign={"center"} mb={2}>
                      Procedures Taken
                    </NText>
                    <LineChart />
                  </VStack>
                  <PreviousApointments />
                  <UpcomingApointments />
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

const PreviousApointments = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const [selected, setSelected] = useState("week");

  const ButtonGroup = () => {
    return (
      <HStack alignItems={"center"} justifyContent="center">
        <NButton
          w="30%"
          bgColor={selected === "day" ? "rose.500" : "white"}
          _pressed={selected === "day" ? "rose.300" : "gray.300"}
          _text={{ color: selected !== "day" ? colors.dark : "white" }}
          onPress={() => setSelected("day")}
        >
          Day
        </NButton>
        <NButton
          w="30%"
          bgColor={selected === "week" ? "rose.500" : "white"}
          _pressed={selected === "week" ? "rose.300" : "gray.300"}
          _text={{ color: selected !== "week" ? colors.dark : "white" }}
          onPress={() => setSelected("week")}
        >
          Week
        </NButton>
        <NButton
          w="30%"
          bgColor={selected === "month" ? "rose.500" : "white"}
          _pressed={selected === "month" ? "rose.300" : "gray.300"}
          _text={{ color: selected !== "month" ? colors.dark : "white" }}
          onPress={() => setSelected("month")}
        >
          Month
        </NButton>
      </HStack>
    );
  };

  return (
    <VStack
      px={2}
      mx={2}
      space={3}
      bgColor={"white"}
      shadow="1"
      borderRadius={"lg"}
      py={2}
      my={2}
      divider={<Divider />}
    >
      <HStack>
        <NText fontWeight="bold">Previous Appointments</NText>
      </HStack>
      <ButtonGroup />

      <HStack alignItems="center" justifyContent={"space-between"}>
        <HStack alignItems={"center"} space={2}>
          <Avatar source={assets.doctor} />
          <VStack space={1}>
            <NText fontWeight={"bold"}>Dr. Ibrahim Yekeni</NText>
            <NText fontSize={"xs"} color={colors.danger}>
              Emergancy
            </NText>
          </VStack>
        </HStack>
        <VStack alignItems="flex-end">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={25}
            color={colors.dark}
          />
          <NText fontSize="xs">Monday, November 2</NText>
        </VStack>
      </HStack>
      <HStack alignItems="center" justifyContent={"space-between"}>
        <HStack alignItems={"center"} space={2}>
          <Avatar source={assets.doctor} />
          <VStack space={1}>
            <NText fontWeight={"bold"}>Dr. Ibrahim Yekeni</NText>
            <NText fontSize={"xs"} color={colors.danger}>
              Emergancy
            </NText>
          </VStack>
        </HStack>
        <VStack alignItems="flex-end">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={25}
            color={colors.dark}
          />
          <NText fontSize="xs">Monday, November 2</NText>
        </VStack>
      </HStack>
      <HStack alignItems="center" justifyContent={"space-between"}>
        <HStack alignItems={"center"} space={2}>
          <Avatar source={assets.doctor} />
          <VStack space={1}>
            <NText fontWeight={"bold"}>Dr. Ibrahim Yekeni</NText>
            <NText fontSize={"xs"} color={colors.danger}>
              Emergancy
            </NText>
          </VStack>
        </HStack>
        <VStack alignItems="flex-end">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={25}
            color={colors.dark}
          />
          <NText fontSize="xs">Monday, November 2</NText>
        </VStack>
      </HStack>
    </VStack>
  );
};

const UpcomingApointments = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <VStack
      px={2}
      mx={2}
      space={3}
      bgColor={"white"}
      shadow="1"
      borderRadius={"lg"}
      py={2}
      my={2}
      divider={<Divider />}
    >
      <HStack>
        <NText fontWeight="bold">Upcoming Appointments</NText>
      </HStack>

      <HStack alignItems="center" justifyContent={"space-between"}>
        <HStack alignItems={"center"} space={2}>
          <Avatar source={assets.doctor} />
          <VStack space={1}>
            <NText fontWeight={"bold"}>Dr. Ibrahim Yekeni</NText>
            <NText fontSize={"xs"} color={colors.danger}>
              Emergancy
            </NText>
          </VStack>
        </HStack>
        <VStack alignItems="flex-end">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={25}
            color={colors.dark}
          />
          <NText fontSize="xs">Monday, November 2</NText>
        </VStack>
      </HStack>
      <HStack alignItems="center" justifyContent={"space-between"}>
        <HStack alignItems={"center"} space={2}>
          <Avatar source={assets.doctor} />
          <VStack space={1}>
            <NText fontWeight={"bold"}>Dr. Ibrahim Yekeni</NText>
            <NText fontSize={"xs"} color={colors.danger}>
              Emergancy
            </NText>
          </VStack>
        </HStack>
        <VStack alignItems="flex-end">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={25}
            color={colors.dark}
          />
          <NText fontSize="xs">Monday, November 2</NText>
        </VStack>
      </HStack>
      <HStack alignItems="center" justifyContent={"space-between"}>
        <HStack alignItems={"center"} space={2}>
          <Avatar source={assets.doctor} />
          <VStack space={1}>
            <NText fontWeight={"bold"}>Dr. Ibrahim Yekeni</NText>
            <NText fontSize={"xs"} color={colors.danger}>
              Emergancy
            </NText>
          </VStack>
        </HStack>
        <VStack alignItems="flex-end">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={25}
            color={colors.dark}
          />
          <NText fontSize="xs">Monday, November 2</NText>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default PatientAppointment;

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
