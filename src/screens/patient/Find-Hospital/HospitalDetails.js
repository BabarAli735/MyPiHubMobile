import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
import { Box, Center, Divider, HStack, Stack, Text, VStack } from "native-base";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { Block, Button, Screen, Text as MyText } from "../../../components";
import { useTheme } from "../../../hooks";

export default (props) => {
  const [region, setRegion] = useState({
    latitude: 3.139,
    longitude: 101.6869,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return (
    <Screen style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Stack>
            <Box my={2}>
              <Text>Welcome to</Text>
              <Text fontWeight="bold" fontSize="lg">
                Klinik Pakar Kesihatan USIM
              </Text>
            </Box>
            <Social />
            <HospitalCardSecond />
            <Details />
            <FirstCard
              title="Our Clinical Services"
              info="Klinik Pakar Kesihatan USIM provide outstanding healthcare services for people by using smart technological ICT solutions."
            />
            <Team />
            <Text
              textAlign={"center"}
              color="gray.500"
              mt={3}
              fontWeight="bold"
              fontSize={"xl"}
            >
              Affiliated Programs
            </Text>
            <SecondCard
              title="Pediatric Diabetes Center"
              info="We provide care and support for children with type 1 and type 2 diabetes and their families."
              color="blue.300"
            />
            <SecondCard
              title="Sala Institute for Child and Family Centered Care"
              info="We provide support services and resilience programs that focus on the health and wellbeing of children and families."
              color="orange.300"
            />
            <Plan region={region} setRegion={setRegion} />
          </Stack>
        }
      />
    </Screen>
  );
};

const Plan = ({ region, setRegion }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <VStack px={2} space={2} my="2">
      <VStack space={2}>
        <Text fontWeight="bold" textAlign={"center"} fontSize={"lg"}>
          Plan Your Visit
        </Text>
        <Text fontWeight="bold" fontSize={"md"}>
          Klinik Pakar Kesihatan USIM
        </Text>
      </VStack>
      <VStack>
        <Text>
          Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai,
          Negeri Sembilan, Malaysia
        </Text>
      </VStack>

      <VStack>
        <MapView
          style={styles.map}
          scrollEnabled={true}
          showsMyLocationButton={true}
          zoomEnabled={true}
          zoomControlEnabled={true}
          zoomTapEnabled={true}
          initialRegion={region}
          onRegionChangeComplete={(region) => setRegion(region)}
        >
          <Marker
            pinColor="blue"
            coordinate={{
              latitude: 31.614566,
              longitude: 65.716224,
            }}
          >
            <Center p="3" borderRadius={"full"} bgColor="rgba(160,180,255,.7)">
              <FontAwesome5 name="map-marker-alt" size={15} color="blue" />
            </Center>
          </Marker>
          <Marker
            pinColor="blue"
            coordinate={{
              latitude: 31.624566,
              longitude: 65.726224,
            }}
          >
            <Center p="3" borderRadius={"full"} bgColor="rgba(160,180,255,.7)">
              <FontAwesome5 name="map-marker-alt" size={15} color="blue" />
            </Center>
          </Marker>
          <Marker
            pinColor="blue"
            coordinate={{
              latitude: 31.615566,
              longitude: 65.717224,
            }}
          >
            <Center p="3" borderRadius={"full"} bgColor="rgba(160,180,255,.7)">
              <FontAwesome5 name="map-marker-alt" size={15} color="blue" />
            </Center>
          </Marker>
        </MapView>
      </VStack>

      <HStack space={1}>
        <Text>Phone:</Text>
        <Text fontWeight="bold">212-263-5940</Text>
      </HStack>
      <HStack space={1}>
        <Text>Fax:</Text>
        <Text fontWeight="bold">212-263-5808</Text>
      </HStack>
      <VStack space={2} my={2}>
        <Text fontWeight="bold">Getting Here</Text>
        <TouchableOpacity>
          <Text fontWeight="bold" color={colors.primary}>
            Get Directions
          </Text>
        </TouchableOpacity>
      </VStack>
      <Button row gradient={gradients.primary}>
        <Block row align="center" justify="center" paddingHorizontal={sizes.sm}>
          <MyText size={12} white bold transform="uppercase">
            Find A Doctor & Schedule
          </MyText>
        </Block>
      </Button>
      <VStack space={2} mt={2}>
        <Text fontWeight="bold">For Our Patients</Text>
        <TouchableOpacity>
          <Text fontWeight="bold" color={colors.primary}>
            Patient Forms
          </Text>
        </TouchableOpacity>
      </VStack>
      <VStack space={2} mt={2}>
        <Text fontWeight="bold">Wi-Fi</Text>
        <Text>Free Wi-Fi is available to patients and visitors.</Text>
      </VStack>
      <VStack space={2} mt={2}>
        <Text fontWeight="bold">BMI Calculator</Text>
        <Text>
          We treat teens with a body mass index (BMI) of 35 or higher. Calculate
          your child’s BMI using this tool from the Centers for Disease Control
          and Prevention.
        </Text>
        <TouchableOpacity>
          <Text fontWeight="bold" color={colors.primary}>
            Learn More
          </Text>
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
};

const SecondCard = ({ title, info, color }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box
      shadow="1"
      borderTopColor={color}
      borderTopWidth="8"
      borderRadius="xl"
      p="3"
      my="2"
    >
      <VStack px={2} justifyContent="space-between">
        <Stack w="5/6">
          <HStack alignItems={"center"} space={2} mb={2}>
            <Text fontWeight="bold" fontSize="md" color={colors.dark}>
              {title}
            </Text>
          </HStack>
          <Text>{info}</Text>
        </Stack>
        <HStack alignItems={"center"} mt="4">
          <Text fontWeight={"bold"}>learn more</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} />
        </HStack>
      </VStack>
    </Box>
  );
};

const Team = ({}) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <VStack alignItems={"center"} space={2} my="2">
      <VStack alignItems="center" space={2}>
        <Text fontWeight="bold" fontSize={"lg"}>
          Our Team
        </Text>
        <Text>Our doctors provide outstanding healthcare services</Text>
      </VStack>
      <Button row gradient={gradients.primary}>
        <Block row align="center" justify="center" paddingHorizontal={sizes.sm}>
          <MyText size={12} white bold transform="uppercase">
            Find A Doctor & Schedule
          </MyText>
        </Block>
      </Button>
    </VStack>
  );
};

const FirstCard = ({ title, info, icon }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box
      shadow="1"
      borderTopColor={"blue.300"}
      borderTopWidth="8"
      borderRadius="xl"
      p="3"
      my="2"
    >
      <HStack alignItems={"center"} px={2} justifyContent="space-between">
        <Stack w="5/6">
          <HStack alignItems={"center"} space={2} mb={2}>
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

const Details = ({}) => {
  return (
    <VStack space={2} my="2">
      <VStack space={4}>
        <Text fontWeight="bold" fontSize={"lg"}>
          USIM provide outstanding healthcare services for people by using smart
          technological ICT solutions.
        </Text>
        <Text>
          Helping your child reach and maintain a healthy weight is just as
          important to their health as ensuring they have the right vaccinations
          and are hitting their developmental milestones. USIM provide
          outstanding healthcare services for people by using smart
          technological ICT solutions.
        </Text>
      </VStack>
      <Divider mt={2} />
      <VStack space={4}>
        <Text fontWeight="bold" fontSize={"lg"}>
          Our Treatment Options
        </Text>
        <Text>
          USIM provide outstanding healthcare services for people by using smart
          technological ICT solutions.
        </Text>
      </VStack>
    </VStack>
  );
};

const HospitalCardSecond = ({}) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <VStack space={2} shadow="1" borderRadius="xl" p="3" my="2">
      <VStack>
        <Text fontWeight="bold">Where to Find Us</Text>
        <Text>
          Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai,
          Negeri Sembilan, Malaysia
        </Text>
      </VStack>
      <HStack space={1}>
        <Text>Phone:</Text>
        <Text fontWeight="bold">+60126504921</Text>
      </HStack>
      <Divider my={2} />
      <VStack space={2}>
        <Button
          // onPress={() => navigate("PatientFindHospitalDetail")}
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
              Plan Your Visit
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
      </VStack>
    </VStack>
  );
};

const Social = () => {
  return (
    <HStack alignItems={"center"} space="4" my={2}>
      <TouchableOpacity>
        <Center p="2" borderWidth={1} borderRadius="full">
          <MaterialCommunityIcons name={"email"} size={20} />
        </Center>
      </TouchableOpacity>
      <TouchableOpacity>
        <Center p="2" borderWidth={1} borderRadius="full">
          <MaterialCommunityIcons name={"facebook"} size={20} />
        </Center>
      </TouchableOpacity>
      <TouchableOpacity>
        <Center p="2" borderWidth={1} borderRadius="full">
          <MaterialCommunityIcons name={"twitter"} size={20} />
        </Center>
      </TouchableOpacity>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  map: {
    height: 200,
    width: "100%",
  },
});
