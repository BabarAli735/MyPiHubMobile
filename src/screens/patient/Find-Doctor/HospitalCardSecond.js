import { Box, Image, Stack, Text } from "native-base";

const HospitalCardSecond = ({ title, info, image }) => {
  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <Stack>
        <Image source={image} style={{ height: 150 }} alt="image" />
        <Text fontWeight="bold" fontSize="md" my={2}>
          {title}
        </Text>
        <Text>{info}</Text>
      </Stack>
    </Box>
  );
};

export default HospitalCardSecond;
