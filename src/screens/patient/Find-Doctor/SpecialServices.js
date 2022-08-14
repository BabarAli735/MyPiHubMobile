import { FontAwesome5 } from "react-native-vector-icons";
import { Box, HStack, Stack, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "../../../hooks";

const SpecialServices = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Stack>
      <Text textAlign={"center"} mt={3} fontWeight="bold" fontSize={"xl"}>
        Special Services
      </Text>
      <Card
        title="Primary Care & Internal Medicine"
        info="Our doctors partner with you to help you reach your wellness goals and treat illnesses that arise."
        icon={<FontAwesome5 name="heartbeat" size={20} color={colors.dark} />}
      />
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
      <VStack space={2} px={2} justifyContent="space-between">
        <Stack w="5/6">
          <HStack alignItems={"center"} space={2} mb={2}>
            {icon}
            <Text fontWeight="bold" fontSize="md" color={colors.secondary}>
              {title}
            </Text>
          </HStack>
          <Text>{info}</Text>
        </Stack>
        <HStack>
          <TouchableOpacity>
            <Text fontWeight="bold" color={colors.primary}>
              Learn More
            </Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </Box>
  );
};
