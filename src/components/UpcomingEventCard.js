import { Avatar, HStack } from "native-base";

const UpcomingEventCard = () => {
  return (
    <HStack>
      <Avatar source={require("../assets/icons/profile.png")} h={2} w={2} />
      <HStack>
        <Text>Dr.Ibrahim</Text>
        <Text>EMERGENCY</Text>
      </HStack>
      <HStack>
        <Text>EMERGENCY</Text>
      </HStack>
    </HStack>
  );
};

export default UpcomingEventCard;
