import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerStatus,
} from "@react-navigation/drawer";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { Block, Button, Image, Switch, Text } from "../components";
import { useData, useTheme, useTranslation } from "../hooks";
import Screens from "./DoctorScreens";

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = () => {
  const { colors } = useTheme();
  const isDrawerOpen = useDrawerStatus() === "open" ? true : false;
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{ scale: scale }],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen ? 1 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animatedStyle,
        {
          flex: 1,
          overflow: "hidden",
          borderColor: colors.card,
          borderWidth: isDrawerOpen ? 1 : 0,
        },
      ])}
    >
      {/*  */}
      <Screens />
    </Animated.View>
  );
};

/* custom drawer menu */
const DrawerContent = (props) => {
  const { navigation } = props;
  const { isDark, handleIsDark } = useData();
  const { t } = useTranslation();
  const [active, setActive] = useState("DoctorDashboard");
  const { assets, colors, gradients, sizes } = useTheme();
  const labelColor = isDark ? colors.white : colors.text;

  const handleNavigation = useCallback(
    (to) => {
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive]
  );
  // screen list for Drawer menu
  const screens = [
    { name: "Home", to: "DoctorDashboard", icon: assets.home },
    { name: "Appointments", to: "DoctorAppointments", icon: assets.home },
    { name: "My Patients", to: "DoctorPatients", icon: assets.home },
    { name: "Smart Assistant", to: "SmartAssistant", icon: assets.home },
    { name: "Subscriptions", to: "DoctorSubscription", icon: assets.home },
    { name: "Inbox", to: "DoctorInbox", icon: assets.home },
    { name: "My Profile", to: "DoctorProfile", icon: assets.home },
    { name: "My Account", to: "DoctorAccount", icon: assets.home },
    { name: "Settings", to: "DoctorSettings", icon: assets.home },
    { name: "My Rewards", to: "DoctorRewards", icon: assets.home },
  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled
      removeClippedSubviews
      renderToHardwareTextureAndroid
      contentContainerStyle={{ paddingBottom: sizes.padding }}
    >
      <Block paddingHorizontal={sizes.padding}>
        <Block
          flex={0}
          row
          align="center"
          marginTop={sizes.s}
          marginBottom={sizes.l}
        >
          <Image
            radius={0}
            width={33}
            height={33}
            resizeMode="cover"
            color={colors.text}
            source={assets.profile}
            marginRight={sizes.sm}
          />
          <Block>
            <Text size={12} semibold>
              Mr.Affan
            </Text>
            <Text gray size={12} semibold>
              {t("app.native")}
            </Text>
          </Block>
        </Block>

        {screens?.map((screen, index) => {
          const isActive = active === screen.to;
          return (
            <Button
              row
              justify="flex-start"
              marginBottom={sizes.s}
              key={`menu-screen-${screen.name}-${index}`}
              onPress={() => handleNavigation(screen.to)}
            >
              <Block
                flex={0}
                radius={6}
                align="center"
                justify="center"
                width={sizes.md}
                height={sizes.md}
                marginRight={sizes.s}
                gradient={gradients[isActive ? "primary" : "white"]}
              >
                <Image
                  radius={0}
                  width={14}
                  height={14}
                  source={screen.icon}
                  color={colors[isActive ? "white" : "black"]}
                />
              </Block>
              <Text p semibold={isActive} color={labelColor}>
                {screen.name}
              </Text>
            </Button>
          );
        })}

        <Block
          flex={0}
          height={1}
          marginRight={sizes.md}
          marginVertical={sizes.sm}
          gradient={gradients.menu}
        />
        <Block row justify="space-between" marginTop={sizes.sm}>
          <Text color={labelColor}>{t("darkMode")}</Text>
          <Switch
            checked={isDark}
            onPress={(checked) => handleIsDark(checked)}
          />
        </Block>
      </Block>
    </DrawerContentScrollView>
  );
};

/* drawer menu navigation */
export default () => {
  const { isDark } = useData();
  const { gradients } = useTheme();

  return (
    <Block gradient={gradients[isDark ? "dark" : "light"]}>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerType="slide"
        overlayColor="transparent"
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{
          flex: 1,
          width: "60%",
          borderRightWidth: 0,
          backgroundColor: "transparent",
        }}
      >
        <Drawer.Screen name="Screens" component={ScreensStack} />
      </Drawer.Navigator>
    </Block>
  );
};
