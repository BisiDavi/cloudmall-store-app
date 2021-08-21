import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  TabOneNavigator,
  TabTwoNavigator,
  TabThreeNavigator,
  TabFourNavigator,
} from "@navigation/TabNavigator";
import { BottomTabParamList } from "../customTypes";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Orders"
    >
      <BottomTab.Screen name="Orders" component={TabOneNavigator} />
      <BottomTab.Screen name="Dashboard" component={TabTwoNavigator} />
      <BottomTab.Screen name="MyStore" component={TabThreeNavigator} />
      <BottomTab.Screen name="Profile" component={TabFourNavigator} />
    </BottomTab.Navigator>
  );
}
