import dayjs from "dayjs";
import * as React from "react";
import {
  Area,
  Chart,
  HorizontalAxis,
  Line,
  VerticalAxis,
} from "react-native-responsive-linechart";
import { useTheme } from "../../../hooks";

export default () => {
  const lineOneRef = React.useRef();
  const lineTwoRef = React.useRef();
  const { colors } = useTheme();

  return (
    <Chart
      style={{ height: 200, width: "100%" }}
      data={[
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { x: 3, y: 4 },
        { x: 4, y: 1 },
        { x: 5, y: 2 },
        { x: 6, y: 3 },
        { x: 7, y: 5 },
        { x: 8, y: 2 },
        { x: 9, y: 0 },
        { x: 10, y: 1 },
        { x: 11, y: 2 },
        { x: 12, y: 0 },
      ]}
      padding={{ left: 30, bottom: 20, right: 10, top: 20 }}
      xDomain={{ min: 1, max: 12 }}
      yDomain={{ min: 0, max: 6 }}
    >
      <VerticalAxis
        tickValues={[0, 2, 4, 6, 8, 10]}
        theme={{
          labels: { formatter: (v) => `${v.toFixed(1)}k` },
          grid: { stroke: { dashArray: [10, 2] } },
        }}
      />
      <HorizontalAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        theme={{
          labels: { formatter: (v) => dayjs(`2022-${v}-1`).format("MMM") },
          grid: { stroke: { dashArray: [10, 2] } },
        }}
      />
      <Area
        theme={{
          gradient: {
            from: { color: colors.success },
            to: { color: colors.info, opacity: 0.3 },
          },
        }}
      />
      <Line ref={lineOneRef} smoothing="cubic-spline" config={config} />
      <Line
        data={[
          { x: 1, y: 4 },
          { x: 2, y: 3 },
          { x: 3, y: 2 },
          { x: 4, y: 1 },
          { x: 5, y: 4 },
          { x: 6, y: 1 },
          { x: 7, y: 2 },
          { x: 8, y: 3 },
          { x: 9, y: 4 },
          { x: 11, y: 2 },
          { x: 12, y: 3 },
        ]}
        ref={lineTwoRef}
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
