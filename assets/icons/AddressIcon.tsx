import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-elements";
import addressIcon from "@assets/address.png";

export default function AddressIcon() {
  const navigation = useNavigation();
  const route: any = "StoreAddressScreen";
  return (
    <Image
      style={styles.addressIcon}
      onPress={() => navigation.navigate(route)}
      source={addressIcon}
    />
  );
}

const styles = StyleSheet.create({
  addressIcon: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
});
