import React from "react";
import { Dimensions, View } from "react-native";
import { VictoryLegend, VictoryPie } from "victory-native";

class MarketPie extends React.Component {
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
            { x: 1, y: 4, label: "40%" },
            { x: 2, y: 5, label: "48%" },
            { x: 3, y: 1, label: "12%" },
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
            { name: "Food Panda", symbol: { fill: "orange" } },
            {
              name: "Grab Food",
              symbol: { fill: "red" },
            },
            { name: "Lazada", symbol: { fill: "navy" } },
          ]}
        />
      </View>
    );
  }
}
export default MarketPie;
