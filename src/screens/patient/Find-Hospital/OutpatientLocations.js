import { Box, Divider, Stack, Text } from "native-base";
import { Block, Button, Text as MyText } from "../../../components";
import { useTheme } from "../../../hooks";

const OutpatientLocations = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Stack alignItems="center">
      <Text
        textAlign={"center"}
        color="gray.500"
        mt={3}
        fontWeight="bold"
        fontSize={"xl"}
      >
        Outpatient Hospitals/Clinics
      </Text>
      <Card
        title="Perlmutter Cancer Center"
        info="From the most advanced treatments to access to clinical trials, we offer the latest in cancer care and support."
      />
      <Card
        title="MyPiHUB USIM Orthopedic Center"
        info="Our experts provide treatments that help increase your mobility, relieve pain, and improve your quality of life."
      />
      <Card
        title="Fink Children’s Ambulatory Care Center"
        info="We provide comprehensive, compassionate outpatient care for a wide range of pediatric conditions."
      />
      <Card
        title="Joan H. USIM Center for Women’s Health"
        info="We offer an array of primary and specialty care to address your health concerns at one convenient location"
      />
      <Card
        title="Preston Robert USIM Center for Men’s Health"
        info="We offer personalized healthcare for men at one convenient location."
      />
      <Card
        title="MyPiHUB USIM Ambulatory Care Center East 38th Street"
        info="Our location houses a variety of doctors’ offices and outpatient services."
      />
      <Card
        title="Family Health Centers at MyPiHUB USIM"
        info="High-quality, affordable healthcare is available at our community- and school-based locations."
      />
      <Card
        title="MyPiHUB USIM at Trinity"
        info="We offer a comprehensive array of primary and specialty care—all in one convenient location."
      />
      <Card
        title="MyPiHUB USIM Ambulatory Care West Side"
        info="Located near New York City’s Theatre District, we provide the west side of Manhattan with specialty medical care. "
      />
      <Stack my={2} />
      <Button row gradient={gradients.dark} width="80%">
        <Block row align="center" justify="center" paddingHorizontal={sizes.sm}>
          <MyText size={12} white bold transform="uppercase">
            View Full Locations Directory
          </MyText>
        </Block>
      </Button>
      <Divider mt={3} />
    </Stack>
  );
};

export default OutpatientLocations;

const Card = ({ title, info, icon }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2" w="full">
      <Text fontWeight="bold" fontSize="md" color="blue.600">
        {title}
      </Text>
      <Text>{info}</Text>
    </Box>
  );
};
