import React from "react";
import rootNavigationContent from "@json/root-navigation.json";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@customTypes/.";
import displayStackScreen from "@utils/displayStackScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function AuthNavigation() {
    return (
        <Stack.Navigator>
            {rootNavigationContent.authPage.map((item: any, index) =>
                displayStackScreen(item, index),
            )}
        </Stack.Navigator>
    );
}
