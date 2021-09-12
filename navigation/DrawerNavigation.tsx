import React from "react";
import { Image } from "react-native-elements";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerStackParamList } from "@customTypes/.";
import drawerJson from "@json/drawer.json";
import { displayScreenComponent } from "@utils/displayScreenComponents";
import displayAsset from "@utils/displayAsset";
import displayNavigators from "@utils/displayNavigators";
import ProfileIcon from "@components/ProfileIcon";

export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerStackParamList>();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <ProfileIcon {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: "white",
                drawerLabelStyle: {
                    fontFamily: "RobotoBold",
                    fontSize: 16,
                },
                headerRight: () => (
                    <Image
                        style={styles.notificationIcon}
                        source={displayAsset("notificationIcon")}
                    />
                ),
            }}
        >
            {drawerJson.map((drawer: drawer, item) => {
                const displayDrawer = drawer?.stack
                    ? displayNavigators(drawer.stack)
                    : displayScreenComponent(drawer.link);
                return (
                    <Drawer.Screen
                        key={item}
                        name={drawer.name}
                        component={displayDrawer}
                    />
                );
            })}
        </Drawer.Navigator>
    );
}

type drawer = {
    name: any;
    link: keyof DrawerStackParamList | string;
    stack?: string;
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
