import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AppModal from "@components/AppModal";
import NewOrdersList from "@json/new-order.json";
import OrdersListItem from "@components/OrdersListItem";

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

  function displayModal(item: any) {
    return (
      <AppModal
        style={styles.appModal}
        visible={visible}
        toggleOverlay={() => setVisible(!visible)}
      >
        <Text>Hello David</Text>
        <Text>{item.orders}</Text>
      </AppModal>
    );
  }

  function toggleModal(item: any) {
    console.log("I am working");
    setVisible(!visible);
    console.log("item toggleModal", item);
    visible && displayModal(item);
  }

  function renderItem({ item }: newOrder) {
    return <OrdersListItem onPress={() => toggleModal(item)} item={item} />;
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
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appModal: {
    flex: 1,
  },
});
