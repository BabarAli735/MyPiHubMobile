import * as React from "react";
import {
  Area,
  Chart,
  HorizontalAxis,
  Line,
  Tooltip,
  VerticalAxis,
} from "react-native-responsive-linechart";
import { useTheme } from "../../hooks";

export default () => {
  const ref = React.useRef();
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
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: 1, max: 12 }}
      yDomain={{ min: 0, max: 5 }}
    >
      <VerticalAxis
        tickCount={10}
        theme={{
          labels: { formatter: (v) => v.toFixed(2) },
          grid: { stroke: { dashArray: [10, 2] } },
        }}
      />
      <HorizontalAxis
        tickCount={5}
        theme={{ grid: { stroke: { dashArray: [10, 2] } } }}
      />
      <Area
        theme={{
          gradient: {
            from: { color: colors.success },
            to: { color: colors.info, opacity: 0.3 },
          },
        }}
      />
      <Line
        initialTooltipIndex={3}
        ref={ref}
        hideTooltipOnDragEnd
        hideTooltipAfter={750}
        smoothing="cubic-spline"
        tooltipComponent={<Tooltip />}
        config={config}
        theme={{
          scatter: {
            default: { width: 8, height: 8, rx: 4, color: "#a70ec9" },
            selected: { color: "red" },
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
