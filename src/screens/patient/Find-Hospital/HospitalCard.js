import  FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { Box, Divider, HStack, Stack, Text } from "native-base";
import { Block, Button, Text as MyText } from "../../../components";
import { useTheme } from "../../../hooks";

const HospitalCard = ({ title, info, address, phone }) => {
  const { gradients, sizes } = useTheme();
  const { navigate } = useNavigation();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <Stack>
        <Text fontWeight="bold" fontSize="md">
          {title}
        </Text>
        <Text>{info}</Text>
        <HStack alignItems={"center"} space={2} my={2}>
          <FontAwesome5 name="map-marker-alt" size={20} />
          <Text fontWeight="bold">{address}</Text>
        </HStack>
        <HStack alignItems={"center"} space={2} my={2}>
          <FontAwesome5 name="phone-alt" size={20} />
          <Text fontWeight="bold">{phone}</Text>
        </HStack>
      </Stack>
      <Divider my={2} />
      <Stack space={2}>
        <Button
          onPress={() => navigate("PatientFindHospitalDetail")}
          row
          gradient={gradients.primary}
        >
          <Block
            row
            align="center"
            justify="center"
            paddingHorizontal={sizes.sm}
          >
            <MyText size={12} white bold transform="uppercase">
              More About This Hospital
            </MyText>
          </Block>
        </Button>

        <Button row gradient={gradients.info}>
          <Block
            row
            align="center"
            justify="center"
            paddingHorizontal={sizes.sm}
          >
            <MyText size={12} white bold transform="uppercase">
              {"Find A Doctor & Schedule"}
            </MyText>
          </Block>
        </Button>
      </Stack>
    </Box>
  );
};

export default HospitalCard;
