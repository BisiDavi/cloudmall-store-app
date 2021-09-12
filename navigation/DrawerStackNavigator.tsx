import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import drawerStackJson from "@json/drawer-stack.json";
import { displayScreenComponent } from "@utils/displayScreenComponents";
import HeaderIcon from "@utils/headerIcon";
import colors from "@utils/colors";

const DrawerStackOne = createStackNavigator();
const DrawerStackTwo = createStackNavigator();
const DrawerStackThree = createStackNavigator();
const DrawerStackFour = createStackNavigator();
const DrawerStackFive = createStackNavigator();

export function DrawerOneStackNavigator({ navigation }: any) {
    return (
        <DrawerStackOne.Navigator>
            {drawerStackJson.myStore.map((stack) => (
                <DrawerStackOne.Screen
                    name={stack.name}
                    key={stack.name}
                    options={{
                        headerPressColor: colors.mallBlue5,
                        headerTintColor: colors.cloudOrange5,
                        title: stack.title,
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
                    component={displayScreenComponent(stack.name)}
                />
            ))}
        </DrawerStackTwo.Navigator>
    );
}

export function DrawerThreeStackNavigator({ navigation }: any) {
    return (
        <DrawerStackThree.Navigator>
            {drawerStackJson.confirmRider.map((stack) => (
                <DrawerStackThree.Screen
                    name={stack.name}
                    key={stack.name}
                    options={{
                        headerShown: true,
                        title: stack.title,
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
                    component={displayScreenComponent(stack.name)}
                />
            ))}
        </DrawerStackThree.Navigator>
    );
}
export function DrawerFourStackNavigator({ navigation }: any) {
    return (
        <DrawerStackFour.Navigator>
            {drawerStackJson.settings.map((stack) => (
                <DrawerStackFour.Screen
                    name={stack.name}
                    key={stack.name}
                    options={{
                        headerShown: true,
                        title: stack.title,
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
                                onPress={navigation}
                                attributes={props}
                                position="right"
                            />
                        ),
                    }}
                    component={displayScreenComponent(stack.name)}
                />
            ))}
        </DrawerStackFour.Navigator>
    );
}

export function DrawerFiveStackNavigator({ navigation }: any) {
    return (
        <DrawerStackFive.Navigator>
            {drawerStackJson.help.map((stack) => (
                <DrawerStackFour.Screen
                    name={stack.name}
                    key={stack.name}
                    options={{
                        headerShown: true,
                        title: stack.title,
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
                    component={displayScreenComponent(stack.name)}
                />
            ))}
        </DrawerStackFive.Navigator>
    );
}
