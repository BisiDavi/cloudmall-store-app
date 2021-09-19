import React from "react";
import { FlatList } from "react-native";
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

export default function NewOrdersTab({ navigation }: any) {
    function renderItem({ item }: newOrder) {
        return (
            <OrdersListItem
                item={item}
                onPress={() => navigation.navigate("ViewOrderScreen", item)}
            />
        );
    }

    return (
        <FlatList
            data={NewOrdersList}
            renderItem={renderItem}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}
