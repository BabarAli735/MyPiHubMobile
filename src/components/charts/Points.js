import { Center } from "native-base";
import React from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLegend,
  VictoryStack,
} from "victory-native";

const myDataset = [
  [
    { x: "June", y: 1 },
    { x: "July", y: 2 },
    { x: "Aug", y: 3 },
    { x: "Sept", y: 2 },
    { x: "Oct", y: 1 },
  ],
  [
    { x: "June", y: 2 },
    { x: "July", y: 3 },
    { x: "Aug", y: 4 },
    { x: "Sept", y: 5 },
    { x: "Oct", y: 5 },
  ],
  [
    { x: "June", y: 1 },
    { x: "July", y: 2 },
    { x: "Aug", y: 3 },
    { x: "Sept", y: 4 },
    { x: "Oct", y: 4 },
  ],
];

class Points extends React.Component {
  // This is an example of a function you might use to transform your data to make 100% data
  transformData(dataset) {
    const totals = dataset[0].map((data, i) => {
      return dataset.reduce((memo, curr) => {
        return memo + curr[i].y;
      }, 0);
    });
    return dataset.map((data) => {
      return data.map((datum, i) => {
        return { x: datum.x, y: (datum.y / totals[i]) * 100 };
      });
    });
  }

  render() {
    const dataset = this.transformData(myDataset);
    return (
      <Center>
        <VictoryChart>
          <VictoryStack
            colorScale={["orange", "navy", "tomato"]}
            // labels={["spring", "summer", "fall", "winter"]}
            name="series-1"
          >
            {dataset.map((data, i) => {
              return <VictoryBar data={data} key={i} />;
            })}
          </VictoryStack>
          <VictoryAxis tickFormat={["June", "July", "Aug", "Sept", "Oct"]} />
        </VictoryChart>
        <VictoryLegend
          itemsPerRow={2}
          y={10}
          x={40}
          symbolSpacer={10}
          height={60}
          orientation="horizontal"
          gutter={10}
          style={{ labels: { fontSize: 14 } }}
          data={[
            { name: "EMERGENCY", symbol: { fill: "orange" } },
            {
              name: "EXAMINATION",
              symbol: { fill: "red" },
            },
            { name: "CONSULTATION", symbol: { fill: "navy" } },
          ]}
        />
      </Center>
    );
  }
}

export default Points;
