import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoresIcon from "@assets/stores.png";
import orderIcon from "@assets/orders.png";
import { BottomTabParamList } from "../customTypes";
import {
  TabOneNavigator,
  TabTwoNavigator,
  TabThreeNavigator,
  TabFourNavigator,
} from "./TabNavigator";
import displayAsset from "@utils/displayAsset";
import colors from "@utils/colors";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Orders"
    >
      <BottomTab.Screen
        name="Orders"
        options={{
          tabBarActiveTintColor: colors.mallBlue5,
          tabBarIcon: ({ tintColor }: any) => displayAsset("ordersIcon"),
        }}
        component={TabOneNavigator}
      />
      <BottomTab.Screen
        name="Dashboard"
        options={{
          tabBarActiveTintColor: colors.accentRed,
          tabBarIcon: ({ tintColor }: any) => displayAsset("dashboardIcon"),
        }}
        component={TabTwoNavigator}
      />
      <BottomTab.Screen
        name="MyStore"
        options={{
          tabBarActiveTintColor: colors.mallBlue5,
          tabBarIcon: ({ tintColor }: any) => displayAsset("storeIcon"),
        }}
        component={TabThreeNavigator}
      />
      <BottomTab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ red }: any) => displayAsset("profileIcon"),
        }}
        component={TabFourNavigator}
      />
    </BottomTab.Navigator>
  );
}
