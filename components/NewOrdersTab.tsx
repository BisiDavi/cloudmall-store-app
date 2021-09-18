import React from "react";
import { View, FlatList } from "react-native";
import NewOrdersList from "@json/new-order.json";
import OrdersListItem from "@components/OrdersListItem";

export type ordersList = {
    id: number;
    name: string;
    code: string;
    time: string;
    status: string;
    image: string;
    orders: { name: string; amount: string }[];
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
            <FlatList
                data={NewOrdersList}
                renderItem={renderItem}
                initialNumToRender={4}
                keyExtractor={function (newOrder) {
                    return newOrder.id.toString();
                }}
            />
        </>
    );
}
