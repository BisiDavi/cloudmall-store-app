import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import bottomTabContent from "@json/bottom-tab-navigation.json";
import { displayScreenComponent } from "@utils/displayScreenComponents";
import { StyleSheet } from "react-native";
import displayAsset from "@utils/displayAsset";
import { Image } from "react-native-elements";

const TabOneStack = createStackNavigator();
const TabThreeStack = createStackNavigator();
const TabFourStack = createStackNavigator();

export function TabOneNavigator() {
    return (
        <TabOneStack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleAlign: "center",
                headerLeft: () => (
                    <Image
                        style={styles.menu}
                        onPress={() => {}}
                        source={displayAsset("menuIcon")}
                    />
                ),
                headerRight: () => (
                    <Image
                        style={styles.notificationIcon}
                        source={displayAsset("notificationIcon")}
                    />
                ),
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
