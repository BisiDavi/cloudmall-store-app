import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import bottomTabContent from "@json/bottom-tab-navigation.json";
import { displayScreenComponent } from "@utils/displayScreenComponents";
import { StyleSheet } from "react-native";
import HeaderIcon from "@utils/headerIcon";

const TabOneStack = createStackNavigator();
const TabTwoStack = createStackNavigator();
const TabThreeStack = createStackNavigator();

export function TabOneNavigator({ navigation }: any) {
    return (
        <TabOneStack.Navigator
            screenOptions={{
                headerShown: true,
                headerLeft: () => (
									<HeaderIcon
											onPress={navigation}
											icon="menuIcon"
											position="left"
									/>
							),
							headerRight: () => (
									<HeaderIcon
											onPress={navigation}
											icon="notificationIcon"
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
                        headerTitleAlign: "center",
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

export function TabTwoNavigator({ navigation }: any) {
    return (
        <TabTwoStack.Navigator
            screenOptions={{
                headerShown: false,
                headerLeft: () => (
                    <HeaderIcon
                        onPress={navigation}
                        icon="menuIcon"
                        position="left"
                    />
                ),
                headerRight: () => (
                    <HeaderIcon
                        onPress={navigation}
                        icon="notificationIcon"
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
                        headerTitleAlign: "center",
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
                headerLeft: () => (
                    <HeaderIcon
                        onPress={navigation}
                        icon="menuIcon"
                        position="left"
                    />
                ),
                headerRight: () => (
                    <HeaderIcon
                        onPress={navigation}
                        icon="notificationIcon"
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
                        headerTitleAlign: "center",
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
