import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import  AntDesign  from "react-native-vector-icons/AntDesign";
import {
  Center,
  Divider,
  HStack,
  Input,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Block, Button, Image, Screen } from "../../../components";
import { useTheme } from "../../../hooks";
import Card from "./components/Card";

export default () => {
  const { assets, sizes, gradients, colors } = useTheme();
  return (
    <Screen style={{ backgroundColor: "white" }}>
      <ScrollView>
        <VStack alignItems={"center"} space={4} my={2}>
          <Card />
          <HStack space="8" alignItems="center">
            <Center p={2} px={2} bgColor="white" shadow={2} borderRadius="lg">
              <Block
                flex={0}
                radius={6}
                align="center"
                justify="center"
                width={sizes.xxl}
                height={sizes.xxl}
                gradient={gradients["primary"]}
              >
                <Image
                  source={assets.payment}
                  width={sizes.md}
                  height={sizes.md}
                  color={colors.white}
                  radius={0}
                />
              </Block>
              <Text mt={1} fontWeight={"bold"}>
                Account Balance
              </Text>
              <Text>Belong Intractive</Text>
              <Divider my={1} />
              <Text fontWeight={"bold"}>+$2000</Text>
            </Center>
            <Center p={2} px={2} bgColor="white" shadow={2} borderRadius="lg">
              <Block
                flex={0}
                radius={6}
                align="center"
                justify="center"
                width={sizes.xxl}
                height={sizes.xxl}
                gradient={gradients["primary"]}
              >
                <Image
                  source={assets.payment}
                  width={sizes.md}
                  height={sizes.md}
                  color={colors.white}
                  radius={0}
                />
              </Block>
              <Text mt={1} fontWeight={"bold"}>
                Bank Card
              </Text>
              <Text>Payments</Text>
              <Divider my={1} />
              <Text fontWeight={"bold"}>$400.5</Text>
            </Center>
          </HStack>
          <Stack w="90%" shadow={2} bgColor="white" borderRadius={"lg"} p="2">
            <HStack alignItems={"center"} justifyContent="space-between">
              <Text fontWeight={"bold"}>Payment Method</Text>
              <Button
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.primary}
                // disabled={Object.values(isValid).includes(false)}
              >
                <Text fontWeight={"bold"} color="white" transform="uppercase">
                  Add New Card
                </Text>
              </Button>
            </HStack>
            <VStack space={2}>
              <Input
                placeholder="**** **** **** 7852"
                rightElement={
                  <AntDesign
                    name="edit"
                    size={22}
                    style={{ marginHorizontal: 10 }}
                  />
                }
              />
              <Input
                placeholder="**** **** **** 7852"
                rightElement={
                  <AntDesign
                    name="edit"
                    size={22}
                    style={{ marginHorizontal: 10 }}
                  />
                }
              />
            </VStack>
          </Stack>

          {/* invoices */}
          <VStack
            w="90%"
            px={2}
            space={2}
            bgColor={"white"}
            shadow="1"
            borderRadius={"lg"}
            py={2}
          >
            <HStack alignItems="center">
              <VStack flex="2">
                <Text fontWeight="bold">Invoices</Text>
              </VStack>
              <VStack flex="2">
                <Button
                  marginVertical={sizes.s}
                  gradient={gradients.primary}
                  // disabled={Object.values(isValid).includes(false)}
                >
                  <Text fontWeight={"bold"} color="white" transform="uppercase">
                    View All
                  </Text>
                </Button>
              </VStack>
            </HStack>
            <HStack alignItems="center" justifyContent={"space-between"}>
              <VStack space={1}>
                <Text fontWeight={"bold"}>Martch, 01, 2020</Text>
                <Text>#MS-3412323</Text>
              </VStack>
              <HStack space={6}>
                <Text fontWeight={"bold"}>$180</Text>
                <HStack space={1} alignItems={"center"}>
                  <MaterialCommunityIcons name="file-pdf" size={20} />
                  <Text fontWeight={"bold"}>PDF</Text>
                </HStack>
              </HStack>
            </HStack>
            <HStack alignItems="center" justifyContent={"space-between"}>
              <VStack space={1}>
                <Text fontWeight={"bold"}>Martch, 01, 2020</Text>
                <Text>#MS-3412323</Text>
              </VStack>
              <HStack space={6}>
                <Text fontWeight={"bold"}>$180</Text>
                <HStack space={1} alignItems={"center"}>
                  <MaterialCommunityIcons name="file-pdf" size={20} />
                  <Text fontWeight={"bold"}>PDF</Text>
                </HStack>
              </HStack>
            </HStack>
            <HStack alignItems="center" justifyContent={"space-between"}>
              <VStack space={1}>
                <Text fontWeight={"bold"}>Martch, 01, 2020</Text>
                <Text>#MS-3412323</Text>
              </VStack>
              <HStack space={6}>
                <Text fontWeight={"bold"}>$180</Text>
                <HStack space={1} alignItems={"center"}>
                  <MaterialCommunityIcons name="file-pdf" size={20} />
                  <Text fontWeight={"bold"}>PDF</Text>
                </HStack>
              </HStack>
            </HStack>
          </VStack>

          {/* invoices */}
          <VStack
            w="90%"
            px={2}
            space={2}
            bgColor={"white"}
            shadow="1"
            borderRadius={"lg"}
            py={2}
          >
            <HStack alignItems="center">
              <VStack flex="2">
                <Text fontWeight="bold">Your Transactions</Text>
              </VStack>
              <VStack flex="2">
                <HStack space={1}>
                  <MaterialCommunityIcons name="calendar" size={20} />
                  <Text>23 - 30 March 2020</Text>
                </HStack>
              </VStack>
            </HStack>
            <HStack alignItems="center">
              <Text color="gray.500" fontWeight="bold" my={3}>
                NEWEST
              </Text>
            </HStack>
            <HStack alignItems="center" justifyContent={"space-between"}>
              <HStack alignItems={"center"} space={2}>
                <MaterialCommunityIcons
                  name="arrow-up-circle-outline"
                  size={30}
                  color={colors.success}
                />
                <VStack space={1}>
                  <Text fontWeight={"bold"}>Title</Text>
                  <Text fontSize={"xs"}>20 March 2022 at 04:30 AM</Text>
                </VStack>
              </HStack>
              <HStack space={6}>
                <Text fontWeight={"bold"} color={colors.success} fontSize="md">
                  $180
                </Text>
              </HStack>
            </HStack>
            <HStack alignItems="center" justifyContent={"space-between"}>
              <HStack alignItems={"center"} space={2}>
                <MaterialCommunityIcons
                  name="arrow-down-circle-outline"
                  size={30}
                  color={colors.danger}
                />
                <VStack space={1}>
                  <Text fontWeight={"bold"}>Title</Text>
                  <Text fontSize={"xs"}>20 March 2022 at 04:30 AM</Text>
                </VStack>
              </HStack>
              <HStack space={6}>
                <Text fontWeight={"bold"} color={colors.danger} fontSize="md">
                  $380
                </Text>
              </HStack>
            </HStack>
          </VStack>

          {/* Billing Informations */}
          <VStack
            w="90%"
            px={2}
            space={2}
            bgColor={"white"}
            shadow="1"
            borderRadius={"lg"}
            py={2}
          >
            <HStack mb={4} alignItems="center">
              <Text fontWeight="bold">Billing Information</Text>
            </HStack>
            <VStack>
              <HStack
                alignItems="center"
                justifyContent={"space-between"}
                mb={1}
              >
                <VStack>
                  <Text fontWeight="bold">Oliver Liam</Text>
                </VStack>
                <VStack>
                  <HStack space={2} alignItems="flex-end">
                    <TouchableOpacity>
                      <HStack alignItems={"center"} space={2}>
                        <AntDesign name="delete" color={colors.danger} />
                        <Text color={colors.danger}>Delete</Text>
                      </HStack>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <HStack alignItems={"center"} space={2}>
                        <AntDesign name="edit" color={colors.dark} />
                        <Text color={colors.dark}>Edit</Text>
                      </HStack>
                    </TouchableOpacity>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
            <VStack space={2} justifyContent={"space-between"}>
              <HStack space={1}>
                <Text fontWeight={"bold"}>Company Name: </Text>
                <Text>name of company</Text>
              </HStack>
              <HStack space={1}>
                <Text fontWeight={"bold"}>Email: </Text>
                <Text>email@gmail.com</Text>
              </HStack>
              <HStack space={1}>
                <Text fontWeight={"bold"}>VAT Number: </Text>
                <Text>FSX545</Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </Screen>
  );
};
