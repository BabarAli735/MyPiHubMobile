import React from "react";
import { Dimensions, View } from "react-native";
import { VictoryLegend, VictoryPie } from "victory-native";

class HospitalPie extends React.Component {
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
            { x: 1, y: 3, label: "40%" },
            { x: 2, y: 2, label: "20%" },
            { x: 3, y: 3, label: "40%" },
          ]}
          style={{
            labels: {
              fontSize: 14,
              fill: "#760fd6",
            },
          }}
        />

        <VictoryLegend
          y={20}
          x={40}
          symbolSpacer={10}
          height={40}
          orientation="horizontal"
          gutter={15}
          data={[
            { name: "Cordiology", symbol: { fill: "orange" } },
            {
              name: "Neurology",
              symbol: { fill: "red" },
            },
            { name: "Dermatology", symbol: { fill: "navy" } },
          ]}
        />
      </View>
    );
  }
}
export default HospitalPie;
