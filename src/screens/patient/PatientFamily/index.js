import { VStack } from "native-base";
import React from "react";
import { Platform } from "react-native";
import { Block } from "../../../components";
import AddDependent from "./AddDependent";
import AddHealthRecord from "./AddHealthRecord";
import Setps from "./Steps";

const isAndroid = Platform.OS === "android";

export default () => {
  return (
    <Block keyboard behavior={!isAndroid ? "padding" : "height"}>
      <VStack bgColor={"coolGray.200"}>
        <Setps step={1} totalSteps={2} />
      </VStack>
      <AddDependent />
      <VStack mt="4" bgColor={"coolGray.200"}>
        <Setps step={2} totalSteps={2} />
      </VStack>
      <AddHealthRecord />
    </Block>
  );
};
