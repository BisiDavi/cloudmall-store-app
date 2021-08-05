import { StyleSheet, View, Text } from "react-native";

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text>Ordersa Screen</Text>
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
