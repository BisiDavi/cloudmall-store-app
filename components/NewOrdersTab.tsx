import React from "react";
import { View, FlatList } from "react-native";
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
  function renderItem({ item }: newOrder) {
    return (
      <View>
        <OrdersListItem item={item} />
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
        />
      </View>
    </>
  );
}
