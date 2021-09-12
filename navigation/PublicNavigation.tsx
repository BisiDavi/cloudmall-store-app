import React from "react";
import rootNavigationContent from "@json/root-navigation.json";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@customTypes/.";
import { colors, displayScreenComponent } from "@utils/.";

type displayStackScreenType = {
    name: keyof RootStackParamList;
    title?: string;
    position: "left";
};

const Stack = createStackNavigator<RootStackParamList>();

function displayStackScreen(
    stackContent: displayStackScreenType,
    index: number,
) {
    return stackContent.title ? (
        <Stack.Screen
            key={`${stackContent.name}-${index}`}
            name={stackContent.name}
            options={{
                headerShown: true,
                headerTitleAlign: stackContent?.position
                    ? stackContent.position
                    : "center",
                headerTitleStyle: {
                    fontFamily: "MontserratBold",
                    color: colors.cloudOrange5,
                    fontSize: 18,
                    lineHeight: 28,
                },
                title: stackContent.title,
            }}
            component={displayScreenComponent(stackContent.name)}
        />
    ) : (
        <Stack.Screen
            key={`${stackContent.name}-${index}`}
            name={stackContent.name}
            component={displayScreenComponent(stackContent.name)}
        />
    );
}

export default function PublicNavigation() {
    return (
        <Stack.Navigator>
            {rootNavigationContent.publicPage.map((item: any, index) =>
                displayStackScreen(item, index),
            )}
        </Stack.Navigator>
    );
}
