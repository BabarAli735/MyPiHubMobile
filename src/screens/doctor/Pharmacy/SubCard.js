import {
  Box,
  Center,
  HStack,
  IconButton,
  Text,
  ThreeDotsIcon,
} from "native-base";
import { Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { Block } from "../../../components";
import { useTheme } from "../../../hooks";

export default ({ card }) => {
  const { title, subscribed } = card;
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Block
      card
      width={Dimensions.get("screen").width * 0.8}
      gradient={gradients.primary}
      marginRight={sizes.sm}
    >
      <Box>
        <HStack alignItems={"center"} justifyContent="space-between">
          <Text fontWeight="bold" color="white" fontSize="md">
            {title}
          </Text>

          <IconButton
            rounded={"lg"}
            icon={<ThreeDotsIcon size="md" color="white" />}
          />
        </HStack>
        <ImageBackground
          source={require("../../../assets/images/pharmacy1.jpg")}
          style={{
            height: 150,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: 10,
            borderRadius: 30,
          }}
          alt="image"
        >
          <TouchableOpacity>
            <Center p={2} bgColor="rgba(0,0,0,0.8)" rounded={"md"}>
              <Text color={"coolGray.300"} fontSize="xs" fontWeight="bold">
                {subscribed ? "unsubscribe" : "subscribe"}
              </Text>
            </Center>
          </TouchableOpacity>
        </ImageBackground>
      </Box>
    </Block>
  );
};
