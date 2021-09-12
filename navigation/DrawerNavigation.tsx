import React from "react";
import { Image } from "react-native-elements";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerStackParamList } from "@customTypes/.";
import drawerJson from "@json/drawer.json";
import { displayScreenComponent } from "@utils/displayScreenComponents";
import displayAsset from "@utils/displayAsset";

export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerStackParamList>();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerRight: () => (
                    <Image
                        style={styles.notificationIcon}
                        source={displayAsset("notificationIcon")}
                    />
                ),
            }}
        >
            {drawerJson.map((drawer: drawer, item) => (
                <Drawer.Screen
                    key={item}
                    name={drawer.name}
                    options={{
                        headerShown: true,
                    }}
                    component={displayScreenComponent(drawer.link)}
                />
            ))}
        </Drawer.Navigator>
    );
}

type drawer = {
    name: any;
    link: keyof DrawerStackParamList | string;
};

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
