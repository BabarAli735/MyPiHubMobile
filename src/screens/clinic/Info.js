
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
  AddIcon,
  Box,
  Center,
  HStack,
  Icon,
  Modal,
  Stack,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Linking,
  StyleSheet,
  Text as RNText,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import QRCode from "react-native-qrcode-svg";
import { Button, Image, Screen, Text as MyText } from "../../components";
import BarCode from "../../components/BarCode";
import CoverImagePicker from "../../components/CoverImagePicker";
import { useTheme } from "../../hooks";
import { clinicInfoState } from "../../store";
import FormForReUse from "../FormForReUse";
import AddDoctorModal from "./DashboardComponents/AddDoctorModal";
import AddInsurencesModal from "./DashboardComponents/AddInsurencesModal";
import AddLocationModal from "./DashboardComponents/AddLocationModal";
import AddNameModal from "./DashboardComponents/AddNameModal";
import AddPatientServiceModal from "./DashboardComponents/AddPatientServiceModal";
import AddServiceModal from "./DashboardComponents/AddServiceModal";
import AddTreatmentModal from "./DashboardComponents/AddTreatmentModal";
import ToggleButton from "./ToggleButton/ToggleButton";

export default () => {
  const [clinic, setClinic] = clinicInfoState.use();
  const [region, setRegion] = useState({
    latitude: 3.139,
    longitude: 101.6869,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const { gradients } = useTheme();
  const [useOurSystem, setUseOurSystem] = useState(false);

  const [show, setShow] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);

  const [showTreatment, setShowTreatment] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showInsurence, setShowInsurence] = useState(false);

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
            <HStack
              my={2}
              alignItems={"center"}
              justifyContent="space-between"
              px={2}
            >
              <Text color="gray.500" fontWeight="bold" fontSize={"lg"} w="70%">
                {clinic.name}
              </Text>
              <Button
                onPress={() => setShowName(true)}
                style={{ width: 2 }}
                row
                minHeight={40}
                gradient={gradients.primary}
              >
                <Icon as={FontAwesome5} name="edit" size="xs" color="white" />
              </Button>
            </HStack>
            <VStack my={2}>
              <CoverImagePicker
                image={clinic.cover}
                onChange={(image) => setClinic({ ...clinic, cover: image })}
                style={{
                  width: "100%",
                  height: 250,
                }}
              />
            </VStack>

            <HStack
              my={2}
              alignItems={"center"}
              justifyContent="space-between"
              px={2}
            >
              <Text
                textAlign={"center"}
                color="gray.500"
                fontWeight="bold"
                fontSize={"xl"}
              >
                Doctors
              </Text>
              <Button
                onPress={() => setShowService(true)}
                style={{ width: 2 }}
                row
                minHeight={40}
                gradient={gradients.primary}
              >
                <AddIcon size="xs" color="white" />
              </Button>
            </HStack>
            <Doctors />

            <HStack
              my={2}
              alignItems={"center"}
              justifyContent="space-between"
              px={2}
            >
              <Text
                textAlign={"center"}
                color="gray.500"
                fontWeight="bold"
                fontSize={"xl"}
              >
                Services
              </Text>
              <Button
                onPress={() => setShowService(true)}
                style={{ width: 2 }}
                row
                minHeight={40}
                gradient={gradients.primary}
              >
                <AddIcon size="xs" color="white" />
              </Button>
            </HStack>
            <Service />

            <HStack
              my={2}
              alignItems={"center"}
              justifyContent="space-between"
              px={2}
            >
              <Text
                textAlign={"center"}
                color="gray.500"
                fontWeight="bold"
                fontSize={"xl"}
              >
                Insurences
              </Text>
              <Button
                onPress={() => setShowInsurence(true)}
                style={{ width: 2 }}
                row
                minHeight={40}
                gradient={gradients.primary}
              >
                <AddIcon size="xs" color="white" />
              </Button>
            </HStack>
            <Insurences />

            <HStack
              my={2}
              alignItems={"center"}
              justifyContent="space-between"
              px={2}
            >
              <Text
                textAlign={"center"}
                color="gray.500"
                fontWeight="bold"
                fontSize={"xl"}
              >
                Patient and Family Support
              </Text>
              <Button
                onPress={() => setShowService(true)}
                style={{ width: 2 }}
                row
                minHeight={40}
                gradient={gradients.primary}
              >
                <AddIcon size="xs" color="white" />
              </Button>
            </HStack>
            <Family />

            <HStack
              my={2}
              alignItems={"center"}
              justifyContent="space-between"
              px={2}
            >
              <Text
                textAlign={"center"}
                color="gray.500"
                fontWeight="bold"
                fontSize={"xl"}
              >
                Our Locations
              </Text>
              <Button
                onPress={() => setShowLocation(true)}
                style={{ width: 80 }}
                row
                gradient={gradients.primary}
              >
                <MyText size={12} white bold transform="uppercase">
                  Update
                </MyText>
              </Button>
            </HStack>
            <Location region={region} setRegion={setRegion} />

            <HStack
              my={2}
              alignItems={"center"}
              justifyContent="space-between"
              px={2}
            >
              <Text
                textAlign={"center"}
                color="gray.500"
                fontWeight="bold"
                fontSize={"xl"}
              >
                Treatments
              </Text>
              <Button
                onPress={() => setShowService(true)}
                style={{ width: 2 }}
                row
                minHeight={40}
                gradient={gradients.primary}
              >
                <AddIcon size="xs" color="white" />
              </Button>
            </HStack>
            <Treatment />

            <HStack
              my={2}
              alignItems={"center"}
              justifyContent="space-between"
              px={2}
            >
              <Text
                textAlign={"center"}
                color="gray.500"
                fontWeight="bold"
                fontSize={"xl"}
              >
                For Our Patients
              </Text>
              <Button
                onPress={() => setShowService(true)}
                style={{ width: 2 }}
                row
                minHeight={40}
                gradient={gradients.primary}
              >
                <AddIcon size="xs" color="white" />
              </Button>
            </HStack>
            <OurPatients />

            <ToggleButton setTab={setTab} tab={tab} />
            <Tab />
            <VStack space={2} px={2} my={2}>
              <Text
                textAlign={"center"}
                color="gray.500"
                fontWeight="bold"
                fontSize={"xl"}
              >
                Want to use our MyPiHUB Clinic System?
              </Text>
              <HStack space={4} alignItems={"center"} justifyContent="center">
                <Button
                  onPress={() => Linking.openURL("https://www.google.com")}
                  style={{ width: 80 }}
                  row
                  gradient={gradients.primary}
                >
                  <MyText size={12} white bold transform="uppercase">
                    Yes
                  </MyText>
                </Button>
                <Button
                  onPress={() => setUseOurSystem(true)}
                  style={{ width: 80 }}
                  row
                  gradient={gradients.primary}
                >
                  <MyText size={12} white bold transform="uppercase">
                    No
                  </MyText>
                </Button>
              </HStack>
            </VStack>
            {useOurSystem ? <FormForReUse /> : null}
          </Stack>
        }
      />
      <Modal isOpen={showInsurence} onClose={() => setShowInsurence(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <AddInsurencesModal show={showInsurence} setShow={setShowInsurence} />
        </Center>
      </Modal>
      <Modal isOpen={showName} onClose={() => setShowName(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <AddNameModal show={showName} setShow={setShowName} />
        </Center>
      </Modal>
      <Modal isOpen={showDoctor} onClose={() => setShowDoctor(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <AddDoctorModal show={showDoctor} setShow={setShowDoctor} />
        </Center>
      </Modal>
      <Modal isOpen={showService} onClose={() => setShowService(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <AddServiceModal show={showService} setShow={setShowService} />
        </Center>
      </Modal>
      <Modal isOpen={showTreatment} onClose={() => setShowTreatment(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <AddTreatmentModal show={showTreatment} setShow={setShowTreatment} />
        </Center>
      </Modal>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <AddPatientServiceModal show={show} setShow={setShow} />
        </Center>
      </Modal>
      <Modal isOpen={showLocation} onClose={() => setShowLocation(false)}>
        <Center bgColor={"white"} my={4} rounded="md">
          <AddLocationModal show={showLocation} setShow={setShowLocation} />
        </Center>
      </Modal>
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
                Klinik Pakar Kesihatan USIM
              </RNText>
            </HStack>
            <HStack space={2} alignItems="center">
              <Text>Location:</Text>
              <RNText
                style={{
                  width: Dimensions.get("screen").width * 0.24,
                  borderBottomWidth: 0.5,
                  textAlign: "center",
                }}
              >
                Nilai, 50051
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
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Scan for full medical details
          </Text>
          <Text
            style={{
              marginVertical: 5,
            }}
          >
            inc. medications
          </Text>
          <QRCode value={qrCode ? qrCode : "empty"} />
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
        }}
      >
        To scan QR code download the Free Scan App
      </Text>
    </VStack>
  );
};

const OurPatients = ({}) => {
  const { patientServices } = clinicInfoState.useValue();
  return (
    <VStack px={2} space={2} my="2">
      {patientServices.length
        ? patientServices.map((service, key) => (
            <SimpleCollapseCard
              key={"service" + key}
              type="visit"
              title={service.title}
              info={service.describe}
              link={service.link}
            />
          ))
        : null}
    </VStack>
  );
};

const SimpleCollapseCard = ({ type, link, title, info }) => {
  const { colors } = useTheme();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack px={2} space={2} my="2">
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
        </HStack>

        <VStack space={2}>
          <Text>{info}</Text>
          {link ? (
            <TouchableOpacity>
              <Text fontWeight="bold" color={colors.primary}>
                {link}
              </Text>
            </TouchableOpacity>
          ) : null}
        </VStack>
      </VStack>
    </Box>
  );
};

const Treatment = () => {
  const { treatments } = clinicInfoState.useValue();

  return treatments.length ? (
    <Box shadow="1" borderRadius="lg" p="3" my="2">
      <HStack alignItems="center" space={10} flexWrap="wrap">
        {treatments.map((treatment, index) => (
          <Text key={"treat-" + index} fontSize={"md"}>
            {treatment}
          </Text>
        ))}
      </HStack>
    </Box>
  ) : null;
};

const Location = ({ show, setShow }) => {
  const { location } = clinicInfoState.useValue();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <VStack px={2} space={2} my="2">
        <TouchableOpacity onPress={() => setShow(!show)}>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <VStack space={2}>
              <Text fontWeight="bold" fontSize={"md"}>
                {location.address ? location.address : "not added yet"}
              </Text>
              <HStack space={1}>
                <Text>Full Address:</Text>
                <Text fontWeight="bold">
                  {location.fullAddress
                    ? location.fullAddress
                    : "not added yet"}
                </Text>
              </HStack>
              <HStack space={1}>
                <Text>Phone:</Text>
                <Text fontWeight="bold">
                  {location.phone ? location.phone : "not added yet"}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </TouchableOpacity>

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
                  <FontAwesome5 name="map-marker-alt" size={15} color="blue" />
                </Center>
              </Marker>
            </MapView>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

const Family = () => {
  const { patientSupports } = clinicInfoState.useValue();

  return (
    <Box shadow="1" borderRadius="xl" p="3" my="2">
      <Text fontWeight="bold" fontSize="md" mt={2} mb={4}>
        Patient Support Services
      </Text>
      {patientSupports.map((support) => (
        <TouchableOpacity>
          <HStack
            alignItems={"center"}
            borderBottomWidth="1"
            borderBottomColor="gray.300"
            justifyContent="space-between"
            pb={2}
            mb={3}
          >
            <Text>{support}</Text>
            <Stack>
              <MaterialIcons name="keyboard-arrow-right" size={25} />
            </Stack>
          </HStack>
        </TouchableOpacity>
      ))}
    </Box>
  );
};

const Insurences = () => {
  const { colors } = useTheme();
  const { insurences } = clinicInfoState.useValue();

  return (
    <VStack space={2} my="2">
      {insurences.length
        ? insurences.map((insurences, key) => (
            <Box
              key={"insurences-" + key}
              shadow="1"
              borderTopColor={"rose.300"}
              borderTopWidth="8"
              borderRadius="xl"
              p="3"
              my="2"
            >
              <VStack space={4} px={2}>
                <Stack w="5/6">
                  <HStack alignItems={"center"} space={2} mb={2}>
                    <Text
                      fontWeight="bold"
                      fontSize="md"
                      color={colors.secondary}
                    >
                      {insurences.title}
                    </Text>
                  </HStack>
                  <Text>{insurences.describe}</Text>
                </Stack>
              </VStack>
            </Box>
          ))
        : null}
    </VStack>
  );
};

const Service = () => {
  const { colors } = useTheme();
  const { services } = clinicInfoState.useValue();

  return (
    <VStack space={2} my="2">
      {services.length
        ? services.map((service, key) => (
            <Box
              key={"service-" + key}
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
                    <Text
                      fontWeight="bold"
                      fontSize="md"
                      color={colors.secondary}
                    >
                      {service.title}
                    </Text>
                  </HStack>
                  <Text>{service.describe}</Text>
                </Stack>
                {/* <TouchableOpacity>
            <HStack alignItems={"center"} space={2}>
              <Text color={colors.primary}>Read Our Inpatient Stay Guide</Text>
              <FontAwesome5
                name="share-square"
                size={15}
                color={colors.primary}
              />
            </HStack>
          </TouchableOpacity> */}
              </VStack>
            </Box>
          ))
        : null}
    </VStack>
  );
};

const Doctors = () => {
  const { colors, gradients, sizes } = useTheme();
  const { doctors } = clinicInfoState.useValue();

  return (
    <VStack space={2} my="2">
      <FlatList
        data={doctors}
        keyExtractor={(_, i) => `${i}`}
        horizontal
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => (
          <Stack
            space={2}
            alignItems={"center"}
            justifyContent={"center"}
            w="32"
          >
            <Center
              borderWidth={0.5}
              borderRadius={"full"}
              h="20"
              w="20"
              overflow={"hidden"}
            >
              {item.image ? (
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <FontAwesome5 name="camera" size={20} color="gray" />
              )}
            </Center>
            <HStack alignItems={"center"} space={2}>
              <Text fontWeight="bold" fontSize="md" color={colors.secondary}>
                {item.name}
              </Text>
            </HStack>
            <VStack w="3/4">
              <Button minHeight={30} row gradient={gradients.primary}>
                <MyText size={10} white bold transform="uppercase">
                  View Profile
                </MyText>
              </Button>
            </VStack>
          </Stack>
        )}
      />
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
