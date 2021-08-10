import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image, Button } from "react-native-elements";
import { RootStackParamList } from "@customTypes/.";

export default function StoreDetailsScreenThree({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenTwo">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Store's Image</Text>
      <View style={styles.content}>
        <Text style={styles.description}>
          This image will appear as your store front on the user's app
        </Text>
        <View style={styles.imageView} />
        <View>
          <Button buttonStyle={styles.button} title="Upload Photo" />
          <Button
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("BottomNav")}
            title="Skip"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 20,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
  },
  imageView: {
    height: 250,
    width: 300,
    margin: 20,
    backgroundColor: "#C4C4C4",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    textAlign: "left",
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
