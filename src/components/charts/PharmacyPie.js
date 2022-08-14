import React from "react";
import { Dimensions, View } from "react-native";
import { VictoryLegend, VictoryPie } from "victory-native";

class PharmacyPie extends React.Component {
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <VictoryPie
          width={Dimensions.get("screen").width - 40}
          height={250}
          innerRadius={90}
          padAngle={({ datum }) => datum.y}
          colorScale={["blue", "pink", "green"]}
          data={[
            { x: 1, y: 4, label: "20%" },
            { x: 2, y: 5, label: "30%" },
            { x: 3, y: 3, label: "50%" },
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
          gutter={20}
          data={[
            { name: "Medonconstant", symbol: { fill: "blue" } },
            {
              name: "Allied Pharmacy",
              symbol: { fill: "pink" },
            },
            { name: "My Pharmacy", symbol: { fill: "green" } },
          ]}
        />
      </View>
    );
  }
}
export default PharmacyPie;
