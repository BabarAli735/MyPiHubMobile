import { useNavigation } from "@react-navigation/native";
import { Box, Image, Stack, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const HospitalCardSecond = ({ title, info, image }) => {
  const { navigate } = useNavigation();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <Image source={image} style={{ height: 150 }} alt="image" />
      <TouchableOpacity
        onPress={() => navigate("PatientFindSecondHospitalDetail")}
      >
        <Stack>
          <Text fontWeight="bold" fontSize="md" my={2}>
            {title}
          </Text>
          <Text>{info}</Text>
        </Stack>
      </TouchableOpacity>
    </Box>
  );
};

export default HospitalCardSecond;
