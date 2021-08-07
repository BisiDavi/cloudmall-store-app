import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen";
import MyStoreScreen from "../screens/MyStore";

import OrdersScreen from "../screens/OrdersScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { BottomTabParamList } from "../customTypes";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Orders">
      <BottomTab.Screen name="Orders" component={TabOneNavigator} />
      <BottomTab.Screen name="Dashboard" component={TabTwoNavigator} />
      <BottomTab.Screen name="Mystore" component={TabThreeNavigator} />
      <BottomTab.Screen name="Profile" component={TabFourNavigator} />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="OrdersScreen" component={OrdersScreen} />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="DashboardScreen" component={DashboardScreen} />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen name="MystoreScreen" component={MyStoreScreen} />
    </TabThreeStack.Navigator>
  );
}
const TabFourStack = createStackNavigator();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabFourStack.Navigator>
  );
}
