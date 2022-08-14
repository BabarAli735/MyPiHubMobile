import Entypo from "react-native-vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient  from "react-native-linear-gradient";
import { Center, HStack, Text as NBText } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Messages from "../../components/chats/Messages";
import Profiles from "../../components/chats/Profiles";
import { ASSETS } from "../../constants/theme";
import { useTheme } from "../../hooks";

const users = [
  { id: "1", username: "PROF DR. SHAMSIR ", uri: ASSETS.doctor },
  { id: "2", username: "PROF. DR KHAIRULLAH ", uri: ASSETS.doctor2 },
  { id: "3", username: "Dr. Radzniwan", uri: ASSETS.doctor3 },
];

const Chat = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const pan = useRef(new Animated.ValueXY()).current;
  const list = useRef(new Animated.ValueXY()).current;

  useEffect(function () {
    setData(users);
  }, []);

  console.log(data.login);

  const { gradients } = useTheme();

  return (
    <LinearGradient colors={gradients.primary} style={styles.gradient}>
      <HStack justifyContent={"space-between"} alignItems={"center"} space={2}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Center p="0.5" bgColor={"rgba(1,1,1,.4)"} borderRadius="full">
            <Icon name="keyboard-arrow-left" color="white" size={25} />
          </Center>
        </TouchableOpacity>

        <Icon name="add" color="#fff" size={30} />
      </HStack>
      <ScrollView
        horizontal
        style={styles.proContainer}
        showsHorizontalScrollIndicator={false}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Animated.View style={[styles.card]}>
            {data.map((item, index) => (
              <Profiles key={item.id} username={item.username} uri={item.uri} />
            ))}
          </Animated.View>
        )}
      </ScrollView>
      <View style={styles.ops}>
        <View style={styles.col}>
          <Text style={styles.day}>Sunday</Text>
          <Entypo name="dots-three-horizontal" color="#000119" size={30} />
        </View>
        <ScrollView>
          {loading ? (
            <ActivityIndicator size="large" color="#f20042" />
          ) : (
            <Animated.View style={[styles.list]}>
              {data.map((item, index) => (
                <Messages
                  key={item.id}
                  username={item.username}
                  uri={item.uri}
                  count={Math.floor(Math.random() * 3)}
                  onPress={() => {
                    props.navigation.navigate("Discussion", {
                      itemId: item.id,
                      itemName: item.username,
                      itemPic: item.uri,
                    });
                  }}
                />
              ))}
            </Animated.View>
          )}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};
export default Chat;

const styles = StyleSheet.create({
  list: {},
  card: {
    flexDirection: "row",
    width: Dimensions.get("screen").width * 0.9,
  },
  gradient: {
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    color: "#FFF",
    flex: 1,
    fontSize: 24,
  },
  proContainer: {
    marginRight: -20,
    alignSelf: "center",
  },
  ops: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: Dimensions.get("screen").height * 0.75,
    backgroundColor: "#FFF",
    marginHorizontal: -20,
  },
  col: {
    flexDirection: "row",
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  day: {
    color: "#000119",
    flex: 1,
    fontSize: 20,
  },
});
