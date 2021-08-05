import * as React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function LoadingActivityIndicator() {
  return (
    <View style={styles.LoadingActivityIndicator}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  LoadingActivityIndicator: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
