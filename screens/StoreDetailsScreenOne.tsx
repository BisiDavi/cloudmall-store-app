import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import { RootStackParamList } from "@customTypes/.";
import InputField from "@components/InputField";

export default function StoreDetailsScreenOne({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stores Details</Text>
      <InputField label="Name of Store" />
      <InputField
        label="Email address of store"
        textContentType="emailAddress"
      />
      <InputField label="Phone number" textContentType="telephoneNumber" />
      <InputField
        label="Address"
        styles={{ input: styles.addressField }}
        textContentType="fullStreetAddress"
      />
      <View style={styles.buttonView}>
        <Button
          buttonStyle={styles.buttonStyle}
          onPress={() => navigation.navigate("StoreAddressScreen")}
          title="Next"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonStyle: {
    width: 250,
    alignItems: "center",
  },
  buttonView: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    justifyContent: "flex-start",
    marginBottom: 30,
    width: "100%",
    alignItems: "flex-start",
  },
  addressField: {
    height: 70,
  },
});
