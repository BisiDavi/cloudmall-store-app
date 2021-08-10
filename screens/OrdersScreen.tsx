import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Tab, TabView } from "react-native-elements";

export default function OrdersScreen() {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item title="New Orders" />
        <Tab.Item title="Completed Orders" />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={styles.TabOneView}>
          <Text>New Orders</Text>
        </TabView.Item>
        <TabView.Item style={styles.TabTwoView}>
          <Text>Completed Orders</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection:"column"
  },
  TabOneView: {
    backgroundColor: "red",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TabTwoView: {
    backgroundColor: "blue",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
