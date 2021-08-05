import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

export default function StoreDetailsScreenTwo() {
  return (
    <View style={styles.container}>
      <Text>Stores Details</Text>
      <View>
        <Text>Type of Store</Text>
        <Input label="In store" />
        <Input label="Pickup" />
      </View>
      <Input label="Open days" />
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
