import React from "react";
import rootNavigationContent from "@json/root-navigation.json";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@customTypes/.";
import { displayScreenComponent, colors } from "@utils/.";

type displayStackScreenType = {
    name: keyof RootStackParamList;
    title?: string;
    position: "left";
};

const PublicStack = createStackNavigator<RootStackParamList>();

function publicStackScreen(
    stackContent: displayStackScreenType,
    index: number,
) {
    return stackContent.title ? (
        <PublicStack.Screen
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
        <PublicStack.Screen
            key={`${stackContent.name}-${index}`}
            name={stackContent.name}
            component={displayScreenComponent(stackContent.name)}
        />
    );
}

export default function PublicNavigation() {
    return (
        <PublicStack.Navigator>
            {rootNavigationContent.publicPage.map((item: any, index) =>
                publicStackScreen(item, index),
            )}
        </PublicStack.Navigator>
    );
}
