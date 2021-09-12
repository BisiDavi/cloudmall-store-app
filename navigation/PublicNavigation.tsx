import React from "react";
import rootNavigationContent from "@json/root-navigation.json";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@customTypes/.";
import displayStackScreen from "@utils/displayStackScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function PublicNavigation() {
    return (
        <Stack.Navigator>
            {rootNavigationContent.publicPage.map((item: any, index) =>
                displayStackScreen(item, index),
            )}
        </Stack.Navigator>
    );
}
