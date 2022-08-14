import { VStack } from "native-base";
import React, { useCallback, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Button, Text } from "../../../components";
import { useTheme } from "../../../hooks";
import { clinicInfoState } from "../../../store";

export default ({ setShow }) => {
  const [clinicInfo, setClinicInfo] = clinicInfoState.use();

  const { gradients, sizes } = useTheme();

  const [name, setName] = useState("");

  const handleChange = (value) => {
    setName(value);
  };

  const handleClinicRegister = useCallback(() => {
    if (name !== "") {
      setClinicInfo({
        ...clinicInfo,
        treatments: [...clinicInfo.treatments, name],
      });
      setShow(false);
    }
  }, [name]);

  return (
    <VStack w="300px" p={2} px={4}>
      <VStack space={2}>
        <Text>Treatment</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          marginBottom={sizes.m}
          label={"Treatment"}
          placeholder={"Enter Treatment"}
          onChangeText={(value) => handleChange(value)}
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
          Add
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
