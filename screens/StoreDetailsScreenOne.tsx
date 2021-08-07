import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";

import { RootStackParamList } from "@types/.";
import InputField from "@components/InputField";

export default function StoreDetailsScreenOne({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenOne">) {
  return (
    <View style={styles.container}>
      <Text>Stores Details</Text>
      <InputField label="Name of Store" />
      <InputField
        label="Email address of store"
        textContentType="emailAddress"
      />
      <InputField label="Phone number" textContentType="telephoneNumber" />
      <InputField label="Address" textContentType="fullStreetAddress" />
      <Button buttonStyle={styles.buttonStyle} title="Next" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    width: 250,
  },
});
