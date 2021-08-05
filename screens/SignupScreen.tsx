import * as React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

export default function SignupScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Cloudmall, Create an Account</Text>
        <Input
          label="Email"
          containerStyle={styles.input}
          keyboardType="email-address"
          textContentType="emailAddress"
          errorMessage="Please enter a valid email"
        />
        <Input
          label="Password"
          containerStyle={styles.input}
          textContentType="password"
          secureTextEntry={true}
        />
        <Input
          label="Re-enter Password"
          containerStyle={styles.input}
          textContentType="password"
          secureTextEntry={true}
        />
        <Button style={styles.button} title="Create Account" />
        <Text>Already have an account? Login in </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    margin: "auto",
  },
  input: {
    borderRadius: 1,
    borderColor: "black",
    borderStyle: "solid",
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});
