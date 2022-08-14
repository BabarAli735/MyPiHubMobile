import dayjs from "dayjs";
import { Avatar, Center, HStack, Icon, Text, VStack } from "native-base";
import { useTheme } from "../../../hooks";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <Text>Appointments Requests</Text>
        <TouchableOpacity>
          <Text color={"green.600"} fontWeight="bold">
            See All
          </Text>
        </TouchableOpacity>
      </HStack>
      <Card
        image={assets.doctor1}
        name="Azam Shah"
        reason="Sever Cold"
        accepted
        time={dayjs()}
      />
      <Card
        image={assets.doctor1}
        name="Affan"
        reason="Headache"
        time={dayjs()}
      />
      <Card
        image={assets.doctor1}
        name="Hanif"
        reason="Thomor"
        time={dayjs()}
      />
    </VStack>
  );
};

const Card = ({ image, name, reason, accepted, onGoing = false, time }) => {
  return (
    <HStack p={2} rounded="lg" alignItems={"center"} space={2}>
      <Avatar source={image} h="12" w="12" />
      <VStack flex={1}>
        <Text fontWeight={"bold"}>{name}</Text>
        <Text fontSize={"xs"}>{reason}</Text>
        <Text fontSize={"xs"}>{dayjs(time).format("DD MMMM  -  hh:mm")}</Text>
      </VStack>
      {accepted ? (
        <Center p="2" bgColor={"green.100"}>
          <Text color="green.400">Accepted</Text>
        </Center>
      ) : (
        <HStack alignItems={"center"} space={2}>
          <TouchableOpacity>
            <Icon
              as={MaterialCommunityIcons}
              name="close-circle-outline"
              color="red.400"
              size="xl"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              as={MaterialCommunityIcons}
              name="check-circle-outline"
              color="green.400"
              size="xl"
            />
          </TouchableOpacity>
        </HStack>
      )}
    </HStack>
  );
};
