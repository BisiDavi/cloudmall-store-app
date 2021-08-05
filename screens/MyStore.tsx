import { StyleSheet, View, Text } from "react-native";

export default function MyStoreScreen() {
  return (
    <View style={styles.container}>
      <Text>MyStore Screen</Text>
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
