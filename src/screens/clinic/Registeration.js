import { FontAwesome5 } from 'react-native-vector-icons'
import DatePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/core";
import { Center, Modal, VStack } from "native-base";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Platform, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import MapView, { Marker } from "react-native-maps";
import { Block, Button, Image, Input, Text } from "../../components";
import SelectActionSheet from "../../components/SelectActionSheet";
import * as regex from "../../constants/regex";
import { AuthContext } from "../../contexts/auth";
import { useTheme, useTranslation } from "../../hooks";

const isAndroid = Platform.OS === "android";

const Registration = () => {
  const { setIsAuth } = useContext(AuthContext);
  const { assets, colors, gradients, sizes } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    password: false,
    agreed: false,
  });
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
    agreed: false,
  });
  const [openClinicType, setOpenClinicType] = useState(false);
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setOpen(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({ ...state, ...value }));
    },
    [setRegistration]
  );

  const handleClinicRegister = useCallback(() => {
    console.log("handleSignUp", registration);
    setIsAuth(true);
  }, [isValid, registration]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      email: regex.email.test(registration.email),
      password: regex.password.test(registration.password),
      agreed: registration.agreed,
    }));
  }, [registration, setIsValid]);

  const DropDowns = () => (
    <VStack marginBottom={sizes.s} my={2} space={2}>
      <Text h6 semibold>
        Location
      </Text>
      <Button row gradient={gradients.primary} onPress={() => setShow(!show)}>
        <Block row align="center" justify="space-between" paddingHorizontal={sizes.sm}>
          <Text
            size={12}
            white
            bold
            transform="uppercase"
            marginRight={sizes.sm}
          >
            Select Location
          </Text>
        </Block>
      </Button>
      <Text h6 semibold>
        Clinic Type
      </Text>
      <Button
        row
        gradient={gradients.primary}
        onPress={() => setOpenClinicType(true)}
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
            Select Clinic Type
          </Text>
          <Image
            source={assets.arrow}
            color={colors.white}
            transform={[{ rotate: "90deg" }]}
          />
        </Block>
      </Button>
    </VStack>
  );

  return (
    <>
      <Block safe marginTop={sizes.md}>
        <Block paddingHorizontal={sizes.s}>
          <Block flex={0} style={{ zIndex: 0 }}>
            <Image
              background
              resizeMode="cover"
              padding={sizes.sm}
              radius={sizes.cardRadius}
              source={assets.background}
              height={sizes.height * 0.3}
            >
              <Button
                row
                flex={0}
                justify="flex-start"
                onPress={() => navigation.goBack()}
              >
                <Image
                  radius={0}
                  width={10}
                  height={18}
                  color={colors.white}
                  source={assets.arrow}
                  transform={[{ rotate: "180deg" }]}
                />
                <Text p white marginLeft={sizes.s}>
                  {t("common.goBack")}
                </Text>
              </Button>

              <Text h4 center white marginBottom={sizes.md}>
                Register as a Clinic
              </Text>
            </Image>
          </Block>
          {/* register form */}
          <Block
            keyboard
            behavior={!isAndroid ? "padding" : "height"}
            marginTop={-(sizes.height * 0.2 - sizes.l)}
          >
            <Block
              flex={0}
              radius={sizes.sm}
              marginHorizontal="8%"
              shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
            >
              <Block
                blur
                flex={0}
                intensity={90}
                radius={sizes.sm}
                overflow="hidden"
                justify="space-evenly"
                tint={colors.blurTint}
                paddingVertical={sizes.sm}
              >
                {/* form inputs */}
                <Block paddingHorizontal={sizes.sm}>
                  <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={"Your Clinic Name"}
                    placeholder={"Enter full name"}
                    onChangeText={(value) => handleChange({ password: value })}
                    success={Boolean(registration.password && isValid.password)}
                    danger={Boolean(registration.password && !isValid.password)}
                  />
                  <DropDowns />
                  <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={"Additional Email"}
                    placeholder={"Additional Email"}
                    onChangeText={(value) => handleChange({ password: value })}
                    success={Boolean(registration.password && isValid.password)}
                    danger={Boolean(registration.password && !isValid.password)}
                  />
                  <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={"Additional Phone"}
                    placeholder={"Additional Phone"}
                    onChangeText={(value) => handleChange({ password: value })}
                    success={Boolean(registration.password && isValid.password)}
                    danger={Boolean(registration.password && !isValid.password)}
                  />
                </Block>

                <Button
                  onPress={handleClinicRegister}
                  marginVertical={sizes.s}
                  marginHorizontal={sizes.sm}
                  gradient={gradients.primary}
                  // disabled={Object.values(isValid).includes(false)}
                >
                  <Text bold white transform="uppercase">
                    Register
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
      <SelectDate
        open={open}
        date={date}
        onChange={onChange}
        setOpen={setOpen}
      />
      {openClinicType && (
        <SelectActionSheet
          isOpen={openClinicType}
          setIsOpen={setOpenClinicType}
          items={[
            { id: "1", title: "Quilitas" },
            { id: "2", title: "GP" },
          ]}
        />
      )}
      {show && (
        <Modal isOpen={show} onClose={() => setShow(false)}>
          <VStack
            space={2}
            my={2}
            style={{ width: "90%", backgroundColor: colors.white }}
            p={2}
            rounded="2xl"
          >
            <VStack>
              <MapView
                key={"none-scroll"}
                style={styles.map}
                scrollEnabled={false}
                showsMyLocationButton={false}
                zoomEnabled={true}
                zoomControlEnabled={false}
                zoomTapEnabled={true}
                initialRegion={{
                  latitude: 3.139,
                  longitude: 101.6869,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  key={"none-scroll-marker"}
                  pinColor="blue"
                  coordinate={{
                    latitude: 3.1391,
                    longitude: 101.6868,
                  }}
                >
                  <Center
                    p="3"
                    borderRadius={"full"}
                    bgColor="rgba(160,180,255,.7)"
                  >
                    <FontAwesome5
                      name="map-marker-alt"
                      size={15}
                      color="blue"
                    />
                  </Center>
                </Marker>
              </MapView>
            </VStack>

            <Button
              row
              gradient={gradients.primary}
              onPress={() => setShow(false)}
            >
              <Block
                row
                align="center"
                justify="center"
                paddingHorizontal={sizes.sm}
              >
                <Text size={12} white bold transform="uppercase">
                  Set Location
                </Text>
              </Block>
            </Button>
          </VStack>
        </Modal>
      )}
    </>
  );
};

export default Registration;

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  map: {
    height: 250,
    width: "100%",
  },
});
