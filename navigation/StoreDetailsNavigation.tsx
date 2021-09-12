import React from "react";
import rootNavigationContent from "@json/root-navigation.json";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@customTypes/.";
import { colors } from "@utils/.";
import displayScreenComponent from "@utils/displayScreenComponents";

type displayStackScreenType = {
    name: keyof RootStackParamList;
    title?: string;
    position: "left";
};

const StoreDetailstack = createStackNavigator<RootStackParamList>();

function storeDetailScreen(
    stackContent: displayStackScreenType,
    index: number,
) {
    return stackContent.title ? (
        <StoreDetailstack.Screen
            key={`${stackContent.name}-${index}`}
            name={stackContent.name}
            options={{
                headerShown: stackContent.title ? true : false,
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
        <StoreDetailstack.Screen
            key={`${stackContent.name}-${index}`}
            name={stackContent.name}
            options={{
                headerShown: stackContent.title ? true : false,
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
    );
}

export default function StoreDetailsNavigation() {
    return (
        <StoreDetailstack.Navigator>
            {rootNavigationContent.storeDetails.map((item: any, index) =>
                storeDetailScreen(item, index),
            )}
        </StoreDetailstack.Navigator>
    );
}
