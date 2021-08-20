import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoadingActivityIndicator from "../components/LoadingActivityIndicator";
import RootNavigator from "./RootNavigator";

export default function Navigation() {
  return (
    <NavigationContainer fallback={<LoadingActivityIndicator />}>
      <RootNavigator />
    </NavigationContainer>
  );
}
