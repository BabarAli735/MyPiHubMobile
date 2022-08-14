import { FontAwesome5 } from "react-native-vector-icons";
import { Box, Center, Stack, Text } from "native-base";
import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { Block, Button, Image, Screen } from "../../../components";
import { useTheme } from "../../../hooks";
import HospitalCard from "./HospitalCard";

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
  const { assets, colors, gradients, sizes } = useTheme();

  const Toggle = ({ borderTop = true, borderBottom = true }) => (
    <Block
      row
      flex={0}
      align="center"
      justify="space-evenly"
      color={colors.card}
      paddingBottom={sizes.s}
      borderBottomWidth={borderBottom ? 1 : null}
      borderTopWidth={borderTop ? 1 : null}
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

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(item.key);
        }}
      >
        <Box
          mx="2"
          borderBottomWidth={item.key == selected ? "2" : null}
          borderBottomColor="gray.400"
        >
          <Text>
            {`(${item.amount}) `}
            {item.name}
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };
  return (
    <Screen style={styles.container}>
      {tab === 1 && <Toggle borderTop={false} />}
      {tab === 0 && (
        <FlatList
          style={{ paddingHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
          data={[{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]}
          ListHeaderComponent={
            <Stack>
              <Box borderBottomWidth={"2"} pb="2" borderColor="gray.200">
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={data}
                  renderItem={renderItem}
                />
              </Box>
              <Box mx="2" my={2}>
                <Text fontWeight="bold" fontSize="lg">
                  Location Directory
                </Text>
                <Text>
                  We maintain the highest standards of quality and safety at
                  hundreds of MyPatientHUB locations throughout the city. Browse
                  our full list of locations or filter by region and
                  neighborhood to find care close to you.
                </Text>
              </Box>
              <Toggle />
              <Box mx="2" my={2}>
                <Text fontWeight="bold" color="gray.500">
                  {data.filter((d) => d.key == selected)[0].amount} Locations
                </Text>
              </Box>
            </Stack>
          }
          renderItem={({ item }) => (
            <HospitalCard
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
              latitude: 31.614566,
              longitude: 65.716224,
            }}
          >
            <Center p="3" borderRadius={"full"} bgColor="rgba(160,180,255,.7)">
              <FontAwesome5 name="map-marker-alt" size={15} color="blue" />
            </Center>
          </Marker>
        </MapView>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // paddingHorizontal: 10,
    paddingTop: 10,
  },
  map: {
    flex: 1,
  },
});
