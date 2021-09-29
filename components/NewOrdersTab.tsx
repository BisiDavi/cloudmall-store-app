import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import NewOrdersList from "@json/new-order.json";
import OrdersListItem from "@components/OrdersListItem";
import { ScrollView } from "react-native-gesture-handler";

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
    const renderItem = useCallback(function ({ item }: newOrder) {
        return (
            <OrdersListItem
                item={item}
                onPress={() => navigation.navigate("ViewOrderScreen", item)}
            />
        );
    }, []);

    const keyExtractor = useCallback((item) => item.id.toString(), []);
    const ITEM_HEIGHT = 120;
    const getItemLayout = useCallback(function (data, index) {
        return {
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
        };
    }, []);
    return (
        <FlatList
            data={NewOrdersList}
            renderItem={renderItem}
            initialNumToRender={5}
            maxToRenderPerBatch={8}
            windowSize={8}
            getItemLayout={getItemLayout}
            keyExtractor={keyExtractor}
        />
    );
}
