import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import InputField from "@components/InputField";

import { RootStackParamList } from "@customTypes/.";

export default function StoreDetailsScreenTwo({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenTwo">) {
  return (
    <View style={styles.container}>
      <Text>Stores Details</Text>
      <Text>Type of Store</Text>
      <View style={{ alignItems: "center", display: "flex" }}>
        <InputField label="In store" />
        <InputField label="Pickup" />
      </View>
      <InputField label="Open days" />
      <InputField label="Phone number" textContentType="telephoneNumber" />
      <InputField label="Address" textContentType="fullStreetAddress" />
      <Button
        title="Next"
        onPress={() => navigation.navigate("StoreDetailsScreenThree")}
      />
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
