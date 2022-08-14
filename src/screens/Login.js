import { useNavigation } from "@react-navigation/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Linking, Platform } from "react-native";
import { set } from "react-native-reanimated";
import { Block, Button, Checkbox, Image, Input, Text } from "../components";
import { USERS } from "../constants/mocks";
import * as regex from "../constants/regex";
import { AuthContext } from "../contexts/auth";
import { useData, useTheme, useTranslation } from "../hooks";

const isAndroid = Platform.OS === "android";

// interface ILogin {
//   email: string;
//   password: string;
//   agreed: boolean;
// }
// interface ILoginValidation {
//   email: boolean;
//   password: boolean;
//   agreed: boolean;
// }

const Login = () => {
  const { setIsAuth, isAuth, setAuthUser } = useContext(AuthContext);

  const { isDark } = useData();
  // const { t } = useTranslation();
  const navigation = useNavigation();
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    agreed: false,
  });
  const [login, setLoginData] = useState({
    email: "",
    password: "",
    agreed: false,
    error: false,
  });
  const { assets, colors, gradients, sizes } = useTheme();

  const handleChange = useCallback(
    (value) => {
      setLoginData((state) => ({ ...state, ...value }));
    },
    [setLoginData]
  );

  const handleSignIn = useCallback(() => {
    /** send/save registratin data */
    console.log("handleSignIn", login);
    console.log(isAuth);
    navigation.navigate("ContinueAs");
    // setIsAuth(true)
    // const users = USERS;
    // const user = users.filter(user => user.email === login.email && user.password === login.password)
    // if(user.length > 0){
    //   setIsAuth(true)
    //   setAuthUser(user)
    // }else{

    //   setLoginData({...login, error:true})
    // }
  }, [login]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      email: regex.email.test(login.email),
      password: regex.password.test(login.password),
      agreed: login.agreed,
    }));
  }, [login, setIsValid]);

  return (
    <Block safe marginTop={sizes.md}>
      <Block paddingHorizontal={sizes.s}>
        <Block flex={0} style={{ zIndex: 0 }}>
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            radius={sizes.cardRadius}
            source={assets.background}
            height={sizes.height * 0.3}
          >
            <Text h4 center white marginBottom={sizes.md}>
              {t("login.title")}
            </Text>
          </Image>
        </Block>
        {/* login form */}
        <Block
          keyboard
          marginTop={-(sizes.height * 0.2 - sizes.l)}
          behavior={!isAndroid ? "padding" : "height"}
        >
          <Block
            flex={0}
            radius={sizes.sm}
            marginHorizontal="8%"
            shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
          >
            <Block
              blur
              flex={0}
              intensity={90}
              radius={sizes.sm}
              overflow="hidden"
              justify="space-evenly"
              tint={colors.blurTint}
              paddingVertical={sizes.sm}
            >
              <Text p semibold center>
                {"login.subtitle"}
              </Text>
              {/* social buttons */}
              <Block row center justify="space-evenly" marginVertical={sizes.m}>
                <Button outlined gray shadow={!isAndroid}>
                  <Image
                    source={assets.facebook}
                    height={sizes.m}
                    width={sizes.m}
                    color={isDark ? colors.icon : undefined}
                  />
                </Button>
                <Button outlined gray shadow={!isAndroid}>
                  <Image
                    source={assets.apple}
                    height={sizes.m}
                    width={sizes.m}
                    color={isDark ? colors.icon : undefined}
                  />
                </Button>
                <Button outlined gray shadow={!isAndroid}>
                  <Image
                    source={assets.google}
                    height={sizes.m}
                    width={sizes.m}
                    color={isDark ? colors.icon : undefined}
                  />
                </Button>
              </Block>
              <Block
                row
                flex={0}
                align="center"
                justify="center"
                marginBottom={sizes.sm}
                paddingHorizontal={sizes.xxl}
              >
                <Block
                  flex={0}
                  height={1}
                  width="50%"
                  end={[1, 0]}
                  start={[0, 1]}
                  gradient={gradients.divider}
                />
                <Text center marginHorizontal={sizes.s}>
                  {"common.or"}
                </Text>
                <Block
                  flex={0}
                  height={1}
                  width="50%"
                  end={[0, 1]}
                  start={[1, 0]}
                  gradient={gradients.divider}
                />
              </Block>
              {/* form inputs */}
              <Block paddingHorizontal={sizes.sm}>
                <Input
                  label={t("common.email")}
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  keyboardType="email-address"
                  placeholder={t("common.emailPlaceholder")}
                  success={Boolean(login.email && isValid.email)}
                  danger={Boolean(login.email && !isValid.email)}
                  onChangeText={(value) => handleChange({ email: value })}
                />
                <Input
                  secureTextEntry
                  label={t("common.password")}
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  placeholder={t("common.passwordPlaceholder")}
                  onChangeText={(value) => handleChange({ password: value })}
                  success={Boolean(login.password && isValid.password)}
                  danger={Boolean(login.password && !isValid.password)}
                />
              </Block>
              {login.error && (
                <Block
                  row
                  flex={0}
                  align="center"
                  justify="center"
                  marginBottom={sizes.sm}
                  paddingHorizontal={sizes.xxl}
                >
                  <Block
                    flex={0}
                    height={1}
                    width="50%"
                    end={[1, 0]}
                    start={[0, 1]}
                    gradient={gradients.divider}
                  />
                  <Text danger center marginHorizontal={sizes.s}>
                    {t("login.user-not-found")}
                  </Text>
                  <Block
                    flex={0}
                    height={1}
                    width="50%"
                    end={[0, 1]}
                    start={[1, 0]}
                    gradient={gradients.divider}
                  />
                </Block>
              )}

              <Button
                onPress={handleSignIn}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.primary}
                // disabled={Object.values(isValid).includes(false)}
              >
                <Text bold white transform="uppercase">
                  {"common.signin"}
                </Text>
              </Button>

              <Button
                primary
                outlined
                shadow={!isAndroid}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                onPress={() => navigation.navigate("Register")}
              >
                <Text bold primary transform="uppercase">
                  {"common.signup"}
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Login;
