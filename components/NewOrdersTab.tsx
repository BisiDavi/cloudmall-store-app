import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ListItem, Avatar, Image } from "react-native-elements";
import NewOrdersList from "@json/new-order.json";
import clipboard from "@assets/clipboard.png";
import icon from "@assets/icon.png";

export default function NewOrdersTab() {
  return (
    <ScrollView style={styles.scrollView}>
      {NewOrdersList.map((newOrder) => (
        <ListItem key={newOrder.id} style={styles.listItem} bottomDivider>
          <Avatar avatarStyle={styles.avatar} rounded />
          <ListItem.Content>
            <View style={styles.row}>
              <Text>{newOrder.name}</Text>
              <Text>{newOrder.code}</Text>
            </View>
            <View style={styles.row}>
              <Text>{newOrder.time}</Text>
              <Image style={styles.clipboard} source={clipboard} />
              <Text style={styles.status}>{newOrder.status}</Text>
            </View>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
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
    paddingLeft:10,
    paddingRight:10,
    borderRadius: 10,
    color: "black",
  },
});
