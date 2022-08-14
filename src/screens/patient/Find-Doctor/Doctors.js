import { FontAwesome5 } from "react-native-vector-icons";
import {
  Actionsheet,
  Button as NBButton,
  Center,
  Checkbox,
  HStack,
  Radio,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import React, { useCallback, useState } from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  Block,
  Button,
  Image,
  Screen,
  Text as MyText,
} from "../../../components";
import { useTheme } from "../../../hooks";
import DoctorCard from "./DoctorCard";
import DropDownPicker from "./DropDownPicker";

export default (props) => {
  const [region, setRegion] = useState({
    latitude: 3.139,
    longitude: 101.6869,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [data, setData] = useState([
    { key: "1", name: "all", amount: 501, selected: true },
    { key: "2", name: "Bangi", amount: 200, selected: false },
    { key: "3", name: "Kula", amount: 100, selected: false },
    { key: "4", name: "Penang", amount: 55, selected: false },
    { key: "5", name: "Nillie", amount: 100, selected: false },
  ]);
  const [selected, setSelected] = useState(1);

  const [tab, setTab] = useState(0);
  const handleProducts = useCallback(
    (tab) => {
      setTab(tab);
    },
    [setTab]
  );
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  const Toggle = () => (
    <Block
      row
      flex={0}
      align="center"
      justify="space-evenly"
      color={colors.card}
      paddingBottom={sizes.s}
      borderBottomWidth={1}
      borderColor={colors.overlay}
    >
      <Button onPress={() => handleProducts(0)}>
        <Block row align="center">
          <Block
            flex={0}
            radius={6}
            align="center"
            justify="center"
            marginRight={sizes.s}
            width={sizes.socialIconSize}
            height={sizes.socialIconSize}
            gradient={gradients?.[tab === 0 ? "primary" : "secondary"]}
          >
            <Image source={assets.extras} color={colors.white} radius={0} />
          </Block>
          <Text fontWeight={tab === 0 ? "bold" : "100"}>List</Text>
        </Block>
      </Button>

      <Block
        gray
        flex={0}
        width={1}
        marginHorizontal={sizes.sm}
        height={sizes.socialIconSize}
      />
      <Button onPress={() => handleProducts(1)}>
        <Block row align="center">
          <Block
            flex={0}
            radius={6}
            align="center"
            justify="center"
            marginRight={sizes.s}
            width={sizes.socialIconSize}
            height={sizes.socialIconSize}
            gradient={gradients?.[tab === 1 ? "primary" : "secondary"]}
          >
            <Image
              radius={0}
              color={colors.white}
              source={assets.documentation}
            />
          </Block>
          <Text fontWeight={tab === 1 ? "bold" : null}>Map</Text>
        </Block>
      </Button>
    </Block>
  );

  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <FilterSheet isOpen={showFilter} setIsOpen={setShowFilter} />

      <Screen style={styles.container}>
        <Stack>
          <Toggle />
        </Stack>
        {tab === 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[{ id: "1" }]}
            ListHeaderComponent={
              <HStack
                justifyContent={"space-between"}
                alignItems="center"
                my="2"
                mx="2"
              >
                <Text
                  w="54%"
                  fontWeight="bold"
                  color="gray.500"
                  flexWrap={"wrap"}
                >
                  5 Doctors Found for "Primary Care"
                </Text>
                <Button
                  style={{ alignSelf: "center", borderWidth: 1 }}
                  onPress={() => setShowFilter(true)}
                  row
                  color={"transfarent"}
                  width="44%"
                  shadow={0}
                >
                  <Block
                    row
                    align="center"
                    justify="center"
                    paddingHorizontal={sizes.sm}
                  >
                    <MyText
                      size={12}
                      primary
                      marginRight={10}
                      bold
                      transform="uppercase"
                    >
                      refine search
                    </MyText>
                    <FontAwesome5
                      name="filter"
                      size={15}
                      color={colors.primary}
                    />
                  </Block>
                </Button>
              </HStack>
            }
            renderItem={({ item }) => (
              <DoctorCard
                title="Klinik Pakar Kesihatan USIM"
                info="Klinik Pakar Kesihatan USIM provide outstanding healthcare services for people by using smart technological ICT solutions."
                address="Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan, Malaysia"
                phone="+60126504921"
              />
            )}
          />
        )}

        {tab === 1 && (
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
                latitude: 3.1391,
                longitude: 101.6868,
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
            <Marker
              pinColor="blue"
              coordinate={{
                latitude: 3.1393,
                longitude: 101.6864,
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
            <Marker
              pinColor="blue"
              coordinate={{
                latitude: 3.1352,
                longitude: 101.6866,
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
            <Marker
              pinColor="blue"
              coordinate={{
                latitude: 3.1289,
                longitude: 101.6861,
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
            <Marker
              pinColor="blue"
              coordinate={{
                latitude: 3.1499,
                longitude: 101.6869,
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
        )}
      </Screen>
    </>
  );
};

const FilterSheet = ({ isOpen = false, setIsOpen }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("one");
  const [groupValues, setGroupValues] = useState([]);
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const [selected, setSelected] = useState(false);

  // change these
  const [items, setItems] = useState([
    { label: "Primary Care", value: "Primacy Care" },
    { label: "Cardiology", value: "Cardiology" },
  ]);
  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Actionsheet.Content>
        <VStack>
          <ScrollView nestedScrollEnabled>
            <VStack space={3}>
              <Text>Filter by</Text>
              <DropDownPicker placeholder="Speciality" />
              <DropDownPicker placeholder="Condition" />
              <DropDownPicker placeholder="Gender" />
              <DropDownPicker placeholder="Language" />
              <VStack>
                <Text>Provider who Treat</Text>
                <Radio.Group
                  w="full"
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value}
                  onChange={(nextValue) => {
                    setValue(nextValue);
                  }}
                >
                  <Radio value="one" my={1}>
                    All Ages
                  </Radio>
                  <Radio value="two" my={1}>
                    Childred
                  </Radio>
                  <Radio value="three" my={1}>
                    Adults
                  </Radio>
                </Radio.Group>
              </VStack>
              <VStack>
                <Text>View Only</Text>
                <Checkbox.Group
                  onChange={setGroupValues}
                  value={groupValues}
                  accessibilityLabel="choose numbers"
                >
                  <Checkbox value="one" my={2}>
                    Providers With Online Scheduling
                  </Checkbox>
                  <Checkbox value="two">Primary Care Physicians</Checkbox>
                </Checkbox.Group>
              </VStack>
              <VStack mb="16">
                <Text>Sort By</Text>
                <HStack
                  alignItems={"center"}
                  justifyContent="center"
                  width={Dimensions.get("screen").width * 0.9}
                >
                  <NBButton
                    onPress={() => setSelected(true)}
                    borderRadius={0}
                    colorScheme={selected ? "teal" : "gray"}
                  >
                    Next Available
                  </NBButton>
                  <NBButton
                    onPress={() => setSelected(false)}
                    borderRadius={0}
                    colorScheme={!selected ? "teal" : "gray"}
                  >
                    Distance
                  </NBButton>
                </HStack>
              </VStack>
            </VStack>
          </ScrollView>
        </VStack>
        <VStack
          position="absolute"
          bottom={0}
          bgColor="white"
          py={2}
          w={"full"}
        >
          <HStack alignItems={"center"} space={2} px={2}>
            <NBButton
              onPress={() => setSelected(true)}
              borderRadius={0}
              colorScheme={"danger"}
              flex="1"
            >
              Clear
            </NBButton>
            <NBButton
              onPress={() => setSelected(false)}
              borderRadius={0}
              colorScheme={"teal"}
              flex="5"
            >
              See 778 Doctors
            </NBButton>
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  map: {
    flex: 1,
  },
});
