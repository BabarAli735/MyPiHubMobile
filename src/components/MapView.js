import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";


export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        scrollEnabled={false}
        showsMyLocationButton={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        zoomTapEnabled={true}
        initialRegion={{
          latitude: 3.1390,
          longitude: 101.6869,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          pinColor="blue"
          coordinate={{
            latitude: 3.1391,
            longitude: 101.6868,
          }}
        ></Marker>
        <Marker
          pinColor="blue"
          coordinate={{
            latitude: 3.1393,
            longitude: 101.6864,
          }}
        ></Marker>
        <Marker
          pinColor="blue"
          coordinate={{
            latitude: 3.1352,
            longitude: 101.6866,
          }}
        ></Marker>
        <Marker
          pinColor="blue"
          coordinate={{
            latitude: 3.1289,
            longitude: 101.6861,
          }}
        ></Marker>
        <Marker
          pinColor="blue"
          coordinate={{
            latitude: 3.1499,
            longitude: 101.6869,
          }}
        ></Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width - 60,
    height: Dimensions.get("window").height * 0.32,
    borderRadius: 15,
  },
});
