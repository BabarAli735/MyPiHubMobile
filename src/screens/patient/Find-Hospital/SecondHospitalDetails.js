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
import {
  Block,
  Button,
  Image,
  Screen,
  Text as MyText,
} from "../../../components";
import { useTheme } from "../../../hooks";

export default (props) => {
  const [region, setRegion] = useState({
    latitude: 3.139,
    longitude: 101.6869,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Screen style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Stack>
            <Box my={4}>
              <Text fontWeight="bold" fontSize="lg">
                Klinik Pakar Kesihatan USIM
              </Text>
            </Box>
            <HospitalCardSecond />
            <Image source={assets.carousel1} height={250} width={500} />
            <SimpleCard
              title="Ranked Among Best Clinics"
              info="Ranked among the best clinics in Nilai"
            />
            <SimpleCard
              title="Excellent Services"
              info="InPatient & Outpatient high quality services"
            />
            <SimpleCard
              title="Experienced Doctors"
              info="High Qaulity healthcare by professional and experienced doctors"
            />

            <Details />
            <Divider />
            <Text
              textAlign={"center"}
              color="gray.500"
              mt={3}
              fontWeight="bold"
              fontSize={"xl"}
            >
              Patient and Family Support
            </Text>
            <Family />
            <Cards />
            <Text
              textAlign={"center"}
              color="gray.500"
              mt={3}
              fontWeight="bold"
              fontSize={"xl"}
            >
              Our Locations
            </Text>
            <CollapseCard region={region} setRegion={setRegion} />

            <Text
              textAlign={"center"}
              color="gray.500"
              mt={3}
              fontWeight="bold"
              fontSize={"xl"}
            >
              For Our Patients
            </Text>
            <OurPatients />
          </Stack>
        }
      />
    </Screen>
  );
};

const OurPatients = ({}) => {
  const [showVisit, setShowVisit] = useState(false);
  const [showWifi, setShowWifi] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  return (
    <VStack px={2} space={2} my="2">
      <SimpleCollapseCard
        type="visit"
        title="Visiting Hours"
        info="Guests are encouraged to visit loved ones during their hospital stay."
        show={showVisit}
        setShow={setShowVisit}
      />
      <SimpleCollapseCard
        type="wifi"
        title="Wi-Fi"
        info="Free Wi-Fi is available to patients and visitors."
        show={showWifi}
        setShow={setShowWifi}
      />
      <SimpleCollapseCard
        type="policy"
        title="Smoke-Free Policy"
        info="MyPiHUB USIM campuses, buildings, and exterior spaces are tobacco-free, including electronic cigarettes (e-cigarettes) and all other smoking devices. Smoking or the use of smoking devices is not permitted anywhere at MyPiHUB USIM, including your room."
        show={showPolicy}
        setShow={setShowPolicy}
      />
    </VStack>
  );
};

const SimpleCollapseCard = ({ type, show, setShow, title, info }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack px={2} space={2} my="2">
        <TouchableOpacity onPress={() => setShow(!show)}>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <HStack alignItems={"center"} space={2}>
              <MaterialCommunityIcons
                name={
                  type == "visit"
                    ? "clock-time-nine-outline"
                    : type == "wifi"
                    ? "wifi"
                    : "smoking-off"
                }
                size={20}
                color={colors.primary}
              />
              <Text fontWeight="bold" fontSize={"md"}>
                {title}
              </Text>
            </HStack>
            <Center
              p="1"
              borderRadius={"full"}
              bgColor={show ? colors.primary : "gray.300"}
            >
              <MaterialIcons
                name={show ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={20}
                color={show ? colors.white : colors.primary}
              />
            </Center>
          </HStack>
        </TouchableOpacity>

        {show && (
          <VStack space={2}>
            <Text>{info}</Text>
            {type == "visit" && (
              <TouchableOpacity>
                <Text fontWeight="bold" color={colors.primary}>
                  Learn More About Our Visiting Hours
                </Text>
              </TouchableOpacity>
            )}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const SecondCard = ({ title, info }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
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
          <Text fontWeight={"bold"} color={colors.primary}>
            learn more
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color={colors.primary}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

const CollapseCard = () => {
  const [show, setShow] = useState(false);
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack px={2} space={2} my="2">
        <TouchableOpacity onPress={() => setShow(!show)}>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <VStack>
              <Text fontWeight="bold" fontSize={"md"}>
                Klinik Pakar Kesihatan USIM
              </Text>
              <Text>
                Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800
                Nilai, Negeri Sembilan, Malaysia
              </Text>
            </VStack>
            <Center
              p="1"
              borderRadius={"full"}
              bgColor={show ? colors.primary : "gray.300"}
            >
              <MaterialIcons
                name={show ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={20}
                color={show ? colors.white : colors.primary}
              />
            </Center>
          </HStack>
        </TouchableOpacity>

        {show && (
          <VStack>
            <VStack>
              <MapView
                key={"none-scroll"}
                style={styles.map}
                scrollEnabled={false}
                showsMyLocationButton={false}
                zoomEnabled={true}
                zoomControlEnabled={false}
                zoomTapEnabled={true}
                initialRegion={{
                  latitude: 31.614566,
                  longitude: 65.716224,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  key={"none-scroll-marker"}
                  pinColor="blue"
                  coordinate={{
                    latitude: 31.614566,
                    longitude: 65.716224,
                  }}
                >
                  <Center
                    p="3"
                    borderRadius={"full"}
                    bgColor="rgba(160,180,255,.7)"
                  >
                    <FontAwesome5
                      name="map-marker-alt"
                      size={15}
                      color="blue"
                    />
                  </Center>
                </Marker>
              </MapView>
            </VStack>
            <HStack space={1}>
              <Text>Phone:</Text>
              <Text fontWeight="bold">212-263-5940</Text>
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
              <Block
                row
                align="center"
                justify="center"
                paddingHorizontal={sizes.sm}
              >
                <MyText size={12} white bold transform="uppercase">
                  Parking in Midtown Nillie
                </MyText>
              </Block>
            </Button>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const Cards = () => {
  return (
    <>
      <SecondCard
        title="Ambulatory Care Pharmacy"
        info="Have your prescriptions ready for pickup when you leave the hospital."
      />
      <SecondCard
        title="Comprehensive Transfer Center  "
        info="We ensure patients are transported safely to or within MyPiHUB USIM facilities."
      />
      <SecondCard
        title="Social Work and Care Management Services for Adults"
        info="Our nurses and social workers help ease your transition from the hospital to home."
      />
      <SecondCard
        title="Integrative Health Services"
        info="Get holistic solutions for handling the mental and physical stress of illness."
      />
      <SecondCard
        title="For New and Expecting Parents"
        info="Our classes help you prepare for childbirth, breastfeeding, and parenthood."
      />
      <SecondCard
        title="Palliative Care and Supportive Care for Adults"
        info="If you’re dealing with a serious or life-limiting illness, your comfort is our priority."
      />
    </>
  );
};

const Family = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <Text fontWeight="bold" fontSize="md" mt={2} mb={4}>
        Patient Support Services
      </Text>

      <TouchableOpacity>
        <HStack
          alignItems={"center"}
          borderBottomWidth="1"
          borderBottomColor="gray.300"
          justifyContent="space-between"
          pb={2}
          mb={3}
        >
          <Text>Guest Services</Text>
          <Stack>
            <MaterialIcons name="keyboard-arrow-right" size={25} />
          </Stack>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity>
        <HStack
          alignItems={"center"}
          borderBottomWidth="1"
          borderBottomColor="gray.300"
          justifyContent="space-between"
          pb={2}
          mb={3}
        >
          <Text>International Patient Services</Text>
          <Stack>
            <MaterialIcons name="keyboard-arrow-right" size={25} />
          </Stack>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity>
        <HStack
          alignItems={"center"}
          borderBottomWidth="1"
          borderBottomColor="gray.300"
          justifyContent="space-between"
          pb={2}
          mb={3}
        >
          <Text>Language & Disability Services</Text>
          <Stack>
            <MaterialIcons name="keyboard-arrow-right" size={25} />
          </Stack>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity>
        <HStack
          alignItems={"center"}
          borderBottomWidth="1"
          borderBottomColor="gray.300"
          justifyContent="space-between"
          pb={2}
          mb={3}
        >
          <Text>Patient Relations</Text>
          <Stack>
            <MaterialIcons name="keyboard-arrow-right" size={25} />
          </Stack>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity>
        <HStack
          alignItems={"center"}
          borderBottomWidth="1"
          borderBottomColor="gray.300"
          justifyContent="space-between"
          pb={2}
          mb={3}
        >
          <Text>Spiritual, Religious & Chaplaincy Services for Adults</Text>
          <Stack>
            <MaterialIcons name="keyboard-arrow-right" size={25} />
          </Stack>
        </HStack>
      </TouchableOpacity>
      <TouchableOpacity>
        <HStack
          alignItems={"center"}
          justifyContent="space-between"
          pb={2}
          mb={3}
        >
          <Text>What to Bring for Your Hospital Stay</Text>
          <Stack>
            <MaterialIcons name="keyboard-arrow-right" size={25} />
          </Stack>
        </HStack>
      </TouchableOpacity>
    </Box>
  );
};

const Details = ({}) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <VStack space={2} my="2">
      <Box
        shadow="1"
        borderTopColor={"blue.300"}
        borderTopWidth="8"
        borderRadius="xl"
        p="3"
        my="2"
      >
        <VStack space={4} px={2}>
          <Stack w="5/6">
            <HStack alignItems={"center"} space={2} mb={2}>
              <Text fontWeight="bold" fontSize="md" color={colors.secondary}>
                My Stay: Welcome to Klinik Pakar Kesihatan USIM
              </Text>
            </HStack>
            <Text>
              Get comprehensive information about your care team, safety,
              comfort, and the hospital discharge process
            </Text>
          </Stack>
          <TouchableOpacity>
            <HStack alignItems={"center"} space={2}>
              <Text color={colors.primary}>Read Our Inpatient Stay Guide</Text>
              <FontAwesome5
                name="share-square"
                size={15}
                color={colors.primary}
              />
            </HStack>
          </TouchableOpacity>
        </VStack>
      </Box>
      <VStack space={4}>
        <Text fontWeight="bold" fontSize="md" color={colors.secondary}>
          My Stay: Welcome to Klinik Pakar Kesihatan USIM
        </Text>
        <Text>
          At MyPiHUB USIM’s Klinik Pakar Kesihatan USIM, our doctors, nurses,
          and other medical professionals use a team approach to provide the
          highest level of care to people from New York City and around the
          world. We want our patients and their families to feel comfortable
          during their stay. We have received The Joint Commission’s Gold Seal
          of Approval® in recognition of our commitment to providing our
          patients with the highest quality care.
        </Text>
      </VStack>
    </VStack>
  );
};

const SimpleCard = ({ title, info }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <HStack alignItems={"center"} px={2} justifyContent="space-between">
        <Stack w="5/6">
          <HStack alignItems={"center"} space={2} mb={2}>
            <Text fontWeight="bold" fontSize="md" color={colors.dark}>
              {title}
            </Text>
          </HStack>
          <Text>{info}</Text>
        </Stack>
      </HStack>
    </Box>
  );
};

const HospitalCardSecond = ({}) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <VStack space={2} shadow="1" borderRadius="xl" p="3" my="2">
      <VStack space={2}>
        <HStack alignItems={"center"} space={2}>
          <FontAwesome5 name="map-marker-alt" size={16} />
          <Text>
            Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai,
            Negeri Sembilan, Malaysia
          </Text>
        </HStack>
        <HStack space={2} alignItems="center">
          <FontAwesome5 name="phone-alt" size={16} />
          <Text fontWeight="bold">+60126504921</Text>
        </HStack>
        <TouchableOpacity>
          <Text fontWeight="bold" color={colors.primary}>
            View All Contact Info
          </Text>
        </TouchableOpacity>
      </VStack>
      <Divider my={2} />
      <VStack space={2}>
        <Button row gradient={gradients.primary}>
          <Block
            row
            align="center"
            justify="center"
            paddingHorizontal={sizes.sm}
          >
            <MyText size={12} white bold transform="uppercase">
              View All Locations (2)
            </MyText>
          </Block>
        </Button>
      </VStack>
    </VStack>
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
