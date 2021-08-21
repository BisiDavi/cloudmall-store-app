import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  TabOneNavigator,
  TabTwoNavigator,
  TabThreeNavigator,
  TabFourNavigator,
} from "@navigation/TabNavigator";
import StoresIcon from "@assets/stores.png";
import orderIcon from "@assets/orders.png";

import { BottomTabParamList } from "../customTypes";

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
          tabBarIcon: ({ tintColor }: any) => (
            <Image
              source={orderIcon}
              fadeDuration={0}
              style={{ width: 25, height: 25, tintColor: tintColor }}
            />
          ),
        }}
        component={TabOneNavigator}
      />
      <BottomTab.Screen name="Dashboard" component={TabTwoNavigator} />
      <BottomTab.Screen
        name="MyStore"
        options={{
          tabBarIcon: ({ tintColor }:any) => (
            <Image
              source={StoresIcon}
              fadeDuration={0}
              style={{ width: 25, height: 25, tintColor: tintColor }}
            />
          ),
        }}
        component={TabThreeNavigator}
      />
      <BottomTab.Screen name="Profile" component={TabFourNavigator} />
    </BottomTab.Navigator>
  );
}
