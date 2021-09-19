import React from "react";
import { FlatList } from "react-native";
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
    const renderItem = function renderItem({ item }: completedOrders) {
        return (
            <OrdersListItem
                key={item.id}
                item={item}
                onPress={() => navigation.navigate("ViewOrderScreen", item)}
            />
        );
    };

    return (
        <FlatList
            data={CompletedOrdersList}
            renderItem={renderItem}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}
