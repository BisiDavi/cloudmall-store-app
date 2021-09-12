import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerStackParamList } from "@customTypes/.";
import drawerJson from "@json/drawer.json";
import { displayScreenComponent } from "@utils/displayScreenComponents";

export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerStackParamList>();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {drawerJson.map((drawer: drawer, item) => (
                <Drawer.Screen
                    key={item}
                    name={drawer.name}
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
