import {
  MyStoreScreen,
  OrdersScreen,
  ProfileScreen,
  ViewStoreScreen,
  EditProductScreen,
  DashboardScreen,
  AddProductScreen,
} from "@screens/.";

export function displayScreenComponent(name: string): any {
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
    default:
      return null;
  }
}
