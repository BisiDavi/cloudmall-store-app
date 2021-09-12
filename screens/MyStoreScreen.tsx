import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerStackParamList } from "@customTypes/.";

type MyStoreScreenNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "MyStoreScreen"
>;

type MyStoreScreenRouteProps = RouteProp<DrawerStackParamList, "MyStoreScreen">;

type Props = {
    route: MyStoreScreenRouteProps;
    navigation: MyStoreScreenNavigationProps;
};

export default function MyStoreScreen({ navigation }: Props) {
    return (
        <View>
            <Text>My Store Screen</Text>
        </View>
	);
}
