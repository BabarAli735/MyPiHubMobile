import { useNavigation } from "@react-navigation/native";
import { Spacer } from "native-base";
import { useCallback, useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import SwipeButton from "rn-swipe-button";
import { Block, Button, Image, Input, Text } from "../components";
import { useData, useTheme } from "../hooks";

const isAndroid = Platform.OS === "android";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { gradients, sizes } = useTheme();

  const ToggleButtons = () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <Button
        marginHorizontal={sizes.s}
        gradient={gradients.primary}
        flex={1}
        disabled={isLogin ? false : true}
        onPress={() => setIsLogin(true)}
      >
        <Text
          bold
          color={isLogin ? "white" : "black"}
          white
          transform="uppercase"
        >
          Login
        </Text>
      </Button>

      <Button
        marginHorizontal={sizes.s}
        gradient={gradients.primary}
        flex={1}
        disabled={isLogin ? true : false}
        onPress={() => setIsLogin(false)}
      >
        <Text bold color={isLogin ? "black" : "white"} transform="uppercase">
          Register
        </Text>
      </Button>
    </View>
  );

  return (
    <Block safe marginTop={sizes.md}>
      <ToggleButtons />
      {isLogin ? <LoginScene /> : <RegisterScene />}
    </Block>
  );
};

export default Register;

const LoginScene = () => {
  const { navigate } = useNavigation();
  const [withSMS, setWithSMS] = useState(false);
  const { assets, colors, gradients, sizes } = useTheme();
  const { isDark } = useData();

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

  const handleChange = useCallback(
    (value) => {
      setLoginData((state) => ({ ...state, ...value }));
    },
    [setLoginData]
  );

  const handleSignIn = useCallback(() => {
    /** send/save registratin data */
    console.log("handleSignIn", login);
    navigate("ContinueAs");
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

  return (
    <View style={{ flex: 1 }}>
      {/* form inputs */}
      {withSMS ? (
        <View style={{ paddingHorizontal: sizes.sm, marginVertical: sizes.sm }}>
          <Input
            label="Phone Number"
            autoCapitalize="none"
            keyboardType="phone-pad"
            placeholder="Phone Number"
            onChangeText={(value) => handleChange({ email: value })}
          />
          <Input
            label="SMS Verification Code"
            autoCapitalize="none"
            marginTop={sizes.l}
            placeholder="6-digits code"
            keyboardType="phone-pad"
            onChangeText={(value) => handleChange({ password: value })}
            icon={
              <Button>
                <Text secondary>Send</Text>
              </Button>
            }
          />
        </View>
      ) : (
        <View style={{ paddingHorizontal: sizes.sm, marginVertical: sizes.sm }}>
          <Input
            label="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Phone Number or Email"
            success={Boolean(login.email && isValid.email)}
            danger={Boolean(login.email && !isValid.email)}
            onChangeText={(value) => handleChange({ email: value })}
          />
          <Input
            secureTextEntry
            label="Password"
            autoCapitalize="none"
            marginTop={sizes.l}
            placeholder="your password"
            onChangeText={(value) => handleChange({ password: value })}
            success={Boolean(login.password && isValid.password)}
            danger={Boolean(login.password && !isValid.password)}
          />
        </View>
      )}
      <View
        style={{
          alignItems: "flex-end",
          marginTop: sizes.l,
          marginBottom: sizes.sm,
          paddingHorizontal: sizes.sm,
        }}
      >
        <TouchableOpacity>
          <Text bold info>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={handleSignIn}
        marginVertical={sizes.s}
        marginHorizontal={sizes.sm}
        gradient={gradients.primary}
      >
        <Text bold white transform="uppercase">
          Login 
        </Text>
      </Button>

      <Block
        row
        flex={0}
        align="center"
        justify="center"
        marginVertical={sizes.sm}
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
          or
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

      <Button
        primary
        outlined
        marginVertical={sizes.s}
        marginHorizontal={sizes.sm}
        onPress={() => setWithSMS(!withSMS)}
      >
        <Text bold primary transform="uppercase">
          {withSMS ? "Login with Email" : "Login with SMS"}
        </Text>
      </Button>

      {/* social buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: sizes.s,
        }}
      >
        <Button outlined gray shadow={!isAndroid} marginRight={sizes.sm}>
          <Image
            source={assets.facebook}
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
      </View>
    </View>
  );
};

const RegisterScene = () => {
  const [withSMS, setWithSMS] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const { assets, colors, gradients, sizes } = useTheme();
  const { isDark } = useData();

  const [isValid, setIsValid] = useState({
    email: false,
    agreed: false,
  });
  const [login, setLoginData] = useState({
    email: "",
    agreed: false,
    error: false,
  });

  const handleChange = useCallback(
    (value) => {
      setLoginData((state) => ({ ...state, ...value }));
    },
    [setLoginData]
  );

  const handleSwipe = () => setIsCodeSent(true);

  return (
    <View style={{ flex: 1 }}>
      {/* form inputs */}
      {withSMS ? (
        <View style={{ paddingHorizontal: sizes.sm, marginVertical: sizes.sm }}>
          <Input
            label="Phone Number"
            autoCapitalize="none"
            keyboardType="phone-pad"
            placeholder="Phone Number"
            onChangeText={(value) => handleChange({ email: value })}
          />
        </View>
      ) : (
        <View style={{ paddingHorizontal: sizes.sm, marginVertical: sizes.sm }}>
          <Input
            label="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email Address"
            success={Boolean(login.email && isValid.email)}
            danger={Boolean(login.email && !isValid.email)}
            onChangeText={(value) => handleChange({ email: value })}
          />
        </View>
      )}
      <View style={{ marginTop: 30, alignItems: "center" }}>
        <SwipeButton
          disabled={false}
          swipeSuccessThreshold={80}
          height={45}
          width={330}
          title={`Slide to get ${withSMS ? "SMS" : "Email"} code`}
          titleColor={colors.gray}
          titleFontSize={16}
          shouldResetAfterSuccess={false}
          onSwipeSuccess={handleSwipe}
          railFillBackgroundColor={"rgba(1,1,1,.4)"}
          railFillBorderColor={"rgba(1,1,1,.4)"}
          thumbIconBackgroundColor={colors.primary}
          thumbIconBorderColor={colors.white}
          railBackgroundColor={colors.primary}
          railBorderColor={colors.primary}
        />
      </View>
      {isCodeSent && (
        <View>
          <View
            style={{ paddingHorizontal: sizes.sm, marginVertical: sizes.sm }}
          >
            <Input
              label="Verification Code"
              autoCapitalize="none"
              keyboardType="phone-pad"
              placeholder="Enter Verification Code"
              success={Boolean(login.email && isValid.email)}
              danger={Boolean(login.email && !isValid.email)}
              onChangeText={(value) => handleChange({ email: value })}
            />
          </View>
          <View
            style={{ paddingHorizontal: sizes.sm, marginVertical: sizes.sm }}
          >
            <Input
              label="Create Password"
              autoCapitalize="none"
              placeholder="Create Password"
              success={Boolean(login.email && isValid.email)}
              danger={Boolean(login.email && !isValid.email)}
              onChangeText={(value) => handleChange({ email: value })}
            />
          </View>
          <View style={{ paddingHorizontal: sizes.sm, marginTop: sizes.sm }}>
            <Button
              // onPress={() => console.log("Register"))
              marginVertical={sizes.s}
              marginHorizontal={sizes.sm}
              gradient={gradients.primary}
            >
              <Text bold white transform="uppercase">
                Register
              </Text>
            </Button>
          </View>
        </View>
      )}
      {!isCodeSent && <Spacer />}
      <Block
        row
        flex={0}
        align="center"
        justify="center"
        marginVertical={sizes.sm}
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
          or
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

      <Button
        primary
        outlined
        marginVertical={sizes.s}
        marginHorizontal={sizes.sm}
        onPress={() => setWithSMS(!withSMS)}
      >
        <Text bold primary transform="uppercase">
          {withSMS ? "Register with Email" : "Register with SMS"}
        </Text>
      </Button>

      {/* social buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: sizes.s,
        }}
      >
        <Button outlined gray shadow={!isAndroid} marginRight={sizes.sm}>
          <Image
            source={assets.facebook}
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
      </View>
      <Spacer />
    </View>
  );
};
