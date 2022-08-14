import { FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons";
import React from "react";
import { View } from "react-native";
import { useTheme } from "../../../../hooks";
import styles from "./styles";

const lineNext = "blue";
const lineDone = "#004FC0";

const Steps = ({ step, totalSteps }) => {
  const { colors, sizes } = useTheme();
  return (
    <View style={styles.navigator}>
      {[...Array(totalSteps - 1)].map((e, i) => {
        return (
          <React.Fragment key={i}>
            {i + 1 < step ? (
              <MaterialCommunityIcons
                name="check-circle"
                style={styles.stepIcon}
                size={20}
                color={colors.success}
              />
            ) : i + 1 == step ? (
              <FontAwesome
                name="dot-circle-o"
                style={styles.stepIcon}
                size={20}
                color={colors.primary}
              />
            ) : (
              <MaterialCommunityIcons
                name="circle-double"
                style={styles.stepIcon}
                size={20}
                color={colors.secondary}
              />
            )}

            <View
              style={styles.lineSteps}
              backgroundColor={i + 1 <= step - 1 ? lineDone : lineNext}
            ></View>
          </React.Fragment>
        );
      })}

      {step == totalSteps ? (
        <FontAwesome
          name="dot-circle-o"
          style={styles.stepIcon}
          size={20}
          color={colors.primary}
        />
      ) : step > totalSteps ? (
        <MaterialCommunityIcons
          name="check-circle"
          style={styles.stepIcon}
          size={20}
          color={colors.success}
        />
      ) : (
        <MaterialCommunityIcons
          name="circle-double"
          style={styles.stepIcon}
          size={20}
          color={colors.primary}
        />
      )}
    </View>
  );
};

export default Steps;
