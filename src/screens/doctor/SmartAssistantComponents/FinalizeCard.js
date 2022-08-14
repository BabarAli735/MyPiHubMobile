import dayjs from "dayjs";
import { Box, Divider, HStack, Text, VStack } from "native-base";
import { Button } from "../../../components";
import { useTheme } from "../../../hooks";

export default ({ onClickPromo, onClickOffers, onClickFamily }) => {
  const { assets } = useTheme();
  const { sizes, gradients } = useTheme();

  return (
    <VStack space={2}>
      <Text>
        Recommended Treatments and Procedures for Azam Shah
      </Text>
      <Card
        image={assets.doctor1}
        name="Azam Shah"
        address="Nillai, Lot 50052"
        dob={dayjs().format("DD MMMM YYYY")}
        gender="Male"
        wieght={"56 kg"}
        height={"172 cm"}
        lastApt={dayjs().format("DD MMM YYYY")}
        registerDate={dayjs().format("DD MMM YYYY")}
      />
      <Divider />
      <HStack alignItems={"center"} justifyContent="space-between">
        <Box>
          <Button
            paddingHorizontal={sizes.s}
            gradient={gradients.primary}
            minHeight={40}
            onPress={onClickPromo}
          >
            <Text
              fontWeight={"bold"}
              fontSize="xs"
              color="white"
              textTransform={"uppercase"}
            >
              {"Treaments"}
            </Text>
          </Button>
        </Box>
        <Box>
          <Button
            onPress={onClickOffers}
            paddingHorizontal={sizes.s}
            gradient={gradients.primary}
            minHeight={40}
          >
            <Text
              fontWeight={"bold"}
              fontSize="xs"
              color="white"
              textTransform={"uppercase"}
            >
              {"To Phramacy"}
            </Text>
          </Button>
        </Box>
        <Box>
          <Button
            onPress={onClickFamily}
            paddingHorizontal={sizes.s}
            gradient={gradients.primary}
            minHeight={40}
          >
            <Text
              fontWeight={"bold"}
              fontSize="xs"
              color="white"
              textTransform={"uppercase"}
            >
              {"To Inpatient"}
            </Text>
          </Button>
        </Box>
      </HStack>
    </VStack>
  );
};

const Card = ({ dob, gender, wieght, height, lastApt, registerDate }) => {
  const { sizes, gradients } = useTheme();

  return (
    <VStack space={2}>
      <HStack alignItems={"center"} justifyContent="space-between" p={2}>
        <VStack alignItems={"center"}>
          <Text fontWeight={"bold"}>D.O.B</Text>
          <Text>{dob}</Text>
        </VStack>
        <VStack alignItems={"center"}>
          <Text fontWeight={"bold"}>Gender</Text>
          <Text>{gender}</Text>
        </VStack>
        <VStack alignItems={"center"}>
          <Text fontWeight={"bold"}>Weight</Text>
          <Text>{wieght}</Text>
        </VStack>
      </HStack>
      <HStack alignItems={"center"} justifyContent="space-between" p={2}>
        <VStack alignItems={"center"}>
          <Text fontWeight={"bold"}>Height</Text>
          <Text>{height}</Text>
        </VStack>
        <VStack alignItems={"center"}>
          <Text fontWeight={"bold"}>Last Appointment</Text>
          <Text>{lastApt}</Text>
        </VStack>
        <VStack alignItems={"center"}>
          <Text fontWeight={"bold"}>Register Date</Text>
          <Text>{registerDate}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
