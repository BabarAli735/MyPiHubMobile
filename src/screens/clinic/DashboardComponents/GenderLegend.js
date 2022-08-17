import  FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import  Feather  from "react-native-vector-icons/Feather";
import { HStack, Icon, Text, VStack } from "native-base";
import * as React from "react";
import { Area, Chart, Line, Tooltip } from "react-native-responsive-linechart";
import { useTheme } from "../../../hooks";

export default () => {
  return (
    <VStack
      alignItems={"center"}
      justifyContent="space-between"
      space={2}
      mb={2}
    >
      <Card
        title="Total Male"
        icon={<FontAwesome5 name="user-injured" size={30} />}
        avg={60}
        color="rose.200"
        percent={-2.3}
        gender="male"
      />
      <Card
        title="Total Female"
        icon={<FontAwesome5 name="user-injured" size={30} />}
        avg={40}
        high
        color="blue.200"
        percent={4.5}
        gender="female"
      />
    </VStack>
  );
};

const Card = ({ title, avg, high, color, percent, gender }) => {
  return (
    <HStack borderWidth={0.2} rounded="2xl">
      <VStack w="40%" p="2" space={2}>
        <Text fontWeight={"bold"}>{title}</Text>
        <HStack alignItems={"center"} space={2}>
          <Text fontWeight={"bold"} color={color || "amber.300"}>
            {percent}%
          </Text>
          <Icon
            as={Feather}
            size={18}
            name={high ? "trending-up" : "trending-down"}
            color={color || "amber.300"}
          />
        </HStack>
        <Text fontWeight={"bold"} fontSize="lg">
          {avg}%
        </Text>
      </VStack>
      <VStack w="60%">{gender === "male" ? <Male /> : <Female />}</VStack>
    </HStack>
  );
};

const Male = () => {
  const ref = React.useRef();
  const { colors } = useTheme();

  return (
    <Chart
      style={{ height: 100, width: "100%" }}
      data={[
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 3, y: 2 },
        { x: 4, y: 1 },
        { x: 5, y: 2 },
        { x: 6, y: 1 },
        { x: 7, y: 2 },
        { x: 8, y: 1 },
      ]}
      padding={{ left: 10, bottom: 20, right: 10, top: 10 }}
      xDomain={{ min: 0, max: 8 }}
      yDomain={{ min: 0, max: 10 }}
    >
      <Area
        theme={{
          gradient: {
            from: { color: colors.info },
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
            default: { width: 3, height: 3, rx: 4, color: "#a70ec9" },
            selected: { color: "red" },
          },
        }}
      />
    </Chart>
  );
};

const Female = () => {
  const ref = React.useRef();
  const { colors } = useTheme();

  return (
    <Chart
      style={{ height: 100, width: "100%" }}
      data={[
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 3, y: 2 },
        { x: 4, y: 1 },
        { x: 5, y: 2 },
        { x: 6, y: 1 },
        { x: 7, y: 2 },
        { x: 8, y: 1 },
      ]}
      padding={{ left: 10, bottom: 20, right: 10, top: 10 }}
      xDomain={{ min: 0, max: 8 }}
      yDomain={{ min: 0, max: 10 }}
    >
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
            default: { width: 3, height: 3, rx: 4, color: "#a70ec9" },
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
