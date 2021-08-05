import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

export default function StoreDetailsScreenOne() {
  return (
    <View style={styles.container}>
      <Text>Stores Details</Text>
      <Input label="Name of Store" errorMessage="Please enter a valid email" />
      <Input
        label="Email address of store"
        textContentType="emailAddress"
        errorMessage="Please enter a valid email"
      />
      <Input label="Phone number" textContentType="telephoneNumber" />
      <Input label="Address" textContentType="fullStreetAddress" />
      <Button title="Next" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
