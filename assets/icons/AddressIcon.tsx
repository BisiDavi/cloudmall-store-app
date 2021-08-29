import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
import addressIcon from "@assets/address.png";

export default function AddressIcon() {
  return <Image style={styles.addressIcon} source={addressIcon} />;
}

const styles = StyleSheet.create({
  addressIcon: {
    height: 20,
    width: 20,
    marginRight:15
  },
});
