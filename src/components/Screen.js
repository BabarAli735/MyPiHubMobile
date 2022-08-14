import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
