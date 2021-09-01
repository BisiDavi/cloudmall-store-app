import React, { useCallback } from "react";
import { View, FlatList } from "react-native";
import CompletedOrdersList from "@json/completed-order.json";
import OrdersListItem from "@components/OrdersListItem";

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
      <View>
        <OrdersListItem item={item} />
      </View>
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
