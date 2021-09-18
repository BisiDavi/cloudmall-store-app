import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import NewOrdersList from "@json/new-order.json";
import OrdersListItem from "@components/OrdersListItem";
import { TouchableHighlight } from "react-native-gesture-handler";

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
    const navigation = useNavigation();

    function viewOrder(item: ordersList) {
        console.log("viewOrder, I am console.log");
        return navigation.navigate("ViewOrderScreen", item);
    }

    function renderItem({ item }: newOrder) {
        return <OrdersListItem item={item} onPress={() => viewOrder(item)} />;
    }

    return (
        <>
            <FlatList
                data={NewOrdersList}
                renderItem={renderItem}
                initialNumToRender={4}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    );
}
