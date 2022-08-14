import DatePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { VStack } from "native-base";
import React, { useCallback, useState } from "react";
import { Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import { Block, Button, Image, Input, Text } from "../components";
import ImagePicker from "../components/ImagePicker";
import SelectActionSheet from "../components/SelectActionSheet";
import { useTheme } from "../hooks";

const isAndroid = Platform.OS === "android";

export default () => {
  const { assets, colors, gradients, sizes } = useTheme();

  const [registration, setRegistration] = useState({});
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
  }, [registration]);

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
      <Block safe>
        <Block paddingHorizontal={sizes.s}>
          {/* register form */}
          <Block keyboard behavior={!isAndroid ? "padding" : "height"}>
            <VStack pt={2} space={2} alignItems="center">
              <ImagePicker
                image={registration?.image ? registration.image : ""}
                onChange={(value) => handleChange({ image: value })}
              />
            </VStack>
            <Block
              flex={0}
              radius={sizes.sm}
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
                    label={"First Name"}
                    placeholder={"Enter first name"}
                    onChangeText={(value) => handleChange({ firstName: value })}
                  />
                  <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={"Last Name"}
                    placeholder={"Enter last name"}
                    onChangeText={(value) => handleChange({ Lastname: value })}
                  />
                  <Block>
                    <Text h6 semibold>
                      Date
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

                  <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={"Choose Location"}
                    placeholder={"Current Location"}
                    onChangeText={(value) => handleChange({ location: value })}
                  />

                  <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={"Choose Password"}
                    placeholder={"Old Password"}
                    onChangeText={(value) => handleChange({ password: value })}
                  />

                  <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={"Choose Password"}
                    placeholder={"New Password"}
                    onChangeText={(value) =>
                      handleChange({ newPassword: value })
                    }
                  />
                </Block>

                <Button
                  onPress={handlePatientRegister}
                  marginVertical={sizes.s}
                  marginHorizontal={sizes.sm}
                  gradient={gradients.primary}
                >
                  <Text bold white transform="uppercase">
                    Add
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
