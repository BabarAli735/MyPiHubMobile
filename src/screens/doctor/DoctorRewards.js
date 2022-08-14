import dayjs from "dayjs";
import { Center, FlatList, HStack, Text as NText, VStack } from "native-base";
import React, { useCallback, useState } from "react";
import { Dimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import QRCode from "react-native-qrcode-svg";
import { Block, Button, Image, Text } from "../../components";
import { useTheme } from "../../hooks";

export default () => {
  const [tab, setTab] = useState(0);
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  const handleProducts = useCallback(
    (tab) => {
      setTab(tab);
    },
    [setTab]
  );

  const Toggle = () => (
    <Block
      row
      flex={0}
      align="center"
      justify="center"
      color={colors.card}
      paddingBottom={sizes.s}
    >
      <Button onPress={() => handleProducts(0)}>
        <Block row align="center">
          <Block
            flex={0}
            radius={6}
            align="center"
            justify="center"
            marginRight={sizes.s}
            width={sizes.socialIconSize}
            height={sizes.socialIconSize}
            gradient={gradients?.[tab === 0 ? "primary" : "secondary"]}
          >
            <Image source={assets.extras} color={colors.white} radius={0} />
          </Block>
          <Text h6 font={fonts?.[tab === 0 ? "medium" : "normal"]}>
            Rewards
          </Text>
        </Block>
      </Button>
      <Block
        gray
        flex={0}
        width={1}
        marginHorizontal={sizes.sm}
        height={sizes.socialIconSize}
      />
      <Button onPress={() => handleProducts(1)}>
        <Block row align="center">
          <Block
            flex={0}
            radius={6}
            align="center"
            justify="center"
            marginRight={sizes.s}
            width={sizes.socialIconSize}
            height={sizes.socialIconSize}
            gradient={gradients?.[tab === 1 ? "primary" : "secondary"]}
          >
            <Image
              radius={0}
              color={colors.white}
              source={assets.documentation}
            />
          </Block>
          <Text h6 font={fonts?.[tab === 1 ? "medium" : "normal"]}>
            Add Reward
          </Text>
        </Block>
      </Button>
    </Block>
  );

  return (
    <View style={{ flex: 1 }}>
      <VStack bgColor={colors.card} h={"full"}>
        <FlatList
          ListHeaderComponent={
            <VStack mt={2}>
              {/* <Search /> */}
              <Toggle />
              {tab == 1 ? (
                <Center
                  style={{ height: Dimensions.get("screen").height * 0.8 }}
                >
                  <NText fontSize={"lg"} fontWeight="bold">
                    No Discount?
                  </NText>
                  <NText color="gray.400" mt={2} mb={3}>
                    Your Statement will be here.
                  </NText>

                  <Button width={"60%"} row gradient={gradients.primary}>
                    <Block
                      row
                      align="center"
                      justify="center"
                      paddingHorizontal={sizes.sm}
                    >
                      <Text size={12} white bold transform="uppercase">
                        Add Reward Code
                      </Text>
                    </Block>
                  </Button>
                </Center>
              ) : (
                <VStack>
                  <RewardsCard
                    discount={30}
                    expireDate={dayjs()}
                    logo={assets.avatar1}
                    promoCode={"10% Salary Bounus"}
                    qrData="please put here your informations"
                    title={"From Clinics"}
                  />
                  <RewardsCard
                    discount={30}
                    expireDate={dayjs()}
                    logo={assets.avatar1}
                    promoCode={"10% discout on at Caring Pharmacy"}
                    qrData="please put here your informations"
                    title="From Pharmacies"
                  />
                  <RewardsCard
                    discount={30}
                    expireDate={dayjs()}
                    logo={assets.avatar1}
                    promoCode={"10% discout at Foodpanda"}
                    qrData="please put here your informations"
                    title="From Markteplaces"
                  />
                  <RewardsCard
                    discount={30}
                    expireDate={dayjs()}
                    logo={assets.avatar1}
                    promoCode={"Certified by WHO."}
                    qrData="please put here your informations"
                    title="International Rewards"
                  />
                </VStack>
              )}
            </VStack>
          }
        />
      </VStack>
    </View>
  );
};

const RewardsCard = ({
  logo,
  promoCode,
  discount,
  expireDate,
  qrData,
  title,
}) => {
  return (
    <VStack my={2}>
      <HStack
        my={2}
        alignItems={"center"}
        justifyContent="space-between"
        mx="4"
      >
        <NText fontWeight={"bold"} color="gray.400">
          {title}
        </NText>
        <TouchableOpacity>
          <NText color="blue.400" fontWeight={"bold"}>
            see more
          </NText>
        </TouchableOpacity>
      </HStack>
      <FlatList
        data={[{ id: "1" }, { id: "2" }]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <HStack mr="2" p="2">
            <VStack
              w={"40"}
              borderRadius={"2xl"}
              bgColor={"white"}
              shadow="1"
              p="2"
              px={4}
            >
              <Image source={logo} />
              <NText mt={2} fontSize={"xs"} color={"gray.400"}>
                Promo Code
              </NText>
              <NText fontWeight={"bold"}>{promoCode}</NText>
              <NText mt={2} fontSize={"xs"} color={"gray.400"}>
                Discount
              </NText>
              <NText fontWeight={"bold"}>{discount}%</NText>
            </VStack>
            <Center bgColor={"blue.300"} borderLeftRadius={"2xl"} pt={3} p="2">
              <QRCode size={80} value={qrData ? qrData : "empty"} />
              <NText mt={2} fontWeight={"bold"}>
                Expiration Date
              </NText>
              <NText>{dayjs(expireDate).format("DD-MM-YYYY")}</NText>
            </Center>
          </HStack>
        )}
      />
    </VStack>
  );
};
