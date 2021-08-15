import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";

import { RootStackParamList } from "customTypes";
import InputField from "@components/InputField";

export default function SignupScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "SignupScreen">) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function passwordVisbilityHandler() {
    setHidePassword(!hidePassword);
  }

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordMatch("Password doesn't match");
    } else {
      setPasswordMatch("");
    }
  }, [confirmPassword]);

  function confirmPasswordHandler(text?: any) {
    setConfirmPassword(text);
  }

  console.log("email", email);
  console.log("confirmPassword", confirmPassword);

  const passwordIcon = hidePassword ? "eye-off" : "eye";

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>
            Welcome to Cloudmall, Create an Account
          </Text>
          <View style={styles.form}>
            <InputField
              label="Email"
              onChangeText={(text?: any) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <InputField
              label="Password"
              value={password}
              onChangeText={(text?: any) => setPassword(text)}
              textContentType="password"
              secureTextEntry={hidePassword}
              rightIcon={
                <Feather
                  name={passwordIcon}
                  onPress={passwordVisbilityHandler}
                  color="black"
                  size={24}
                />
              }
            />
            <InputField
              label="Re-enter Password"
              textContentType="password"
              value={confirmPassword}
              onChangeText={confirmPasswordHandler}
              secureTextEntry={hidePassword}
              errorMessage={passwordMatch}
              rightIcon={
                <Feather
                  name={passwordIcon}
                  onPress={passwordVisbilityHandler}
                  color="black"
                  size={24}
                />
              }
            />
            <Button
              type="solid"
              onPress={() => navigation.navigate("StoreDetailsScreenOne")}
              title="Create Account"
              buttonStyle={styles.createAccount}
            />
            <View style={styles.withAccount}>
              <Text>Already have an account? </Text>
              <Button
                onPress={() => navigation.navigate("LoginScreen")}
                buttonStyle={styles.login}
                type="clear"
                title="Login in"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  form: {
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },

  label: {
    color: "black",
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 60,
    lineHeight: 24,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "black",
  },
  createAccount: {
    marginTop: 20,
    marginBottom: 10,
    width: 250,
  },
  withAccount: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  login: {
    marginTop: 0,
  },
});
