import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerStackParamList } from "@customTypes/.";
import drawerJson from "@json/drawer.json";
import { displayScreenComponent } from "@utils/displayScreenComponents";

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator<DrawerStackParamList>();

  return (
    <Drawer.Navigator>
      {drawerJson.map((drawer, item) => (
        <Drawer.Screen
          key={item}
          title={drawer.name}
          name={drawer.link}
          component={displayScreenComponent(drawer.link)}
        />
      ))}
    </Drawer.Navigator>
  );
}
