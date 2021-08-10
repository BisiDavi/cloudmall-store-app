import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
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

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "SignupScreen">) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to Cloudmall, Login</Text>
          <View style={styles.form}>
            <InputField
              label="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <InputField
              label="Password"
              textContentType="password"
              secureTextEntry
            />

            <Button
              type="solid"
              onPress={() => navigation.navigate("StoreDetailsScreenOne")}
              title="Login"
              buttonStyle={styles.createAccount}
            />
            <View style={styles.withAccount}>
              <Text>Don't have an account? </Text>
              <Button
                onPress={() => navigation.navigate("SignupScreen")}
                buttonStyle={styles.login}
                type="clear"
                title="Sign up"
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
    alignItems: "center",
    marginTop: 20,
    display: "flex",
    marginBottom: 20,
    width: 250,
    justifyContent: "center",
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
