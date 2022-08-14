import dayjs from "dayjs";
import { Box, Divider, HStack, Text, VStack } from "native-base";
import { Button } from "../../../components";
import { useTheme } from "../../../hooks";

export default ({ onClickPromo, onClickOffers, onClickFamily }) => {
  const { assets } = useTheme();
  const { sizes, gradients } = useTheme();

  return (
    <VStack space={2}>
      <Card
        image={assets.doctor1}
        name="Azam Shah"
        address="2235 Avandole Ave Pasadena Okahama 83900"
        dob={dayjs().format("DD MMMM YYYY")}
        gender="Male"
        wieght={"56 kg"}
        height={"172 cm"}
        lastApt={dayjs().format("DD MMM YYYY")}
        registerDate={dayjs().format("DD MMM YYYY")}
        tags={[
          {
            id: "1",
            title: "Asthma",
            bgColor: "amber.100",
            color: "amber.500",
          },
          {
            id: "2",
            title: "Hypotisis",
            bgColor: "blue.100",
            color: "blue.500",
          },
          {
            id: "3",
            title: "Hypo",
            bgColor: "blue.100",
            color: "blue.500",
          },
          {
            id: "4",
            title: "Hypotisis",
            bgColor: "blue.100",
            color: "blue.500",
          },
          {
            id: "5",
            title: "Hypotisis",
            bgColor: "blue.100",
            color: "blue.500",
          },
        ]}
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
              {"Offer Promo"}
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
              {"Offer Offers"}
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
              {"Offer Family"}
            </Text>
          </Button>
        </Box>
      </HStack>
    </VStack>
  );
};

const Card = ({
  image,
  name,
  address,
  dob,
  gender,
  wieght,
  height,
  lastApt,
  registerDate,
  tags,
}) => {
  const { sizes, gradients } = useTheme();

  return (
    <VStack space={2}>
      <HStack alignItems={"center"} justifyContent="space-between" p={2}>
        <VStack alignItems={"center"}>
          <Text fontWeight={"bold"}>D.O.B</Text>
          <Text>{dob}</Text>
        </VStack>
        <VStack alignItems={"center"}>
          <Text fontWeight={"bold"}>Sex</Text>
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
      <HStack alignItems={"center"} space={2} p={2} flexWrap="wrap">
        {tags.map((tag) => (
          <VStack
            p={2}
            key={tag.id}
            bgColor={tag.bgColor}
            alignItems={"center"}
            rounded="md"
            mb={2}
          >
            <Text fontWeight={"bold"} color={tag.color}>
              {tag.title}
            </Text>
          </VStack>
        ))}
      </HStack>
      <HStack alignItems={"center"} justifyContent="space-between">
        <Box>
          <Button
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
              {"(306) 555-0121"}
            </Text>
          </Button>
        </Box>
        <Box>
          <Button
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
              {"Documents"}
            </Text>
          </Button>
        </Box>
        <Box>
          <Button
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
              {"Chat"}
            </Text>
          </Button>
        </Box>
      </HStack>
    </VStack>
  );
};
