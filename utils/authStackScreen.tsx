import React from "react";
import { RootStackParamList } from "@customTypes/.";
import { createStackNavigator } from "@react-navigation/stack";
import { colors, displayScreenComponent } from "@utils/.";

type displayStackScreenType = {
    name: keyof RootStackParamList;
    title?: string;
    position: "left";
};

const AuthStack = createStackNavigator<RootStackParamList>();

export default function authStackScreen(
    stackContent: displayStackScreenType,
    index: number,
) {
    return stackContent.title ? (
        <AuthStack.Screen
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
        <AuthStack.Screen
            key={`${stackContent.name}-${index}`}
            name={stackContent.name}
            component={displayScreenComponent(stackContent.name)}
        />
    );
}
