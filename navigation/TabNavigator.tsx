import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import bottomTabContent from "@json/bottom-tab-navigation.json";
import { displayScreenComponent } from "@utils/displayScreenComponents";

const TabOneStack = createStackNavigator();
const TabFourStack = createStackNavigator();

export function TabOneNavigator() {
    return (
        <TabOneStack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerShown: false,
            }}
        >
            {bottomTabContent.tabOne.map((tab, index) => (
                <TabOneStack.Screen
                    name={tab.name}
                    key={index}
                    options={{
                        headerTitleStyle: {
                            fontSize: 16,
                            textAlign: "left",
                        },
                        title: tab.title,
                    }}
                    component={displayScreenComponent(tab.name)}
                />
            ))}
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator();

export function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {bottomTabContent.tabTwo.map((tab, index) => (
                <TabTwoStack.Screen
                    name={tab.name}
                    key={index}
                    options={{
                        headerTitleAlign: "center",
                        title: tab.title,
                    }}
                    component={displayScreenComponent(tab.name)}
                />
            ))}
        </TabTwoStack.Navigator>
    );
}

export function TabFourNavigator() {
    return (
        <TabFourStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {bottomTabContent.tabFour.map((tab, index) => (
                <TabFourStack.Screen
                    name={tab.name}
                    key={index}
                    options={{
                        headerTitleAlign: "center",
                        title: tab.title,
                    }}
                    component={displayScreenComponent(tab.name)}
                />
            ))}
        </TabFourStack.Navigator>
    );
}
