import AddProductScreen from "@screens/AddProductScreen";
import AmountPaidScreen from "@screens/AmountPaidScreen";
import AvailableBalanceScreen from "@screens/AvailableBalanceScreen";
import DashboardScreen from "@screens/DashboardScreen";
import EditProductScreen from "@screens/EditProductScreen";
import LoginScreen from "@screens/LoginScreen";
import MyStoreScreen from "@screens/ProductScreen";
import OnboardingScreen from "@screens/OnboardingScreen";
import OrdersScreen from "@screens/OrdersScreen";
import ProfileScreen from "@screens/ProfileScreen";
import SettlementDetailsScreen from "@screens/SettlementDetailsScreen";
import SignupScreen from "@screens/SignupScreen";
import StatisticsScreen from "@screens/StatisticsScreen";
import StoreAddressScreen from "@screens/StoreAddressScreen";
import StoreDetailsScreenOne from "@screens/StoreDetailsScreenOne";
import StoreDetailsScreenTwo from "@screens/StoreDetailsScreenTwo";
import ViewStoreScreen from "@screens/ViewStoreScreen";
import { RootStackParamList } from "../customTypes";
import UploadStoreImage from "@screens/UploadStoreImageScreen";
import ProductScreen from "@screens/ProductScreen";
import AddProductScreenMethod from "@screens/AddProductScreenMethod";
import FoodCategoryScreen from "@screens/FoodCategoryScreen";

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
    case "ProductScreen":
      return ProductScreen;
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
    case "UploadStoreImage":
      return UploadStoreImage;
    case "StoreAddressScreen":
      return StoreAddressScreen;
    case "AvailableBalanceScreen":
      return AvailableBalanceScreen;
    case "AmountPaidScreen":
      return AmountPaidScreen;
    case "StatisticsScreen":
      return StatisticsScreen;
    case "SettlementDetailsScreen":
      return SettlementDetailsScreen;
    case "AddProductScreenMethod":
      return AddProductScreenMethod;
    case "FoodCategoryScreen":
      return FoodCategoryScreen;
    default:
      return null;
  }
}
