import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text>Auth Screen</Text>
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
