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
  image: string;
};

type newOrder = {
  item: ordersList;
};

export default function NewOrdersTab() {
  function renderItem({ item }: newOrder) {
    return <OrdersListItem item={item} />;
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
