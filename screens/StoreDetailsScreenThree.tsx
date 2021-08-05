import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image, Button } from "react-native-elements";

export default function StoreDetailsScreenThree() {
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
