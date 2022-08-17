import  FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import  AntDesign  from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { HStack, Image, Text as NText, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Block, Button, Text } from "../../../components";
import { useTheme } from "../../../hooks";

const PatientUserAppointmentCard = ({
  image,
  title,
  type,
  linkLabel,
  onPress,
}) => {
  const { assets, colors, sizes, gradients } = useTheme();
  const { navigate } = useNavigation();

  return (
    <>
      <HStack alignItems="center" justifyContent="center" my={3} space={2}>
        <Image
          w="30%"
          h="full"
          alt="profile"
          borderRadius={"md"}
          source={assets?.doctor}
        />
        <VStack w="65%" space={1.5}>
          <TouchableOpacity
            onPress={() => navigate("PatientFindDoctorProfile")}
          >
            <VStack space={1.5}>
              <HStack space={2} alignItems="center">
                <FontAwesome5 name="user-md" size={16} color={colors.primary} />
                <NText fontWeight={"bold"}>
                  Prof. Dr. Muhammad Shamsir Bin Mohd Aris
                </NText>
              </HStack>
              <HStack space={2} alignItems="center">
                <FontAwesome5 name="medal" size={16} color={colors.primary} />
                <NText>Obstetrics and Gynaecology </NText>
              </HStack>
              <HStack space={2} alignItems="center">
                <FontAwesome5
                  name="hand-holding-medical"
                  size={16}
                  color={colors.primary}
                />
                <NText fontWeight={"bold"}> {"Visiting Consultant"}</NText>
              </HStack>
              <HStack space={2} alignItems="center">
                <AntDesign
                  name="enviromento"
                  size={16}
                  color={colors.primary}
                />
                <NText>
                  {
                    "Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan"
                  }
                </NText>
              </HStack>
              <HStack space={2} alignItems="center">
                <FontAwesome5
                  name="phone-alt"
                  size={16}
                  color={colors.primary}
                />
                <NText>{"+606-8500 999"}</NText>
              </HStack>
            </VStack>
          </TouchableOpacity>
          <Button
            onPress={() => navigate("PatientFindDoctorAppointment")}
            width={"80%"}
            minHeight={sizes.md}
            row
            gradient={gradients.primary}
          >
            <Block
              row
              align="center"
              justify="center"
              paddingHorizontal={sizes.sm}
            >
              <Text size={12} white bold transform="uppercase">
                Friday, Apr 01
              </Text>
            </Block>
          </Button>
        </VStack>
      </HStack>
      <HStack alignItems="center" justifyContent="center" my={3} space={2}>
        <Image
          w="30%"
          h="full"
          alt="profile"
          borderRadius={"md"}
          source={assets?.doctor2}
        />
        <VStack w="65%" space={1.5}>
          <TouchableOpacity
            onPress={() => navigate("PatientFindDoctorProfile")}
          >
            <VStack space={1.5}>
              <HStack space={2} alignItems="center">
                <FontAwesome5 name="user-md" size={16} color={colors.primary} />
                <NText fontWeight={"bold"}>Dr. Khairullah Bin Anuar</NText>
              </HStack>
              <HStack space={2} alignItems="center">
                <FontAwesome5 name="medal" size={16} color={colors.primary} />
                <NText>Ear, Nose & Throat (ENT) </NText>
              </HStack>
              <HStack space={2} alignItems="center">
                <FontAwesome5
                  name="hand-holding-medical"
                  size={16}
                  color={colors.primary}
                />
                <NText fontWeight={"bold"}> {"Sessional Consultant"}</NText>
              </HStack>
              <HStack space={2} alignItems="center">
                <AntDesign
                  name="enviromento"
                  size={16}
                  color={colors.primary}
                />
                <NText>
                  {
                    "Lot 193, 194, Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan"
                  }
                </NText>
              </HStack>
              <HStack space={2} alignItems="center">
                <FontAwesome5
                  name="phone-alt"
                  size={16}
                  color={colors.primary}
                />
                <NText>{"+606-8500 979"}</NText>
              </HStack>
            </VStack>
          </TouchableOpacity>
          <Button
            onPress={() => navigate("PatientFindDoctorAppointment")}
            width={"80%"}
            minHeight={sizes.md}
            row
            gradient={gradients.primary}
          >
            <Block
              row
              align="center"
              justify="center"
              paddingHorizontal={sizes.sm}
            >
              <Text size={12} white bold transform="uppercase">
                Friday, Apr 02
              </Text>
            </Block>
          </Button>
        </VStack>
      </HStack>
    </>
  );
};

export default PatientUserAppointmentCard;
