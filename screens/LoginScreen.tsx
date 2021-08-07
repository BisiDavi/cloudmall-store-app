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
import { Button, Input } from "react-native-elements";

import { RootStackParamList } from "@types/.";

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
          <Text style={styles.text}>
            Welcome to Cloudmall, Create an Account
          </Text>
          <View style={styles.form}>
            <Input
              label="Email"
              inputContainerStyle={styles.inputContainer}
              labelStyle={styles.label}
              inputStyle={styles.input}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Input
              label="Password"
              inputStyle={styles.input}
              labelStyle={styles.label}
              inputContainerStyle={styles.inputContainer}
              textContentType="password"
              secureTextEntry
            />
            <Input
              label="Re-enter Password"
              labelStyle={styles.label}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.input}
              textContentType="password"
              secureTextEntry
            />
            <Button
              type="solid"
              titleStyle={{ textAlign: "center", margin: "auto", color: "red" }}
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
  inputContainer: {
    width: "100%",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderBottomWidth: 1,
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
    alignItems: "center",
    marginTop: 20,
    display: "flex",
    marginBottom: 20,
    width: "100%",
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
