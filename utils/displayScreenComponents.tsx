import BottomTabNavigator from "@navigation/BottomTabNavigator";
import { RootStackParamList } from "../customTypes";

import {
  MyStoreScreen,
  OrdersScreen,
  ProfileScreen,
  ViewStoreScreen,
  EditProductScreen,
  DashboardScreen,
  AddProductScreen,
  OnboardingScreen,
  SignupScreen,
  LoginScreen,
  StoreDetailsScreenOne,
  StoreDetailsScreenTwo,
  StoreDetailsScreenThree,
  StoreAddressScreen,
} from "@screens/.";

export function displayScreenComponent(name: string | RootStackParamList): any {
  switch (name) {
    case "OrderScreen":
      return OrdersScreen;
    case "AddProductScreen":
      return AddProductScreen;
    case "ViewStoreScreen":
      return ViewStoreScreen;
    case "EditProductScreen":
      return EditProductScreen;
    case "DashboardScreen":
      return DashboardScreen;
    case "MyStoreScreen":
      return MyStoreScreen;
    case "ProfileScreen":
      return ProfileScreen;
    case "OnboardingScreen":
      return OnboardingScreen;
    case "SignupScreen":
      return SignupScreen;
    case "LoginScreen":
      return LoginScreen;
    case "BottomNav":
      return BottomTabNavigator;
    case "StoreDetailsScreenOne":
      return StoreDetailsScreenOne;
    case "StoreDetailsScreenTwo":
      return StoreDetailsScreenTwo;
    case "StoreDetailsScreenThree":
      return StoreDetailsScreenThree;
    case "StoreAddressScreen":
      return StoreAddressScreen;
    default:
      return null;
  }
}
