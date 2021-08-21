import React, { useCallback } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ListItem, Avatar, Image } from "react-native-elements";
import CompletedOrdersList from "@json/completed-order.json";
import clipboard from "@assets/clipboard.png";

type ordersList = {
  id: number;
  name: string;
  code: string;
  time: string;
  status: string;
};

type completedOrders = {
  item: ordersList;
};

export default function CompletedOrdersTab() {
  const completedOrders = useCallback(function renderItem({
    item,
  }: completedOrders) {
    return (
      <ListItem key={item?.id} style={styles.listItem} bottomDivider>
        <Avatar avatarStyle={styles.avatar} rounded />
        <ListItem.Content>
          <View style={styles.row}>
            <Text>{item?.name}</Text>
            <Text>{item?.code}</Text>
          </View>
          <View style={styles.row}>
            <Text>{item?.time}</Text>
            <Image style={styles.clipboard} source={clipboard} />
            <Text style={styles.status}>{item?.status}</Text>
          </View>
        </ListItem.Content>
      </ListItem>
    );
  },
  []);

  return (
    <View>
      <FlatList
        data={CompletedOrdersList}
        renderItem={completedOrders}
        initialNumToRender={5}
        keyExtractor={function (item) {
          return item.id.toString();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    backgroundColor: "red",
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
