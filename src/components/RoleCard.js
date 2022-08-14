import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme, useTranslation } from "../hooks";
import Block from "./Block";
import Text from "./Text";

const RoleCard = ({ type, linkLabel, onPress }) => {
  const { t } = useTranslation();
  const { assets, colors, sizes } = useTheme();

  const isHorizontal = true;
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  return (
    <TouchableOpacity onPress={onPress}>
      <Block
        card
        flex={0}
        align="center"
        justify="center"
        row={isHorizontal}
        marginBottom={sizes.sm}
        width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}
      >
        {type == "patient" && (
          <FontAwesome5
            name="user-injured"
            size={40}
            style={{
              marginBottom: isHorizontal ? 0 : 20,
              padding: isHorizontal ? 10 : null,
            }}
          />
        )}
        {type == "doctor" && (
          <FontAwesome5
            name="user-md"
            size={40}
            style={{
              marginBottom: isHorizontal ? 0 : 20,
              padding: isHorizontal ? 10 : null,
            }}
          />
        )}
        {type == "clinic" && (
          <MaterialCommunityIcons
            name="hospital-building"
            size={40}
            style={{
              marginBottom: isHorizontal ? 0 : 20,
              padding: isHorizontal ? 10 : null,
            }}
          />
        )}
        {type == "family" && (
          <MaterialIcons
            name="family-restroom"
            size={40}
            style={{
              marginBottom: isHorizontal ? 0 : 20,
              padding: isHorizontal ? 10 : null,
            }}
          />
        )}
        <Block
          paddingTop={sizes.s}
          justify="center"
          paddingLeft={isHorizontal ? sizes.sm : 0}
          paddingBottom={isHorizontal ? sizes.s : 0}
        >
          <Block row flex={0} align="center">
            <Text
              p
              color={colors.success}
              bold
              size={sizes.linkSize}
              marginRight={sizes.s}
            >
              {linkLabel || t("common.readArticle")}
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              style={{
                marginBottom: isHorizontal ? 0 : 20,
                padding: isHorizontal ? 10 : null,
              }}
              color={colors.success}
            />
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default RoleCard;
