import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import drawerStackJson from "@json/drawer-stack.json";
import { displayScreenComponent } from "@utils/displayScreenComponents";
import HeaderIcon from "@utils/headerIcon";

const DrawerStackOne = createStackNavigator();
const DrawerStackTwo = createStackNavigator();
const DrawerStackThree = createStackNavigator();
const DrawerStackFour = createStackNavigator();
const DrawerStackFive = createStackNavigator();

export function DrawerOneStackNavigator() {
    return (
        <DrawerStackOne.Navigator>
            {drawerStackJson.myStore.map((stack) => (
                <DrawerStackOne.Screen
                    name={stack.name}
                    key={stack.name}
                    options={{
                        title: stack.title,
                    }}
                    component={displayScreenComponent(stack.name)}
                />
            ))}
        </DrawerStackOne.Navigator>
    );
}

export function DrawerTwoStackNavigator({ navigation }: any) {
    return (
        <DrawerStackTwo.Navigator>
            {drawerStackJson.products.map((stack) => (
                <DrawerStackTwo.Screen
                    name={stack.name}
                    key={stack.name}
                    options={{
                        headerShown: true,
                        title: stack.title,
                        headerLeft: (props) => (
                            <HeaderIcon
                                onPress={navigation}
                                icon="menuIcon"
                                position="left"
                            />
                        ),
                        headerRight: (props) => (
                            <HeaderIcon
                                onPress={props}
                                icon="notificationIcon"
                                position="right"
                            />
                        ),
                    }}
                    component={displayScreenComponent(stack.name)}
                />
            ))}
        </DrawerStackTwo.Navigator>
    );
}

export function DrawerThreeStackNavigator() {
    return (
        <DrawerStackThree.Navigator>
            {drawerStackJson.confirmRider.map((stack) => (
                <DrawerStackThree.Screen
                    name={stack.name}
                    key={stack.name}
                    component={displayScreenComponent(stack.name)}
                />
            ))}
        </DrawerStackThree.Navigator>
    );
}
export function DrawerFourStackNavigator() {
    return (
        <DrawerStackFour.Navigator>
            {drawerStackJson.settings.map((stack) => (
                <DrawerStackFour.Screen
                    name={stack.name}
                    key={stack.name}
                    component={displayScreenComponent(stack.name)}
                />
            ))}
        </DrawerStackFour.Navigator>
    );
}
export function DrawerFiveStackNavigator() {
    return (
        <DrawerStackFive.Navigator>
            {drawerStackJson.help.map((stack) => (
                <DrawerStackFive.Screen
                    name={stack.name}
                    key={stack.name}
                    component={displayScreenComponent(stack.name)}
                />
            ))}
        </DrawerStackFive.Navigator>
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
