import { AntDesign } from 'react-native-vector-icons/AntDesign';
import React from "react";
import { useTheme, useTranslation } from "../hooks";
import Block from "./Block";
import Image from "./Image";
import Text from "./Text";

const PatientUserAppointmentCard = ({
  image,
  title,
  type,
  linkLabel,
  onPress,
}) => {
  const { t } = useTranslation();
  const { assets, colors, sizes } = useTheme();

  const isHorizontal = type !== "vertical";
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  return (
    <Block
      card
      flex={0}
      align="center"
      justify="center"
      marginTop={sizes.sm}
      row={isHorizontal}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}
    >
      <Image
        radius={sizes.s}
        width={"30%"}
        height={"100%"}
        source={assets?.doctor}
        style={{ backgroundColor: colors.white }}
      />
      <Block
        paddingTop={sizes.s}
        justify="center"
        paddingLeft={isHorizontal ? sizes.sm : 0}
        paddingBottom={isHorizontal ? sizes.s : 0}
      >
        <Block row flex={0} align="center">
          <AntDesign name="user" size={18} color={colors.gray} />
          <Text h6 marginLeft={sizes.base} marginRight={sizes.s}>
            {"Dr.Mike"}
          </Text>
        </Block>
        <Block row flex={0} align="center">
          <AntDesign name="heart" size={16} color={colors.gray} />
          <Text h6 marginRight={sizes.s} marginLeft={sizes.base}>
            {"Neurologist"}
          </Text>
        </Block>
        <Block row flex={0} align="center">
          <AntDesign name="bank" size={18} color={colors.gray} />
          <Text h6 marginRight={sizes.s} marginLeft={sizes.base}>
            {"Consultation Fee: 52 $"}
          </Text>
        </Block>
        <Block row flex={0} align="center">
          <AntDesign name="enviromento" size={18} color={colors.danger} />
          <Text h6 marginRight={sizes.s} marginLeft={sizes.base}>
            {"Klinik Pakar Kesihatan USIM Block #B, 6th Avenue"}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default PatientUserAppointmentCard;
