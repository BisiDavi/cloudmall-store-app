import "react-native-gesture-handler";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Spinner from "react-native-loading-spinner-overlay";

import { RootStackParamList } from "../customTypes";
import BottomTabNavigator from "./BottomTabNavigator";
import {
  OnboardingScreen,
  SignupScreen,
  StoreDetailsScreenOne,
  StoreDetailsScreenTwo,
  StoreAddressScreen,
  LoginScreen,
  AddProductScreen,
  StoreDetailsScreenThree,
} from "@screens/.";
import { hasTokenExpired } from "../utils/.";
import AuthContext from "../context/AuthContext";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { state } = useContext(AuthContext);
  const isSignedIn = hasTokenExpired(state.userToken);

  console.log("state RootNavigator", state);

  return (
    <>
      <Spinner visible={state.isLoading} color="blue" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isSignedIn ? (
          <>
            <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
            <Stack.Screen
              name="StoreDetailsScreenOne"
              options={{
                headerShown: true,
                headerTitleAlign: "center",
                title: "Store Details",
              }}
              component={StoreDetailsScreenOne}
            />
            <Stack.Screen
              name="StoreDetailsScreenTwo"
              options={{
                headerShown: true,
                headerTitleAlign: "center",
                title: "Store Details",
              }}
              component={StoreDetailsScreenTwo}
            />
            <Stack.Screen
              name="StoreDetailsScreenThree"
              options={{
                headerShown: true,
                headerTitleAlign: "center",
                title: "Store Details",
              }}
              component={StoreDetailsScreenThree}
            />
            <Stack.Screen
              name="StoreAddressScreen"
              component={StoreAddressScreen}
            />
           
          </>
        ) : (
          <>
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
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
          </>
        )}
      </Stack.Navigator>
    </>
  );
}
