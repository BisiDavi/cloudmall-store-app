import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

export default function StoreAddressScreen() {
  return (
    <View style={styles.container}>
      <Text>Stores Address</Text>

      <Input label="Phone number" textContentType="telephoneNumber" />
      <Button title="Confirm Address" />
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
