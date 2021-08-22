import AddProductScreen from "@screens/AddProductScreen";
import AmountPaidScreen from "@screens/AmountPaidScreen";
import AvailableBalanceScreen from "@screens/AvailableBalanceScreen";
import DashboardScreen from "@screens/DashboardScreen";
import EditProductScreen from "@screens/EditProductScreen";
import LoginScreen from "@screens/LoginScreen";
import MyStoreScreen from "@screens/MyStoreScreen";
import OnboardingScreen from "@screens/OnboardingScreen";
import OrdersScreen from "@screens/OrdersScreen";
import ProfileScreen from "@screens/ProfileScreen";
import SignupScreen from "@screens/SignupScreen";
import StatisticsScreen from "@screens/StatisticsScreen";
import StoreAddressScreen from "@screens/StoreAddressScreen";
import StoreDetailsScreenOne from "@screens/StoreDetailsScreenOne";
import StoreDetailsScreenThree from "@screens/StoreDetailsScreenThree";
import StoreDetailsScreenTwo from "@screens/StoreDetailsScreenTwo";
import ViewStoreScreen from "@screens/ViewStoreScreen";
import { RootStackParamList } from "../customTypes";

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
    case "StoreDetailsScreenOne":
      return StoreDetailsScreenOne;
    case "StoreDetailsScreenTwo":
      return StoreDetailsScreenTwo;
    case "StoreDetailsScreenThree":
      return StoreDetailsScreenThree;
    case "StoreAddressScreen":
      return StoreAddressScreen;
    case "AvailableBalanceScreen":
      return AvailableBalanceScreen;
    case "AmountPaidScreen":
      return AmountPaidScreen;
    case "StatisticsScreen":
      return StatisticsScreen;
    default:
      return null;
  }
}
