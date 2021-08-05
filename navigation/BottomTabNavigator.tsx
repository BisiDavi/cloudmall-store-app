import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen";
import MyStoreScreen from "../screens/MyStore";

import OrdersScreen from "../screens/OrdersScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { BottomTabParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Orders">
      <BottomTab.Screen name="Orders" component={TabOneNavigator} />
      <BottomTab.Screen name="Dashboard" component={TabTwoNavigator} />
      <BottomTab.Screen name="Mystore" component={TabThreeNavigator} />
      <BottomTab.Screen name="Profile" component={TabOFourNavigator} />
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

function TabTwoNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="DashboardScreen" component={DashboardScreen} />
    </TabOneStack.Navigator>
  );
}

function TabThreeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="MystoreScreen" component={MyStoreScreen} />
    </TabOneStack.Navigator>
  );
}

function TabOFourNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabOneStack.Navigator>
  );
}
