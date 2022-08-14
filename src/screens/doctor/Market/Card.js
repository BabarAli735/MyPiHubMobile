import { useNavigation } from "@react-navigation/native";
import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  ThreeDotsIcon,
} from "native-base";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Block } from "../../../components";
import { useTheme } from "../../../hooks";

export default ({ title, measure, image }) => {
  const { navigate } = useNavigation();
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
          <Text color={"white"}>{measure}</Text>
          <TouchableOpacity>
            <Text color={"white"} fontWeight="bold">
              Buy
            </Text>
          </TouchableOpacity>
          <IconButton
            rounded={"lg"}
            icon={<ThreeDotsIcon size="md" color="white" />}
          />
        </HStack>
        <Image source={image} style={{ height: 150 }} alt="image" />
      </Box>
    </Block>
  );
};
