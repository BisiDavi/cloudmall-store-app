import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Tab, TabView } from "react-native-elements";
import NewOrdersTab from "@components/NewOrdersTab";
import CompletedOrdersTab from "@components/CompletedOrdersTab";

export default function OrdersScreen() {
  const [index, setIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Tab
        indicatorStyle={{ backgroundColor: "red" }}
        value={index}
        onChange={setIndex}
      >
        <Tab.Item titleStyle={styles.tabItem} title="New Orders" />
        <Tab.Item titleStyle={styles.tabItem} title="Completed Orders" />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={styles.TabOneView}>
          <NewOrdersTab />
        </TabView.Item>
        <TabView.Item style={styles.TabTwoView}>
          <CompletedOrdersTab />
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TabOneView: {
    width: "100%",
  },
  tabItem: {
    color: "black",
    fontSize: 12,
    marginBottom: 0,
  },
  TabTwoView: {
    width: "100%",
  },
});
