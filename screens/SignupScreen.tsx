import * as React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Button } from "react-native-elements";
import InputField from "../components/InputField";

export default function SignupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Cloudmall, Create an Account</Text>
      <View style={styles.container}>
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
        <InputField
          label="Re-enter Password"
          textContentType="password"  
          secureTextEntry
        />
      </View>
      <Button
        buttonStyle={styles.button}
        type="outline"
        title="Create Account"
      />
      <Text>Already have an account? Login in </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    height: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    borderRadius: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "black",
  },
});
