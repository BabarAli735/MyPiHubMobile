import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from 'react-native-vector-icons'
import {
  Box,
  Center,
  Divider,
  HStack,
  Icon,
  Image as NImage,
  Stack,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text as RNText,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import QRCode from "react-native-qrcode-svg";
import { Block, Button, Screen, Text as MyText } from "../../components";
import BarCode from "../../components/BarCode";
import { useTheme } from "../../hooks";
import ToggleButton from "./ToggleButton/ToggleButton";

export default () => {
  const [tab, setTab] = useState(0);
  const [scanData, setScanData] = useState(null);

  const Tab =
    tab === 0
      ? () => <IdCard qrCode={scanData} />
      : () => (
          <View style={{ height: Dimensions.get("screen").height * 0.9 }}>
            <BarCode
              onScan={(data) => {
                setScanData(data);
                setTab(0);
              }}
            />
          </View>
        );

  return (
    <Screen style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Stack>
            <ToggleButton setTab={setTab} tab={tab} />
            <Tab />
            <ProfileCard />

            <AboutMe />
            <Credentials />
            <InsurancePlansAccepted />
            <LocationsAndAppointments />
            <Publications />
          </Stack>
        }
      />
    </Screen>
  );
};

const IdCard = ({ qrCode }) => {
  return (
    <VStack bgColor="white" borderWidth={1} rounded="lg" p={2} my={2}>
      <HStack alignItems={"center"} space={2}>
        <Icon as={AntDesign} name="idcard" size="2xl" />
        <Text fontWeight={"bold"} fontSize="xl">
          MyPiHUB Card
        </Text>
      </HStack>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <View
          style={{
            textAlign: "center",
            justifyContent: "center",
            width: Dimensions.get("screen").width * 0.54,
          }}
        >
          <VStack space={3}>
            <HStack space={2} alignItems="center">
              <Text>Name:</Text>
              <RNText
                style={{
                  width: Dimensions.get("screen").width * 0.32,
                  borderBottomWidth: 0.5,
                  textAlign: "center",
                }}
              >
                DR. Shamsir
              </RNText>
            </HStack>
            <HStack space={2} alignItems="center">
              <Text>NIC</Text>
              <RNText
                style={{
                  width: Dimensions.get("screen").width * 0.24,
                  borderBottomWidth: 0.5,
                  textAlign: "center",
                }}
              >
                8957634343
              </RNText>
            </HStack>
            <HStack space={2} alignItems="center">
              <Text>Contact no:</Text>
              <RNText
                style={{
                  width: Dimensions.get("screen").width * 0.3,
                  borderBottomWidth: 0.5,
                  textAlign: "center",
                }}
              >
                07885419255
              </RNText>
            </HStack>
            <HStack space={1} alignItems="center">
              <Text>Condition/s:</Text>
              <RNText
                style={{
                  width: Dimensions.get("screen").width * 0.3,
                  borderBottomWidth: 0.5,
                  textAlign: "center",
                }}
              >
                Dementia{` & `} Chronic narcolepsy
              </RNText>
            </HStack>
          </VStack>
        </View>

        <View
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: Dimensions.get("screen").width * 0.35,
          }}
        >
          <RNText
            style={{
              textAlign: "center",
            }}
          >
            Scan for full medical details
          </RNText>
          <RNText
            style={{
              marginVertical: 5,
            }}
          >
            inc. medications
          </RNText>
          <QRCode value={qrCode ? qrCode : "empty"} />
        </View>
      </View>
      <RNText
        style={{
          textAlign: "center",
        }}
      >
        To scan QR code download the Free Scan App
      </RNText>
    </VStack>
  );
};

const AboutMe = () => {
  const [show, setShow] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack space={2} my="2">
        <TouchableOpacity onPress={() => setShow(!show)}>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <VStack>
              <Text fontWeight="bold" fontSize={"md"}>
                About Me
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
          <VStack space={2}>
            <VStack space={2} my={2}>
              <VStack space={1}>
                <Text fontWeight="bold">Conditions and Treatments</Text>
              </VStack>
              <VStack>
                <Box border="1" borderRadius="md">
                  <VStack
                    space="4"
                    divider={<Divider bgColor={colors.primary} />}
                  >
                    <Box px="4" pt="4">
                      <Text fontWeight={"bold"}>For Adults</Text>
                    </Box>
                    <Box px="4" h={viewAll ? null : "100px"} overflow="hidden">
                      <Text fontWeight={"bold"}>Treatments</Text>
                      <Text>Adhesiolysis</Text>
                      <Text>Cervical Biopsy</Text>
                      <Text>Colposcopy</Text>
                      <Text>Dilation and Curettage</Text>
                      <Text fontWeight={"bold"}>Treatments</Text>
                      <Text>thyroid surgery</Text>
                      <Text>Addison's disease</Text>
                      <Text>adrenal insufficiency</Text>
                      <Text>calcium disorder</Text>
                    </Box>
                    <Box px="4" pb="4" alignSelf={"center"}>
                      <TouchableOpacity onPress={() => setViewAll(!viewAll)}>
                        <Text fontWeight="bold" color={colors.primary}>
                          {viewAll
                            ? "View Fewer Conditions and Treatments"
                            : " View All Conditions and Treatments"}
                        </Text>
                      </TouchableOpacity>
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
            <VStack px={2} space={2}>
              <Text>Learn more about conditions we treat at NYU </Text>
              <TouchableOpacity onPress={() => setViewAll(!viewAll)}>
                <Text fontWeight="bold" color={colors.primary}>
                  Adrenal Tumors
                </Text>
              </TouchableOpacity>
            </VStack>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const Credentials = () => {
  const [show, setShow] = useState(false);
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack px={2} space={2} my="2">
        <TouchableOpacity onPress={() => setShow(!show)}>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <VStack>
              <Text fontWeight="bold" fontSize={"md"}>
                Credentials
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
          <VStack space={2}>
            <VStack space={2} my={2}>
              <VStack space={1}>
                <Text fontWeight="bold">Qaulifications</Text>
                <VStack space={1}>
                  <Text>B.Med.Sc MD (UKM) </Text>
                  <TouchableOpacity>
                    <Text fontWeight="bold" color={colors.primary}>
                      MMED (O&G)(UKM)
                    </Text>
                  </TouchableOpacity>
                </VStack>
              </VStack>
              <VStack space={1}>
                <Text fontWeight="bold">
                  Fellowship in Reproductive Medicine (UKM)
                </Text>
                <Text>Fellowship in Reproductive Medicine (UKM)</Text>
              </VStack>
              <HStack justifyContent="flex-end" space={2} mt={2}>
                <Text>is this your profile?</Text>
                <TouchableOpacity>
                  <Text fontWeight="bold" color={colors.primary}>
                    Edit profile
                  </Text>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const SimpleCollapseCard = ({ title, items }) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const [show, setShow] = useState(false);

  return (
    <VStack space={2} my="1">
      <TouchableOpacity onPress={() => setShow(!show)}>
        <HStack alignItems="center" space={2}>
          <HStack alignItems={"center"} space={2}>
            <Text fontWeight="bold" fontSize={"md"}>
              {title}
            </Text>
          </HStack>
          <MaterialIcons
            name={show ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={20}
            color="black"
          />
        </HStack>
      </TouchableOpacity>

      {show && (
        <VStack ml={2} space={1}>
          {items.map((item, i) => (
            <Text key={"" + i}>{item}</Text>
          ))}
        </VStack>
      )}
    </VStack>
  );
};

const InsurancePlansAccepted = () => {
  const [show, setShow] = useState(false);
  const [viewAll, setViewAll] = useState(false);

  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack px={2} space={2} my="2">
        <TouchableOpacity onPress={() => setShow(!show)}>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <VStack>
              <Text fontWeight="bold" fontSize={"md"}>
                Insurance Plans Accepted
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
          <VStack space={2}>
            <VStack space={2} my={2}>
              <VStack space={1}>
                <Text fontWeight="bold">
                  This provider accepts the following insurance plans.
                </Text>
              </VStack>

              <VStack>
                <Box border="1" borderRadius="md">
                  <VStack space="4">
                    <Box px="4" h={viewAll ? null : "100px"} overflow="hidden">
                      <SimpleCollapseCard
                        title="AXA eMedic Plus"
                        items={[
                          "Aetna HMO",
                          "Aetna Indemnity",
                          "Aetna International",
                        ]}
                      />
                      <SimpleCollapseCard
                        title="Allianz Diabetic Essential Plan "
                        items={[
                          "Oxford Health Plans Freedom",
                          "Oxford Health Plans Liberty",
                        ]}
                      />
                      <SimpleCollapseCard
                        title="AIA Medical Insurance"
                        items={[
                          "Aetna HMO",
                          "Aetna Indemnity",
                          "Aetna International",
                        ]}
                      />
                      <SimpleCollapseCard
                        title="AmMetLife Medical Insurance "
                        items={[
                          "Oxford Health Plans Freedom",
                          "Oxford Health Plans Liberty",
                        ]}
                      />
                      <SimpleCollapseCard
                        title="Manulife Medical Insurance"
                        items={[
                          "Aetna HMO",
                          "Aetna Indemnity",
                          "Aetna International",
                        ]}
                      />
                      <SimpleCollapseCard
                        title="Zurich Medical Insurance "
                        items={[
                          "Oxford Health Plans Freedom",
                          "Oxford Health Plans Liberty",
                        ]}
                      />
                    </Box>
                    <Box px="4" pb="4" alignSelf={"center"}>
                      <TouchableOpacity onPress={() => setViewAll(!viewAll)}>
                        <Text fontWeight="bold" color={colors.primary}>
                          {viewAll
                            ? "View Fewer Accepted Plans"
                            : " View All Accepted Plans"}
                        </Text>
                      </TouchableOpacity>
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
            <Divider bgColor={"black"} />
            <Text>
              This list of insurances changes regularly, and insurance plans
              listed may not be accepted at all office locations for this
              provider. Before your appointment, please confirm with your
              insurance company that this provider accepts your insurance.
            </Text>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const LocationsAndAppointments = () => {
  const [show, setShow] = useState(false);
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack px={2} space={2} my="2">
        <TouchableOpacity onPress={() => setShow(!show)}>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <VStack>
              <Text fontWeight="bold" fontSize={"md"}>
                Locations and Appointments
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
          <VStack space={2}>
            <VStack space={2} my={2}>
              <VStack space={1}>
                <Text fontWeight="bold">USIM Kilinic</Text>
                <Text>
                  Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800
                  Nilai, Negeri Sembilan, Malaysia
                </Text>
              </VStack>
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
                    latitude: 3.139,
                    longitude: 101.6869,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                >
                  <Marker
                    key={"none-scroll-marker"}
                    pinColor="blue"
                    coordinate={{
                      latitude: 3.1391,
                      longitude: 101.6868,
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
              <HStack space={1}>
                <Text>Fax:</Text>
                <Text fontWeight="bold">212-263-5940</Text>
              </HStack>
              <Button row gradient={gradients.primary}>
                <Block
                  row
                  align="center"
                  justify="center"
                  paddingHorizontal={sizes.sm}
                >
                  <MyText size={12} white bold transform="uppercase">
                    Schedule An Office Visit
                  </MyText>
                </Block>
              </Button>
            </VStack>
            <Divider bgColor={"black"} />
            <VStack space={2} my={2}>
              <VStack space={1}>
                <Text fontWeight="bold">
                  Joan H. USIM Center for Women's Health
                </Text>
                <Text>207 East 84th Street, New York, NY 10028</Text>
              </VStack>
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
                    latitude: 3.139,
                    longitude: 101.6869,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                >
                  <Marker
                    key={"none-scroll-marker"}
                    pinColor="blue"
                    coordinate={{
                      latitude: 3.1391,
                      longitude: 101.6868,
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
              <HStack space={1}>
                <Text>Fax:</Text>
                <Text fontWeight="bold">212-263-5940</Text>
              </HStack>
              <Button row gradient={gradients.primary}>
                <Block
                  row
                  align="center"
                  justify="center"
                  paddingHorizontal={sizes.sm}
                >
                  <MyText size={12} white bold transform="uppercase">
                    Schedule An Office Visit
                  </MyText>
                </Block>
              </Button>
            </VStack>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const Publications = () => {
  const [show, setShow] = useState(false);
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack px={2} space={2} my="2">
        <TouchableOpacity onPress={() => setShow(!show)}>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <VStack>
              <Text fontWeight="bold" fontSize={"md"}>
                Publications
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
          <VStack space={2} divider={<Divider bgColor={"black"} />}>
            <VStack space={2} my={2}>
              <VStack space={1}>
                <Text fontWeight="bold">
                  Correlation Of Hemoglobin A 1C And Outcomes In Patients
                  Hospitalized With COVID-19
                </Text>
                <Text color="gray.500">
                  Patel, Amy J; Klek, Stanislaw P; Peragallo-Dittko, Virginia;
                  Goldstein, Michael; Burdge, Eric; Nadile, Victoria; Ramadhar,
                  Julia; Islam, Shahidul; Rothberger, Gary D
                </Text>
                <Text color="gray.400">
                  Endocrine Practice. 2021 Oct ; 27(10):1046-1051
                </Text>
              </VStack>
            </VStack>

            <VStack space={2} my={2}>
              <VStack space={1}>
                <Text fontWeight="bold">
                  Transgender Men, Pregnancy, And The "New" Advanced Paternal
                  Age: A Review Of The Literature
                </Text>
                <Text color="gray.500">
                  Brandt, Justin S; Patel, Amy J; Marshall, Ian; Bachmann,
                  Gloria A
                </Text>
                <Text color="gray.400">Maturitas. 2019 Oct ; 128:17-21</Text>
              </VStack>
            </VStack>
            <TouchableOpacity onPress={() => setViewAll(!viewAll)}>
              <Text fontWeight="bold" color={colors.primary}>
                Read All Publications (3)
              </Text>
            </TouchableOpacity>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const ProfileCard = ({}) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <VStack space={2} p="2" mb="2">
      <VStack space={2}>
        <NImage
          source={assets.doctor}
          height="250px"
          alt="doctor"
          alignSelf={"center"}
          resizeMode="cover"
        />
        <Text textAlign={"center"} fontSize="md" fontWeight={"bold"}>
          Prof. Dr. Muhammad Shamsir Bin Mohd Aris
        </Text>

        <Center
          w="1/2"
          alignSelf={"center"}
          rounded="full"
          shadow={"1"}
          bgColor="gray.100"
          alignItems={"center"}
          justifyContent="space-between"
          space={2}
        >
          <HStack space={2} alignItems={"center"}>
            <MaterialCommunityIcons
              name="checkbox-multiple-marked-circle"
              size={16}
            />

            <Text fontWeight={"bold"}>MyPiHUB Provider</Text>
          </HStack>
        </Center>
        <HStack alignItems={"center"} space={2}>
          <Text fontWeight={"bold"}>Specialty:</Text>

          <Text> Obstetrics and Gynaecology</Text>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <Text fontWeight={"bold"}>Treats:</Text>

          <Text> Visiting Consultant</Text>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <Text fontWeight={"bold"}>Language:</Text>

          <Text> English, Malay</Text>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <Text fontWeight={"bold"}>Phone:</Text>

          <Text> +606-8500 999</Text>
        </HStack>
        <Button
          row
          gradient={gradients.primary}
          style={{ marginVertical: sizes.s }}
        >
          <Block
            row
            align="center"
            justify="center"
            paddingHorizontal={sizes.sm}
          >
            <MyText size={12} white bold transform="uppercase">
              Schedule An Appointment
            </MyText>
          </Block>
        </Button>
        <Center>
          <Social />
        </Center>
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
