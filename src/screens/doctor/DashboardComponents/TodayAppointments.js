import dayjs from "dayjs";
import { Avatar, HStack, Text, VStack } from "native-base";
import { useTheme } from "../../../hooks";

export default () => {
  const { assets } = useTheme();
  return (
    <VStack space={2}>
      <Text mb="2">Today Appointments</Text>
      <Card
        image={assets.doctor1}
        name="Azam Shah"
        reason="Orthopedic"
        onGoing
        time={dayjs().format("hh:mm")}
      />
      <Card
        image={assets.doctor1}
        name="Affan"
        reason="Headache"
        time={dayjs().format("hh:mm")}
      />
      <Card
        image={assets.doctor1}
        name="Hanif"
        reason="Protestat"
        time={dayjs().format("hh:mm")}
      />
    </VStack>
  );
};

const Card = ({ image, name, reason, onGoing = false, time }) => {
  return (
    <HStack
      p={2}
      bgColor={onGoing ? "blue.100" : null}
      rounded="lg"
      alignItems={"center"}
      space={2}
    >
      <Avatar source={image} h="12" w="12" />
      <VStack flex={1}>
        <Text fontWeight={"bold"} color={onGoing ? "blue.400" : null}>
          {name}
        </Text>
        <Text fontSize={"xs"} color={onGoing ? "blue.400" : null}>
          {reason}
        </Text>
      </VStack>
      <Text color={onGoing ? "blue.400" : null}>
        {onGoing ? "On Going" : time}
      </Text>
    </HStack>
  );
};
