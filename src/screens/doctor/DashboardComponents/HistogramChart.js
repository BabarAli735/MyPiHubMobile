import VerticalBarGraph from "@chartiful/react-native-vertical-bar-graph";
import { View, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../constants/light";

const config = {
  hasXAxisBackgroundLines: true,
  startAtZero: true,
  xAxisLabelCount: 6,
  xAxisLabelStyle: {
    position: "left",
    width: 20,
  },
};

export const HistogramChart = () => (
  <View>
    <VerticalBarGraph
      data={[2, 5, 8, 1, 9, 3, 5]}
      labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
      barColor={COLORS.info}
      width={Dimensions.get("screen").width * 0.77}
      height={300}
      barRadius={5}
      barWidthPercentage={0.5}
      baseConfig={config}
      style={styles.chart}
    />
  </View>
);

const styles = StyleSheet.create({
  chart: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 10,
    // backgroundColor: COLORS.light,
    width: "100%",
  },
});
