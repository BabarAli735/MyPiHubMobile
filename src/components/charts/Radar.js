import { Center } from "native-base";
import React from "react";
import {
  VictoryArea,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
  VictoryPolarAxis,
  VictoryTheme,
} from "victory-native";

const characterData = [
  { malaria: 1, cold: 250, typhoid: 1, cough: 40, headeach: 50 },
];

class Radar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.processData(characterData),
      maxima: this.getMaxima(characterData),
    };
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

  render() {
    return (
      <Center>
        <VictoryChart
          polar
          theme={VictoryTheme.material}
          domain={{ y: [0, 1] }}
        >
          <VictoryGroup
            colorScale={["skyblue"]}
            style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
          >
            {this.state.data.map((data, i) => {
              return <VictoryArea key={i} data={data} />;
            })}
          </VictoryGroup>
          {Object.keys(this.state.maxima).map((key, i) => {
            return (
              <VictoryPolarAxis
                key={i}
                dependentAxis
                style={{
                  axisLabel: { padding: 10 },
                  axis: { stroke: "none" },
                  grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 },
                }}
                tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
                labelPlacement="perpendicular"
                axisValue={i + 1}
                label={key}
                tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
                tickValues={[0.25, 0.5, 0.75]}
              />
            );
          })}
          <VictoryPolarAxis
            labelPlacement="parallel"
            tickFormat={() => ""}
            style={{
              axis: { stroke: "none" },
              grid: { stroke: "green", opacity: 0.5 },
            }}
          />
        </VictoryChart>
        <VictoryLegend
          y={10}
          x={40}
          symbolSpacer={10}
          height={60}
          orientation="horizontal"
          gutter={20}
          itemsPerRow={3}
          data={[
            { name: "MALARIA", symbol: { fill: "orange" } },
            { name: "COLD", symbol: { fill: "tomato" } },
            { name: "TYPHOID", symbol: { fill: "gold" } },
            { name: "COUGH", symbol: { fill: "red" } },
            { name: "HEADACHE", symbol: { fill: "navy" } },
          ]}
        />
      </Center>
    );
  }
}

export default Radar;
