import DatePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/core";
import dayjs from "dayjs";
import { HStack, Radio, VStack } from "native-base";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import { Block, Button, Image, Input, Text } from "../../../components";
import SelectActionSheet from "../../../components/SelectActionSheet";
import * as regex from "../../../constants/regex";
import { AuthContext } from "../../../contexts/auth";
import { useTheme, useTranslation } from "../../../hooks";

const isAndroid = Platform.OS === "android";

export default () => {
  const [value, setValue] = useState("one");

  const { setIsAuth } = useContext(AuthContext);
  const { assets, colors, gradients, sizes } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [isValid, setIsValid] = useState({
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
  const [openGender, setOpenGender] = useState(false);
  const [openBlood, setOpenBlood] = useState(false);

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

  const handlePatientRegister = useCallback(() => {
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
        Gender
      </Text>
      <Button
        row
        gradient={gradients.primary}
        onPress={() => setOpenGender(true)}
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
            select Gender
          </Text>
          <Image
            source={assets.arrow}
            color={colors.white}
            transform={[{ rotate: "90deg" }]}
          />
        </Block>
      </Button>
      <Text h6 semibold>
        Blood Group
      </Text>
      <Button
        row
        gradient={gradients.primary}
        onPress={() => setOpenBlood(true)}
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
            select Blood Group
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
      {/* register form */}
      <Block keyboard behavior={!isAndroid ? "padding" : "height"}>
        <Block
          flex={0}
          radius={sizes.sm}
          marginHorizontal="8%"
          shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
        >
          <Block
            row
            flex={0}
            align="center"
            justify="center"
            marginVertical={sizes.sm}
            paddingHorizontal={sizes.xxl}
          >
            <Block
              flex={0}
              height={1}
              width="50%"
              end={[1, 0]}
              start={[0, 1]}
              gradient={gradients.divider}
            />
            <Text center marginHorizontal={sizes.s}>
              Patient Information
            </Text>
            <Block
              flex={0}
              height={1}
              width="50%"
              end={[0, 1]}
              start={[1, 0]}
              gradient={gradients.divider}
            />
          </Block>
          <VStack>
            <Text>Who is the Patient?</Text>

            <Radio.Group
              w="full"
              name="myRadioGroup"
              value={value}
              onChange={(nextValue) => {
                setValue(nextValue);
              }}
            >
              <HStack alignItems="center">
                <Radio value="one" my={1} marginRight={2}>
                  Me
                </Radio>
                <Radio value="two" my={1}>
                  My dependent
                </Radio>
              </HStack>
            </Radio.Group>
          </VStack>
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
                label={"First name"}
                placeholder={"Affan"}
                onChangeText={(value) => handleChange({ password: value })}
                success={Boolean(registration.password && isValid.password)}
                danger={Boolean(registration.password && !isValid.password)}
              />
              <Input
                autoCapitalize="none"
                marginBottom={sizes.m}
                label={"Last name"}
                placeholder={"Usmani"}
                onChangeText={(value) => handleChange({ password: value })}
                success={Boolean(registration.password && isValid.password)}
                danger={Boolean(registration.password && !isValid.password)}
              />
              <Block>
                <Text h6 semibold>
                  Date of Birth
                </Text>
                <Button
                  row
                  gradient={gradients.primary}
                  onPress={() => setOpen(true)}
                >
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
              <DropDowns />
              {/* <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={"email"}
                    placeholder={"enter email"}
                    onChangeText={(value) => handleChange({ password: value })}
                    success={Boolean(registration.password && isValid.password)}
                    danger={Boolean(registration.password && !isValid.password)}
                  />
                  <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={"phone"}
                    placeholder={"enter phone number"}
                    keyboardType={"phone-pad"}
                    onChangeText={(value) => handleChange({ password: value })}
                    success={Boolean(registration.password && isValid.password)}
                    danger={Boolean(registration.password && !isValid.password)}
                  /> */}
              <Input
                autoCapitalize="none"
                marginBottom={sizes.m}
                label={"My address"}
                placeholder={
                  "Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai"
                }
                onChangeText={(value) => handleChange({ password: value })}
                success={Boolean(registration.password && isValid.password)}
                danger={Boolean(registration.password && !isValid.password)}
              />
            </Block>

            <Button
              onPress={handlePatientRegister}
              marginVertical={sizes.s}
              marginHorizontal={sizes.sm}
              gradient={gradients.primary}
              // disabled={Object.values(isValid).includes(false)}
            >
              <Text bold white transform="uppercase">
                Finalize
              </Text>
            </Button>
          </Block>
        </Block>
      </Block>
      <SelectDate
        open={open}
        date={date}
        onChange={onChange}
        setOpen={setOpen}
      />
      {openGender && (
        <SelectActionSheet
          isOpen={openGender}
          setIsOpen={setOpenGender}
          items={[
            { id: "1", title: "Female" },
            { id: "2", title: "Male" },
            { id: "3", title: "X" },
          ]}
        />
      )}
      {openBlood && (
        <SelectActionSheet
          isOpen={openBlood}
          setIsOpen={setOpenBlood}
          items={[
            { id: "1", title: "A" },
            { id: "2", title: "A+" },
            { id: "3", title: "B" },
            { id: "4", title: "B+" },
            { id: "5", title: "O" },
          ]}
        />
      )}
    </>
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
