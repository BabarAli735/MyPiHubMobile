import React from "react";
import { Dimensions, View } from "react-native";
import { VictoryLegend, VictoryPie } from "victory-native";

class Pie extends React.Component {
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <VictoryPie
          width={Dimensions.get("screen").width - 40}
          height={250}
          innerRadius={90}
          padAngle={({ datum }) => datum.y}
          colorScale={["orange", "red", "navy"]}
          data={[
            { x: 1, y: 3, label: "A" },
            { x: 2, y: 2, label: "B" },
            { x: 3, y: 3, label: "C" },
          ]}
          style={{
            labels: {
              fontSize: 14,
              fill: "#c43a31",
            },
          }}
        />

        <VictoryLegend
          y={20}
          x={40}
          symbolSpacer={10}
          height={40}
          orientation="horizontal"
          gutter={20}
          data={[
            { name: "Hospital A", symbol: { fill: "orange" } },
            {
              name: "Hospital B",
              symbol: { fill: "red" },
            },
            { name: "Hospital C", symbol: { fill: "navy" } },
          ]}
        />
      </View>
    );
  }
}
export default Pie;
