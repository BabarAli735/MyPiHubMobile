import { HStack } from "native-base";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "./colors";
import { styles } from "./ToggleButton.styles";

const ToggleButton = ({ tab, setTab }) => {
  return (
    <HStack>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: tab === 0 ? colors.gray01 : colors.white,
          },
        ]}
        onPress={() => setTab(0)}
      >
        <Text>Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: tab === 1 ? colors.gray01 : colors.white,
          },
        ]}
        onPress={() => setTab(1)}
      >
        <Text>Scan</Text>
      </TouchableOpacity>
    </HStack>
  );
};

export default ToggleButton;
