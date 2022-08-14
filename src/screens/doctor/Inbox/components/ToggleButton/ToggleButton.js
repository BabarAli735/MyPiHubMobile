import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ToggleButton.styles";

const ToggleButton = ({ fields, btnPressed }) => {
  console.log(fields);
  return (
    <View style={styles.container}>
      {fields.map((item) => (
        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor: item.isActive ? "rgba(0, 0, 0, 0.05)" : "white",
            },
          ]}
          onPress={() => btnPressed(item)}
        >
          <Text
            style={
              item.isActive ? styles.btnLabelActicve : styles.btnLabelInacticve
            }
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ToggleButton;
