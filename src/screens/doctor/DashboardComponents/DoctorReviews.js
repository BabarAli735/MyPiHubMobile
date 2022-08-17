import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import dayjs from "dayjs";
import { Avatar, HStack, Icon, Text, VStack } from "native-base";
import { useTheme } from "../../../hooks";

export default () => {
  const { assets } = useTheme();
  return (
    <VStack space={2}>
      <HStack
        mb="2"
        alignItems={"center"}
        px={2}
        justifyContent="space-between"
      >
        <Text>Doctor Rating</Text>
        <HStack alignItems={"center"} space={0.5}>
          <Icon
            as={MaterialCommunityIcons}
            color={"orange.500"}
            name="star"
            size="sm"
          />
          <Text fontWeight="bold" fontSize={"md"}>
            5.0
          </Text>
        </HStack>
      </HStack>
      <Card
        image={assets.avatar1}
        name="Azam Shah"
        message="your beautifull message should be written here"
        accepted
        time={dayjs()}
      />
      <Card
        image={assets.avatar1}
        name="Azam Shah"
        message="Scailing"
        time={dayjs()}
      />
      <Card
        image={assets.avatar1}
        name="Affan"
        message="your beautifull message should be written here"
        accepted
        time={dayjs()}
      />
    </VStack>
  );
};

const Card = ({ image, name, message, time }) => {
  return (
    <HStack p={2} rounded="lg" alignItems={"center"} space={2}>
      <Avatar source={{ url: image }} h="12" w="12" />
      <VStack flex={1}>
        <Text fontWeight={"bold"}>{name}</Text>
        <Text fontSize={"xs"}>{message}</Text>
      </VStack>
      <VStack>
        <HStack alignItems={"center"} space={0.5}>
          <Icon
            as={MaterialCommunityIcons}
            color={"orange.500"}
            name="star"
            size="sm"
          />
          <Text fontWeight="bold" fontSize={"md"}>
            5.0
          </Text>
        </HStack>
        <Text fontSize={"xs"}>
          {dayjs(time)
            .add(-Math.random() * 60, "minutes")
            .fromNow()}
        </Text>
      </VStack>
    </HStack>
  );
};
