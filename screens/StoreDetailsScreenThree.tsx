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
      <Text>Upload Store's Image</Text>
      <Text>This image will appear as your store front on the user's app</Text>
      {/* <Image source="" /> */}
      <Button title="Upload Photo" />
      <Button title="Skip" />
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
