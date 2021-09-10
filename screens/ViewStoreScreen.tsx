import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
import pizza from "@assets/pizza.png";

export default function ViewStoreScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={pizza} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  productImage: {
    height: 150,
    width: 200,
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: 30,
    marginRight: 30,
  },
  inputLabel: {
    padding: 0,
    marginTop: -5,
  },
  inputContainer: {
    padding: 0,
    height: 35,
    marginBottom: 0,
  },
  input: {
    padding: 0,
  },
});
