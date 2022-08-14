import { VStack } from "native-base";
import React, { useCallback, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Button, Text } from "../../../components";
import { useTheme } from "../../../hooks";

export default ({ setShow }) => {
  const { gradients, sizes } = useTheme();

  const [registration, setRegistration] = useState({
    title: "",
    describe: "",
  });

  const handleChange = (value) => {
    setRegistration({ ...registration, ...value });
  };

  const handleClinicRegister = useCallback(() => {
    console.log("handleSignUp", registration);
    if (registration.describe !== "" && registration.title !== "") {
      setRegistration([...registration, registration]);
      setShow(false);
    }
  }, [registration]);

  return (
    <VStack w="300px" p={2} px={4}>
      <VStack space={2}>
        <Text>Title</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          marginBottom={sizes.m}
          label={"Title"}
          placeholder={"Enter Title"}
          onChangeText={(value) => handleChange({ title: value })}
        />
      </VStack>
      <VStack space={2}>
        <Text>Details</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          marginBottom={sizes.m}
          label={"Details"}
          placeholder={"Enter Details"}
          onChangeText={(value) => handleChange({ describe: value })}
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
