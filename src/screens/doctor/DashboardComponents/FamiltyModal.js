import { VStack } from "native-base";
import React, { useCallback, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Button, Text } from "../../../components";
import { useTheme } from "../../../hooks";

export default ({ setShow }) => {
  const { gradients, sizes } = useTheme();

  const [registration, setRegistration] = useState({
    address: "",
    phone: "",
    fullAddress: "",
    map: {},
  });

  const handleChange = (value) => {
    setRegistration({ ...registration, ...value });
  };

  const handleClinicRegister = useCallback(() => {
    console.log("handleSignUp", registration);
    if (registration.address !== "" && registration.phone !== "") {
      setRegistration(registration);
      setShow(false);
    }
  }, [registration]);

  return (
    <VStack w="300px" p={2} px={4}>
      <VStack space={2}>
        <Text>Address</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          marginBottom={sizes.m}
          label={"Address"}
          placeholder={"Enter Address"}
          value={registration.address}
          onChangeText={(value) => handleChange({ address: value })}
        />
      </VStack>
      <VStack space={2}>
        <Text>Phone</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          marginBottom={sizes.m}
          label={"Phone"}
          placeholder={"Enter Phone"}
          value={registration.phone}
          onChangeText={(value) => handleChange({ phone: value })}
        />
      </VStack>

      <VStack space={2}>
        <Text>Full Address</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          marginBottom={sizes.m}
          label={"Full Address"}
          placeholder={"Enter Full Address"}
          value={registration.fullAddress}
          onChangeText={(value) => handleChange({ fullAddress: value })}
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
