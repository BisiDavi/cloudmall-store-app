import React from "react";
import { View, FlatList } from "react-native";
import CompletedOrdersList from "@json/completed-order.json";
import OrdersListItem from "@components/OrdersListItem";

type ordersList = {
    id: number;
    name: string;
    code: string;
    time: string;
    status: string;
    image: string;
    orders: { name: string; amount: string }[];
};

type completedOrders = {
    item: ordersList;
};

export default function CompletedOrdersTab({ navigation }: any) {
    function viewOrder(item: ordersList) {
        console.log("viewOrder, I am console.log");
        navigation.navigate("ViewOrderScreen", item);
    }
    const completedOrders = function renderItem({ item }: completedOrders) {
        return (
            <OrdersListItem
                key={item.id}
                item={item}
                onPress={() => viewOrder(item)}
            />
        );
    };

    return (
        <FlatList
            data={CompletedOrdersList}
            renderItem={completedOrders}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            keyExtractor={function (item) {
                return item.id.toString();
            }}
        />
    );
}
