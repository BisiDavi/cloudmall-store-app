import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Image } from "react-native-elements";
import InputField from "@components/InputField";

import { RootStackParamList } from "@customTypes/.";
import RadioField from "@components/RadioField";
import infoIcon from "@assets/infoIcon.png";

const radioField = [{ label: "Instore" }, { label: "Pickup" }];

export default function StoreDetailsScreenTwo({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenTwo">) {
  const [storeDetails, setStoreDetails] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stores Details</Text>
      <View style={styles.typeView}>
        <Text style={styles.storeTypeText}>Type of Store</Text>
        <Image source={infoIcon} style={styles.iconImage} />
      </View>
      <View style={styles.storeType}>
        {radioField.map((content, index) => (
          <RadioField content={content} key={index} />
        ))}
      </View>
      <InputField styles={{ input: styles.inputField }} label="Open days" />
      <InputField label="Phone number" textContentType="telephoneNumber" />
      <InputField
        label="Address"
        styles={{ input: styles.addressField }}
        textContentType="fullStreetAddress"
      />
      <View style={styles.buttonView}>
        <Button
          title="Next"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("StoreDetailsScreenThree")}
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
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  inputField: {
    marginTop: 1,
    padding: 0,
  },
  storeType: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  typeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  storeTypeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  iconImage: {
    height: 20,
    width: 10,
  },
  input: {
    width: 100,
    margin: 0,
    padding: 0,
  },
  addressField: {
    height: 70,
  },
  button: {
    width: 250,
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
