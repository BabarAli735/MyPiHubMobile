import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import { images } from "../../images";
import { styles } from "./Chat.styles";
import UserListing from "./UserListing/UserListing";

const Chats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        heading="Chats"
        icon1={images.take_photo}
        icon2={images.new_message}
      />
      <SearchBox />
      {/* <StorySlider data={DATA} /> */}
      <UserListing />
    </SafeAreaView>
  );
};

export default Chats;
