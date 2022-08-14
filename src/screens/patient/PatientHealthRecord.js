import { AntDesign } from 'react-native-vector-icons/AntDesign';
import { Divider, HStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Block, Image, Input, Text } from "../../components";
import { useTheme, useTranslation } from "../../hooks";

const RecordElement = ({ item }) => {
  const { colors, icons, gradients, sizes } = useTheme();

  return (
    <TouchableOpacity>
      <Block row align="center" marginBottom={sizes.m}>
        <Block
          flex={0}
          width={32}
          height={32}
          align="center"
          justify="center"
          radius={sizes.s}
          marginRight={sizes.s}
          gradient={gradients["primary"]}
        >
          <Image
            radius={0}
            width={14}
            height={14}
            color={colors.white}
            source={icons.document}
          />
        </Block>
        <Block>
          <Block row align="center" justify="space-between">
            <Text semibold>{item.title}</Text>
            <Block row flex={0} align="center">
              <Image source={icons.arrow} />
            </Block>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

const items = [
  { id: 1, title: "Alergy" },
  { id: 2, title: "Vaccination" },
  { id: 3, title: "Lab Result" },
  { id: 4, title: "Activity Patterns" },
  { id: 5, title: "Certificate" },
  { id: 6, title: "Radiology Test" },
  { id: 7, title: "Medication History" },
  { id: 8, title: "Chronic Illnesses" },
];

const PatientHealthRecord = () => {
  const { t } = useTranslation();
  const { colors, sizes } = useTheme();

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder={t("common.search")} />
      </Block>

      <HStack
        justifyContent="space-between"
        alignItems={"center"}
        bgColor={colors.card}
        px={"5"}
        // mx={"2.5"}
        h="12"
      >
        <Text p semibold>
          Health Records
        </Text>
        <TouchableOpacity>
          <AntDesign name="plus" size={24} />
        </TouchableOpacity>
      </HStack>
      <Divider />
      <Block
        color={colors.card}
        scroll
        nestedScrollEnabled
        padding={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: sizes.xxl }}
      >
        {items.map((item) => (
          <RecordElement key={`unread-${item.id}`} item={item} />
        ))}
      </Block>
    </Block>
  );
};

export default PatientHealthRecord;
