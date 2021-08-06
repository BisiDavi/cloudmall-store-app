import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";

import { RootStackParamList } from "@types/.";

export default function SignupScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "SignupScreen">) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Cloudmall, Create an Account</Text>
      <View style={styles.form}>
        <Input
          label="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <Input label="Password" textContentType="password" secureTextEntry />
        <Input
          label="Re-enter Password"
          textContentType="password"
          secureTextEntry
        />
        <Button type="outline" title="Create Account" />
        <View style={styles.createAccount}>
          <Text>Already have an account? </Text>
          <Button
            onPress={() => navigation.navigate("Login")}
            buttonStyle={styles.login}
            type="clear"
            title="Login in"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 20,
  },
  form: {
    flex: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "black",
  },
  createAccount: {
    alignItems: "center",
  },
  login: {
    marginTop: 20,
  },
});
