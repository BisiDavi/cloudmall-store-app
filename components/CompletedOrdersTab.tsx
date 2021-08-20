import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { ListItem, Avatar, Image } from "react-native-elements";
import CompletedOrdersList from "@json/completed-order.json";
import clipboard from "@assets/clipboard.png";

const completedOrders = ({ completedOrder }: any) => (
  <ListItem key={completedOrder.id} style={styles.listItem} bottomDivider>
    <Avatar avatarStyle={styles.avatar} rounded />
    <ListItem.Content>
      <View style={styles.row}>
        <Text>{completedOrder.name}</Text>
        <Text>{completedOrder.code}</Text>
      </View>
      <View style={styles.row}>
        <Text>{completedOrder.time}</Text>
        <Image style={styles.clipboard} source={clipboard} />
        <Text style={styles.status}>{completedOrder.status}</Text>
      </View>
    </ListItem.Content>
  </ListItem>
);

export default function CompletedOrdersTab() {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.flatList}
        data={CompletedOrdersList}
        renderItem={completedOrders}
        keyExtractor={(completedOrder) => completedOrder.id.toString()}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  clipboard: {
    height: 20,
    width: 20,
  },
  avatar: {
    height: 50,
    backgroundColor: "#C4C4C4",
    width: 100,
  },
  status: {
    backgroundColor: "#C4C4C4",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    color: "black",
  },
});
