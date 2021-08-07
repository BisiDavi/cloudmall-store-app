import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import InputField from "@components/InputField";

import { RootStackParamList } from "@customTypes/.";

export default function StoreAddressScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreAddressScreen">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stores Address</Text>
      <View style={styles.mapView}></View>
      <View style={styles.inputView}>
        <InputField label="Phone number" textContentType="telephoneNumber" />
        <Button
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("StoreDetailsScreenTwo")}
          title="Confirm Address"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    margin: 20,
    fontWeight: "bold",
  },
  mapView: {
    height: 320,
    backgroundColor: "#C4C4C4",
    width: "100%",
  },
  inputView: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 250,
  },
});
