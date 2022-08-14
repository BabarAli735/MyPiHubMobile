import { MaterialCommunityIcons } from 'react-native-vector-icons'
import {
  Avatar,
  Divider,
  FlatList,
  HStack,
  Text as NText,
  VStack,
} from "native-base";
import React from "react";
import { Platform, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Block } from "../../components";
import { useTheme } from "../../hooks";
import FinalizeCard from "./SmartAssistantComponents/FinalizeCard";
import LabResultForm from "./SmartAssistantComponents/LabResultForm";
import OthersInfoForm from "./SmartAssistantComponents/OthersInfoForm";
import SamptamsForm from "./SmartAssistantComponents/SamptamsForm";

export default () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <VStack bgColor={colors.card} h={"full"}>
        <FlatList
          ListHeaderComponent={
            <VStack space={4} my={2}>
              <SamptamsForm />
              <LabResultForm />
              <OthersInfoForm />

              <PatientCard />
            </VStack>
          }
        />
      </VStack>
    </View>
  );
};

const isAndroid = Platform.OS === "android";

const PatientCard = () => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  return (
    <Block card keyboard behavior={!isAndroid ? "padding" : "height"}>
      <VStack>
        <TouchableOpacity>
          <HStack alignItems="center" justifyContent={"space-between"}>
            <HStack alignItems={"center"} space={2}>
              <Avatar source={assets.doctor} />
              <VStack space={1}>
                <NText fontWeight={"bold"}>Azam Shah</NText>
                <NText fontSize={"xs"} color={colors.danger}>
                  Emergancy
                </NText>
              </VStack>
            </HStack>
            <VStack alignItems="flex-end">
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={25}
                color={colors.dark}
              />
              <NText fontSize="xs">Monday, November 2</NText>
            </VStack>
          </HStack>
        </TouchableOpacity>

        <VStack>
          <Divider my={2} />
          <FinalizeCard />
        </VStack>
      </VStack>
    </Block>
  );
};
