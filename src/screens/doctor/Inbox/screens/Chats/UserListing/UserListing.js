import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";
import { images } from "../../../images";
import { styles } from "./UserListing.styles";

const Data = [
  {
    id: 1,
    name: "Ibrahim",
    image: images.people2,
    lastMessage: "You: OK will visit at · 9:40 AM ",
  },
  {
    id: 2,
    name: "Khairullah",
    image: images.people2,
    lastMessage: "You: You have cold · 9:25 AM ",
  },
  {
    id: 3,
    name: "Malik",
    image: images.people2,
    lastMessage: "You: Ok, See you in To… · Fri",
  },
  {
    id: 4,
    name: "Azam Shah",
    image: images.people2,
    lastMessage: "Have a good day, Affan! · Fri",
  },
];

const UserListing = () => {
  const { navigate } = useNavigation();
  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <View style={styles.itemRowWrapper}>
        <Image style={styles.itemRowIcon} source={images.camera} />
        <Image style={styles.itemRowIcon} source={images.call} />
        <Image style={styles.itemRowIcon} source={images.video_call} />
      </View>
      <View style={styles.itemRowWrapper}>
        <Image
          style={styles.itemRowIcon}
          source={images.converation_settings}
        />
        <Image style={styles.itemRowIcon} source={images.notifications} />
        <Image style={styles.itemRowIcon} source={images.delete_conversation} />
      </View>
    </View>
  );

  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigate("DoctorChat")}>
        <View style={styles.userItemContainer}>
          <Image source={item.image} style={styles.userIcon} />
          <View style={styles.userDetailsSectionContainer}>
            <View>
              <Text style={styles.label1}>{item.name}</Text>
              <Text style={styles.label2}>{item.lastMessage}</Text>
            </View>
            <Image source={images.checked} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <SwipeListView
      data={Data}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={180}
      rightOpenValue={-180}
    />
  );
};

export default UserListing;
