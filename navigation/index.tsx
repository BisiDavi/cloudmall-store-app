import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomTabNavigator from "./BottomTabNavigator";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignupScreen from "../screens/SignupScreen";
import StoreDetailsScreenOne from "../screens/StoreDetailsScreenOne";
import StoreDetailsScreenTwo from "../screens/StoreDetailsScreenTwo";
import StoreAddressScreen from "../screens/StoreAddressScreen";

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen
        name="StoreDetailsScreenOne"
        component={StoreDetailsScreenOne}
      />
      <Stack.Screen
        name="StoreDetailsScreenTwo"
        component={StoreDetailsScreenTwo}
      />
      <Stack.Screen name="StoreAddressScreen" component={StoreAddressScreen} />
      <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      fallback={<Text>Loading ...</Text>}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
