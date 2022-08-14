import  AntDesign  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Block, Image, Input, RoleCard, Text } from "../components";
import { AuthContext } from "../contexts/auth";
import { useTheme, useTranslation } from "../hooks";

const ContinueAs = () => {
  const { setRole } = useContext(AuthContext);
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Block>
      <Block flex={0} style={{ zIndex: 0, marginTop: 40 }}>
        <Image
          background
          center
          resizeMode="cover"
          padding={sizes.sm}
          radius={sizes.cardRadius}
          source={assets.background}
          height={sizes.height * 0.2}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Text h5 center white>
            {t("login.title")} to MyPatientHUB
          </Text>
        </Image>
      </Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input
          search
          placeholder={"common.search"}
          icon={
            <AntDesign
              name="qrcode"
              size={20}
              style={{ marginHorizontal: 10 }}
            />
          }
        />
      </Block>
      {/* products list */}
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: sizes.l }}
      >
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          <RoleCard
            type="patient"
            linkLabel="I am a Patient"
            onPress={() => {
              setRole("patient");
              navigate("PatientRegisteration");
            }}
          />
          <RoleCard
            onPress={() => {
              setRole("clinic");
              navigate("ClinicRegisteration");
            }}
            type="clinic"
            linkLabel="I am a Clinic"
          />
          <RoleCard
            onPress={() => {
              setRole("doctor");
              navigate("DoctorRegisteration");
            }}
            type="doctor"
            linkLabel="I am a Doctor"
          />
        </Block>
      </Block>
    </Block>
  );
};

export default ContinueAs;
