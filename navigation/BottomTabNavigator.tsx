import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen";
import MyStoreScreen from "../screens/MyStore";

import OrdersScreen from "../screens/OrdersScreen";
import ProfileScreen from "../screens/ProfileScreen";
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
      <BottomTab.Screen name="Mystore" component={TabThreeNavigator} />
      <BottomTab.Screen name="Profile" component={TabFourNavigator} />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
    >
      <TabOneStack.Screen
        name="Orders"
        options={{
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
        component={OrdersScreen}
      />
    </TabOneStack.Navigator>
  );
}

const styles = StyleSheet.create({
  taboneScreen: {
    justifyContent: "center",
  },
});

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{ headerShown: false }}>
      <TabTwoStack.Screen name="DashboardScreen" component={DashboardScreen} />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator screenOptions={{ headerShown: false }}>
      <TabThreeStack.Screen name="MystoreScreen" component={MyStoreScreen} />
    </TabThreeStack.Navigator>
  );
}
const TabFourStack = createStackNavigator();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator screenOptions={{ headerShown: false }}>
      <TabFourStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabFourStack.Navigator>
  );
}
