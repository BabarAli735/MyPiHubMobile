import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Block, Image, Text } from "../../components";
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
            source={icons?.star}
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

const items = {
  rewards: [
    { id: 1, title: "Pharmacy" },
    { id: 2, title: "Rewards from doctor because of his rating" },
    { id: 3, title: "Clinic Outpatient Rewards" },
    { id: 4, title: "Insurance Rewards" },
    { id: 5, title: "Redeems Reward" },
  ],
  subscriptions: [
    { id: 1, title: "Smart Marketplace subscription" },
    { id: 2, title: "Smart Express Delivery" },
  ],
  memberships: [
    { id: 1, title: "Membership / family Plans" },
    { id: 2, title: "Refferal To Friends" },
  ],
};

const PatientPromo = () => {
  const { t } = useTranslation();
  const { colors, sizes } = useTheme();

  return (
    <Block>
      <Block
        scroll
        nestedScrollEnabled
        padding={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: sizes.xxl }}
      >
        <Block card padding={sizes.sm} marginBottom={sizes.sm}>
          <Text p semibold marginBottom={sizes.sm}>
            Rewards
          </Text>
          {items.rewards?.map((item) => (
            <RecordElement key={`unread-${item.id}`} item={item} />
          ))}
        </Block>

        <Block card padding={sizes.sm} marginBottom={sizes.sm}>
          <Text p semibold marginBottom={sizes.sm}>
            Subscription
          </Text>
          {items.subscriptions?.map((item) => (
            <RecordElement key={`unread-${item.id}`} item={item} />
          ))}
        </Block>

        <Block card padding={sizes.sm} marginBottom={sizes.sm}>
          <Text p semibold marginBottom={sizes.sm}>
            Membership / Refferal
          </Text>
          {items.memberships?.map((item) => (
            <RecordElement key={`unread-${item.id}`} item={item} />
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export default PatientPromo;
