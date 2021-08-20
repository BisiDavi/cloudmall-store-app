import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../customTypes";
import BottomTabNavigator from "./BottomTabNavigator";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignupScreen from "../screens/SignupScreen";
import StoreDetailsScreenOne from "../screens/StoreDetailsScreenOne";
import StoreDetailsScreenTwo from "../screens/StoreDetailsScreenTwo";
import StoreAddressScreen from "../screens/StoreAddressScreen";
import LoginScreen from "@screens/LoginScreen";
import StoreDetailsScreenThree from "@screens/StoreDetailsScreenThree";
import { getAuthtoken, hasTokenExpired } from "@utils/.";


const Stack = createStackNavigator<RootStackParamList>();

function isUserSignedin(){
  
}

export default function RootNavigator() {  
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
