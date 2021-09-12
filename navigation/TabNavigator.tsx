import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import bottomTabContent from "@json/bottom-tab-navigation.json";
import { colors, HeaderIcon } from "@utils/.";
import { StyleSheet } from "react-native";
import displayScreenComponent from "@utils/displayScreenComponents";

const TabOneStack = createStackNavigator();
const TabTwoStack = createStackNavigator();
const TabThreeStack = createStackNavigator();

export function TabOneNavigator({ navigation }: any) {
    return (
        <TabOneStack.Navigator
            screenOptions={{
                headerShown: true,
                headerPressColor: colors.mallBlue5,
                headerTintColor: colors.cloudOrange5,
                headerLeft: (props) => (
                    <HeaderIcon
                        attributes={props}
                        onPress={navigation}
                        position="left"
                    />
                ),
                headerRight: (props) => (
                    <HeaderIcon
                        attributes={props}
                        onPress={navigation}
                        position="right"
                    />
                ),
            }}
        >
            {bottomTabContent.tabOne.map((tab, index) => (
                <TabOneStack.Screen
                    name={tab.name}
                    key={index}
                    options={{
                        headerTitleAlign: "left",
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                        title: tab.title,
                    }}
                    component={displayScreenComponent(tab.name)}
                />
            ))}
        </TabOneStack.Navigator>
    );
}

export function TabTwoNavigator({ navigation }: any) {
    return (
        <TabTwoStack.Navigator
            screenOptions={{
                headerShown: true,
                headerPressColor: colors.mallBlue5,
                headerTintColor: colors.cloudOrange5,
                headerLeft: (props) => (
                    <HeaderIcon
                        attributes={props}
                        onPress={navigation}
                        position="left"
                    />
                ),
                headerRight: (props) => (
                    <HeaderIcon
                        attributes={props}
                        onPress={navigation}
                        position="right"
                    />
                ),
            }}
        >
            {bottomTabContent.tabTwo.map((tab, index) => (
                <TabTwoStack.Screen
                    name={tab.name}
                    key={index}
                    options={{
                        headerTitleAlign: "left",
                        title: tab.title,
                    }}
                    component={displayScreenComponent(tab.name)}
                />
            ))}
        </TabTwoStack.Navigator>
    );
}

export function TabThreeNavigator({ navigation }: any) {
    return (
        <TabThreeStack.Navigator
            screenOptions={{
                headerShown: true,
                headerPressColor: colors.mallBlue5,
                headerTintColor: colors.cloudOrange5,
                headerLeft: (props) => (
                    <HeaderIcon
                        attributes={props}
                        onPress={navigation}
                        position="left"
                    />
                ),
                headerRight: (props) => (
                    <HeaderIcon
                        attributes={props}
                        onPress={navigation}
                        position="right"
                    />
                ),
            }}
        >
            {bottomTabContent.tabThree.map((tab, index) => (
                <TabThreeStack.Screen
                    name={tab.name}
                    key={index}
                    options={{
                        headerTitleAlign: "left",
                        title: tab.title,
                    }}
                    component={displayScreenComponent(tab.name)}
                />
            ))}
        </TabThreeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    menu: {
        height: 20,
        width: 20,
        marginLeft: 20,
    },
    notificationIcon: {
        marginRight: 20,
        height: 20,
        width: 20,
    },
});
