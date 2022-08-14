import { FontAwesome5, MaterialIcons } from "react-native-vector-icons";
import { Box, HStack, Stack, Text } from "native-base";
import { useTheme } from "../../../hooks";

const SpecialServices = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Stack>
      <Text
        textAlign={"center"}
        color="gray.500"
        mt={3}
        fontWeight="bold"
        fontSize={"xl"}
      >
        Special Services
      </Text>
      <Card
        title="Emergency Care"
        info="We provide emergency care for adults and children at several specialized locations."
        icon={<FontAwesome5 name="ambulance" size={20} color={colors.dark} />}
      />
      <Card
        title="Urgent Care"
        info="We offer urgent care for non-emergency medical concerns that need care as soon as possible."
        icon={<FontAwesome5 name="medkit" size={20} color={colors.dark} />}
      />
      <Card
        title="Imaging Services"
        info="From X-rays to MRI scans, we offer imaging services throughout the New York area."
        icon={<FontAwesome5 name="x-ray" size={20} color={colors.dark} />}
      />
    </Stack>
  );
};

export default SpecialServices;

const Card = ({ title, info, icon }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <HStack alignItems={"center"} px={2} justifyContent="space-between">
        <Stack w="5/6">
          <HStack alignItems={"center"} space={2} mb={2}>
            {icon}
            <Text fontWeight="bold" fontSize="md" color={colors.secondary}>
              {title}
            </Text>
          </HStack>
          <Text>{info}</Text>
        </Stack>
        <Stack>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </Stack>
      </HStack>
    </Box>
  );
};
