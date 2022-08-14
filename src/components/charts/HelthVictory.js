import { Center } from "native-base";
import React from "react";
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryTheme,
} from "victory-native";

class HelthVictory extends React.Component {
  render() {
    return (
      <Center>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryArea
            style={{ data: { fill: "navy" } }}
            data={[
              { x: "June", y: 2 },
              { x: "July", y: 3 },
              { x: "Aug", y: 5 },
              { x: "Sept", y: 4 },
              { x: "Oct", y: 6 },
            ]}
          />
          <VictoryAxis />
        </VictoryChart>
      </Center>
    );
  }
}
export default HelthVictory;
