import { Center, HStack, VStack, Text } from "native-base";
import { Feather, FontAwesome5 } from "react-native-vector-icons";

export default () => {
  return (
    <VStack alignItems="center" justifyContent={"center"} space={2} my={2}>
      <HStack space={2}>
        <Card
          title="Patient"
          icon={<FontAwesome5 name="user-injured" size={30} />}
          avg={1823}
          color="purple.100"
        />
        <Card
          title="Income"
          icon={<FontAwesome5 name="user-injured" size={30} />}
          avg={"$2,423"}
          high
          color="rose.100"
        />
      </HStack>
      <HStack space={2}>
        <Card
          title="Appointments"
          icon={<FontAwesome5 name="user-injured" size={30} />}
          avg={4212}
          high
          color="green.100"
        />
        <Card
          title="Treatments"
          icon={<FontAwesome5 name="user-injured" size={30} />}
          avg={1253}
          color="blue.100"
        />
      </HStack>
    </VStack>
  );
};

const Card = ({ icon, title, avg, high, color }) => {
  return (
    <VStack
      w="48%"
      bgColor={color || "amber.300"}
      rounded="2xl"
      p="4"
      space={2}
    >
      <HStack alignItems={"center"} space={2}>
        <Center>{icon}</Center>
        <Text fontWeight={"bold"}>{title}</Text>
      </HStack>
      <HStack alignItems={"flex-start"}>
        <Text fontWeight={"bold"} fontSize="lg">
          {avg}
        </Text>
      </HStack>
      <HStack alignItems={"center"} space={2}>
        <Text>Last 7 day</Text>
        <Center>
          <Feather name={high ? "trending-up" : "trending-down"} size={15} />
        </Center>
      </HStack>
    </VStack>
  );
};
