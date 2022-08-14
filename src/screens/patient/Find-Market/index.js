import {
  Avatar,
  Divider,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Block, Button, Screen, Text as MyText } from "../../../components";
import { useTheme } from "../../../hooks";
import HospitalCardSecond from "./HospitalCardSecond";

const list = [
  { id: "1", title: "Healthy Diet", measure: "80RM" },
  { id: "2", title: "Healthy Diet", measure: "90RM" },
];

const list2 = [
  {
    id: "1",
    name: "Healthy Diet",
    category: "Vigitable",
    service: "Available",
    price: "34RM",
    measure: "2%",
  },
  {
    id: "2",
    name: "Healthy Diet",
    category: "Vigitable",
    service: "Availabe",
    price: "34 RM",
    measure: "3%",
  },
];

export default (props) => {
  const { assets, colors, fonts, gradients, sizes } = useTheme();

  const Search = () => (
    <Block color={colors.card} flex={0} padding={sizes.padding}>
      <Input search placeholder={"Search"} />
    </Block>
  );

  return (
    <Screen style={styles.container}>
      <FlatList
        data={list2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Stack>
            <ImageBackground
              style={styles.background}
              source={assets.background}
            >
              <Text textAlign={"center"} my={2} color="white">
                Find a marketplace or search something to find in a marketeplace
              </Text>
              <Text
                textAlign={"center"}
                mb={5}
                fontWeight="bold"
                fontSize={"lg"}
                color="white"
              >
                Find Marketplace
              </Text>
              <Input
                width="90%"
                bgColor="white"
                placeholder="Search something such as foods"
              />
              <Button
                // onPress={() => navigate("PatientFindMarketLocation")}
                row
                gradient={gradients.dark}
                width="90%"
                marginTop={3}
              >
                <Block
                  row
                  align="center"
                  justify="center"
                  paddingHorizontal={sizes.sm}
                >
                  <MyText size={12} white bold transform="uppercase">
                    Search
                  </MyText>
                </Block>
              </Button>
              <Button row gradient={gradients.dark} width="90%" marginTop={3}>
                <Block
                  row
                  align="center"
                  justify="center"
                  paddingHorizontal={sizes.sm}
                >
                  <MyText size={12} white bold transform="uppercase">
                    View All Marketplaces
                  </MyText>
                </Block>
              </Button>
            </ImageBackground>
            <Text
              textAlign={"center"}
              color="gray.500"
              mt={20}
              fontWeight="bold"
              fontSize={"xl"}
            >
              Foods Marketplaces
            </Text>
            <VStack my={2} py={2}>
              <FlatList
                data={list}
                horizontal
                contentContainerStyle={{ paddingVertical: 10 }}
                renderItem={({ item }) => (
                  <HospitalCardSecond
                    title={item.title}
                    measure={item.measure}
                    image={require("../../../assets/images/grapfood2.jpg")}
                  />
                )}
              />
            </VStack>
            <VStack mx={2}>
              <Search />
              <Divider my={2} />
            </VStack>
          </Stack>
        }
        renderItem={({ item }) => (
          <HStack mb={2} alignItems="center" justifyContent={"space-between"}>
            <HStack alignItems={"center"} space={2}>
              <Avatar source={assets.doctor} />
              <VStack space={1}>
                <Text fontWeight={"bold"}>{item.name}</Text>
                <Text fontSize={"xs"} color={colors.danger}>
                  {item.category}
                </Text>
              </VStack>
            </HStack>
            <VStack alignItems="flex-end">
              <Text fontWeight={"bold"}>{item.price}</Text>
              <Text fontSize={"xs"} color={colors.danger}>
                {item.service}
              </Text>
            </VStack>
          </HStack>
        )}
        ItemSeparatorComponent={() => <Divider my={2} />}
        ListFooterComponent={() => <VStack h="2" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  background: {
    height: 240,
    alignItems: "center",
  },
});
