import { VStack } from "native-base";
import React, { useCallback, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Button, Text } from "../../../components";
import ImagePicker from "../../../components/ImagePicker";
import { useTheme } from "../../../hooks";
import { clinicInfoState } from "../../../store";

export default ({ setShow }) => {
  const [clinicInfo, setClinicInfo] = clinicInfoState.use();
  const { gradients, sizes } = useTheme();
  const [registration, setRegistration] = useState({
    name: "",
    image: "",
  });

  const handleChange = (value) => {
    setRegistration({ ...registration, ...value });
  };

  const handleClinicRegister = useCallback(() => {
    console.log("handleSignUp", registration);
    if (registration.name !== "") {
      setClinicInfo({
        ...clinicInfo,
        doctors: [...clinicInfo.doctors, registration],
      });
      setShow(false);
    }
  }, [registration]);

  return (
    <VStack w="300px" p={2} px={4}>
      <VStack pt={2} space={2} alignItems="center">
        <ImagePicker
          image={registration.image}
          onChange={(value) => handleChange({ image: value })}
        />
      </VStack>
      <VStack space={2}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          marginBottom={sizes.m}
          label={"Name"}
          placeholder={"Enter Name"}
          onChangeText={(value) => handleChange({ name: value })}
        />
      </VStack>

      <Button
        onPress={handleClinicRegister}
        marginVertical={sizes.s}
        marginHorizontal={sizes.sm}
        gradient={gradients.primary}
        height={60}
      >
        <Text bold white transform="uppercase">
          ADD
        </Text>
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    padding: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
