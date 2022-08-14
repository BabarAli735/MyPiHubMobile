import { MaterialCommunityIcons } from'react-native-vector-icons'
import DatePicker from "@react-native-community/datetimepicker";
import {
  Avatar,
  Center,
  Divider,
  FlatList,
  HStack,
  Modal,
  Text as NText,
  VStack,
} from "native-base";
import React, { useCallback, useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Block, Button, Image, Input, Text } from "../../components";
import SelectActionSheet from "../../components/SelectActionSheet";
import { mocks } from "../../constants";
import { useTheme, useTranslation } from "../../hooks";
import FamiltyModal from "./DashboardComponents/FamiltyModal";
import OffersModal from "./DashboardComponents/OffersModal";
import PromoModal from "./DashboardComponents/PromoModal";
import NextPatient from "./MyPatientComponents/NextPatient";

const list = [
  { id: "1", name: "Ibrahim Walid", sick: "HeadAche" },
  { id: "2", name: "Ibrahim Yekeni", sick: "HeadAche" },
  { id: "3", name: "Ibrahim Jan", sick: "HeadAche" },
];

export default () => {
  const [isReasonModalOpen, setIsReasonModalOpen] = useState(false);
  const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false);
  const [isPaymenModalOpen, setIsPaymenModalOpen] = useState(false);

  const { t } = useTranslation();
  const [tab, setTab] = useState(0);
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [patients, setPatients] = useState(list);

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
            Visited Patient
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
            Rehabilitations
          </Text>
        </Block>
      </Button>
    </Block>
  );

  const Search = () => (
    <Block color={colors.card} flex={0} padding={sizes.padding}>
      <Input search placeholder={t("common.search")} />
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
                  <Search />
                  <VStack
                    px={2}
                    mx={2}
                    space={3}
                    bgColor={"white"}
                    shadow="1"
                    borderRadius={"lg"}
                    my={2}
                    divider={<Divider />}
                  >
                    <HStack p={2}>
                      <NText fontWeight="bold">Patients</NText>
                    </HStack>
                    {patients.map((patient) => (
                      <PatientCard key={patient.id} />
                    ))}
                  </VStack>
                </VStack>
              ) : (
                <VStack>
                  <Search />
                  <VStack
                    px={2}
                    mx={2}
                    space={3}
                    bgColor={"white"}
                    shadow="1"
                    borderRadius={"lg"}
                    my={2}
                    divider={<Divider />}
                  >
                    <HStack p={2}>
                      <NText fontWeight="bold">Patients</NText>
                    </HStack>
                    {patients.map((patient) => (
                      <PatientCard key={patient.id} />
                    ))}
                  </VStack>
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

const PatientCard = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const [selected, setSelected] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [showOffers, setShowOffers] = useState(false);
  const [showFamily, setShowFamily] = useState(false);
  return (
    <VStack>
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <HStack alignItems="center" justifyContent={"space-between"}>
          <HStack alignItems={"center"} space={2}>
            <Avatar source={assets.doctor} />
            <VStack space={1}>
              <NText fontWeight={"bold"}>Azam Shah</NText>
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
      </TouchableOpacity>
      {selected ? (
        <VStack>
          <Divider my={2} />
          <NextPatient
            onClickPromo={() => setShowPromo(true)}
            onClickOffers={() => setShowOffers(true)}
            onClickFamily={() => setShowFamily(true)}
          />
        </VStack>
      ) : null}
      <Modal isOpen={showPromo} onClose={() => setShowPromo(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <PromoModal show={showPromo} setShow={setShowPromo} />
        </Center>
      </Modal>
      <Modal isOpen={showOffers} onClose={() => setShowOffers(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <OffersModal show={showOffers} setShow={setShowOffers} />
        </Center>
      </Modal>
      <Modal isOpen={showFamily} onClose={() => setShowFamily(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <FamiltyModal show={showFamily} setShow={setShowFamily} />
        </Center>
      </Modal>
    </VStack>
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
