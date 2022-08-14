import { Center, HStack, VStack, Text, Icon } from "native-base";
import { Feather, FontAwesome5 } from "react-native-vector-icons";

export default () => {
  return (
    <HStack
      alignItems={"center"}
      justifyContent="space-between"
      space={2}
      mb={2}
    >
      <Card
        title="This Month"
        icon={<FontAwesome5 name="user-injured" size={30} />}
        avg={17.5}
        color="blue.100"
        percent={-2.3}
      />
      <Card
        title="This Year"
        icon={<FontAwesome5 name="user-injured" size={30} />}
        avg={34.4}
        high
        color="rose.100"
        percent={4.5}
      />
    </HStack>
  );
};

const Card = ({ icon, title, avg, high, color, percent }) => {
  return (
    <VStack borderWidth={0.2} w="45%" rounded="2xl" p="4" space={3}>
      <Center bgColor={color || "amber.300"} p={2} rounded="lg" mb={2} w="1/2">
        {icon}
      </Center>
      <Text color="gray.500">{title}</Text>
      <Text fontWeight={"bold"} fontSize="lg">
        ${avg}k
      </Text>
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
    </VStack>
  );
};
