import "react-native-gesture-handler";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Spinner from "react-native-loading-spinner-overlay";

import { RootStackParamList } from "../customTypes";
import rootNavigationContent from "@json/root-navigation.json";
import { hasTokenExpired } from "../utils/.";
import AuthContext from "../context/AuthContext";
import { displayScreenComponent } from "../utils/displayScreenComponents";

const Stack = createStackNavigator<RootStackParamList>();

type displayStackScreenType = {
  name: keyof RootStackParamList;
  title?: string;
};

function displayStackScreen(stackContent: displayStackScreenType) {
  return stackContent.title ? (
    <Stack.Screen
      key={stackContent.name}
      name={stackContent.name}
      options={{
        headerShown: true,
        headerTitleAlign: "center",
        title: "Store Details",
      }}
      component={displayScreenComponent(stackContent.name)}
    />
  ) : (
    <Stack.Screen
      name={stackContent.name}
      component={displayScreenComponent(stackContent.name)}
    />
  );
}

export default function RootNavigator() {
  const { state } = useContext(AuthContext);
  const isSignedIn = hasTokenExpired(state.userToken);

  return (
    <>
      <Spinner visible={state.isLoading} color="blue" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isSignedIn ? (
          <>
            {rootNavigationContent.privatePage.map((item: any) =>
              displayStackScreen(item)
            )}
          </>
        ) : (
          <>
            {rootNavigationContent.publicPage.map((item: any) =>
              displayStackScreen(item)
            )}
          </>
        )}
      </Stack.Navigator>
    </>
  );
}
