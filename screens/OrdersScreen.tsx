import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Tab, TabView } from "react-native-elements";
import NewOrdersTab from "@components/NewOrdersTab";
import CompletedOrdersTab from "@components/CompletedOrdersTab";

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
          <NewOrdersTab />
        </TabView.Item>
        <TabView.Item style={styles.TabTwoView}>
          <CompletedOrdersTab />
        </TabView.Item>
      </TabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  TabOneView: {
    width: "100%",
  },
  TabOneItem: {
    color: "black",
  },
  TabTwoView: {
    width: "100%",
  },
});
