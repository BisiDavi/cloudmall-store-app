import React, { useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ListItem, Avatar, Image } from "react-native-elements";
import NewOrdersList from "@json/new-order.json";
import clipboard from "@assets/clipboard.png";
import AppModal from "./AppModal";

type ordersList = {
  id: number;
  name: string;
  code: string;
  time: string;
  status: string;
};

type newOrder = {
  item: ordersList;
};

export default function NewOrdersTab() {
  const [visible, setVisible] = useState(false);

  const toggleModal = (item: any) => {
    console.log("item", item);
    return setVisible(!visible);
  };

  function renderItem({ item }: newOrder) {
    return (
      <View>
        <ListItem
          key={item?.id}
          style={styles.listItem}
          onPress={() => setVisible(!visible)}
          bottomDivider
        >
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
        <AppModal
          style={styles.appModal}
          visible={visible}
          toggleOverlay={() => setVisible(!visible)}
        >
          <Text>Hello David</Text>
        </AppModal>
      </View>
    );
  }

  return (
    <>
      <View>
        <FlatList
          data={NewOrdersList}
          renderItem={renderItem}
          initialNumToRender={5}
          keyExtractor={function (newOrder) {
            return newOrder.id.toString();
          }}
          extraData={visible}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  appModal: {
    flex: 1,
  },
});
