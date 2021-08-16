import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../customTypes";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomTabNavigator from "./BottomTabNavigator";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignupScreen from "../screens/SignupScreen";
import StoreDetailsScreenOne from "../screens/StoreDetailsScreenOne";
import StoreDetailsScreenTwo from "../screens/StoreDetailsScreenTwo";
import StoreAddressScreen from "../screens/StoreAddressScreen";
import LoadingActivityIndicator from "../components/LoadingActivityIndicator";
import LoginScreen from "@screens/LoginScreen";
import StoreDetailsScreenThree from "@screens/StoreDetailsScreenThree";

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen
        name="SignupScreen"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: "Signup",
        }}
        component={SignupScreen}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: "Login",
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="StoreDetailsScreenOne"
        options={{ headerShown: true, title: "Store Details" }}
        component={StoreDetailsScreenOne}
      />
      <Stack.Screen
        name="StoreDetailsScreenTwo"
        options={{ headerShown: true, title: "Store Details" }}
        component={StoreDetailsScreenTwo}
      />
      <Stack.Screen
        name="StoreDetailsScreenThree"
        options={{ headerShown: true, title: "Store Details" }}
        component={StoreDetailsScreenThree}
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
      fallback={<LoadingActivityIndicator />}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
