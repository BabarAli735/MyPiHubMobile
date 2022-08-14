import * as React from "react";
import { Chart, Line } from "react-native-responsive-linechart";

export default () => {
  const ref = React.useRef();

  return (
    <Chart
      style={{ height: 200, width: "100%" }}
      data={[
        { x: 0, y: 0 },
        { x: 0.5, y: 1.1 },
        { x: 1, y: 1.3 },
        { x: 1.5, y: 1.5 },
        { x: 2, y: 1.7 },
        { x: 3, y: 1.9 },
        { x: 4, y: 2 },
        { x: 5, y: 2.2 },
        { x: 6, y: 2.4 },
        { x: 7, y: 2.6 },
        { x: 8, y: 3 },
        { x: 9, y: 3.5 },
        { x: 10, y: 4.9 },
        { x: 11, y: 5.4 },
        { x: 12, y: 5.8 },
      ]}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: 1, max: 12 }}
      yDomain={{ min: 0, max: 6 }}
    >
      <Line
        smoothing="cubic-spline"
        config={config}
        theme={{
          scatter: {
            default: { width: 5, height: 5, rx: 4, color: "#a70ec9" },
            selected: { color: "red" },
          },
          stroke: {
            default: { width: 8, height: 8, rx: 4, color: "#a70ec9" },
          },
        }}
      />
      <Line
        data={[
          { x: 0, y: 0 },
          { x: 0.5, y: 1.1 },
          { x: 1, y: 1.3 },
          { x: 1.5, y: 1.5 },
          { x: 2, y: 1.7 },
          { x: 3, y: 1.9 },
          { x: 4, y: 2 },
          { x: 5, y: 2.2 },
          { x: 6, y: 2.3 },
          { x: 7, y: 2.4 },
          { x: 8, y: 3.1 },
          { x: 9, y: 3.2 },
          { x: 10, y: 4.2 },
          { x: 11, y: 4.4 },
          { x: 12, y: 4.9 },
        ]}
        ref={ref}
        smoothing="cubic-spline"
        config={config}
        theme={{
          scatter: {
            default: { width: 5, height: 5, rx: 4, color: "#a70ec9" },
            selected: { color: "red" },
          },
          stroke: {
            default: { width: 8, height: 8, rx: 4, color: "#a70ec9" },
          },
        }}
      />
    </Chart>
  );
};

const config = {
  line: {
    strokeWidth: 1,
    strokeColor: "#216D99",
  },
  area: {
    gradientFrom: "#2e86de",
    gradientFromOpacity: 1,
    gradientTo: "#87D3FF",
    gradientToOpacity: 1,
  },
  yAxis: {
    labelColor: "#c8d6e5",
  },
  grid: {
    strokeColor: "#c8d6e5",
    stepSize: 30,
  },
  insetY: 10,
  insetX: 10,
  interpolation: "spline",
  backgroundColor: "#fff",
};
