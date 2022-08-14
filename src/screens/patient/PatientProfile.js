import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
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
import FormForReUse from "../FormForReUse";
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
            <FormForReUse />
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
              <Text>Name</Text>
              <RNText
                style={{
                  width: Dimensions.get("screen").width * 0.32,
                  borderBottomWidth: 0.5,
                  textAlign: "center",
                }}
              >
                Azam Shah
              </RNText>
            </HStack>
            <HStack space={2} alignItems="center">
              <Text>NIC:</Text>
              <RNText
                style={{
                  width: Dimensions.get("screen").width * 0.24,
                  borderBottomWidth: 0.5,
                  textAlign: "center",
                }}
              >
                778564556
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
