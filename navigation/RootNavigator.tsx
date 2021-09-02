import "react-native-gesture-handler";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import Spinner from "react-native-loading-spinner-overlay";
import { RootStackParamList } from "@customTypes/.";
import rootNavigationContent from "@json/root-navigation.json";
import { hasTokenExpired } from "@utils/.";
import AuthContext from "@context/AuthContext";
import { displayScreenComponent } from "@utils/displayScreenComponents";
import BottomTabNavigator from "./BottomTabNavigator";
import { setClientToken } from "@network/axiosInstance";
import { RootState } from "@store/RootReducer";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { state } = useContext(AuthContext);
  const { completed } = useSelector(
    (storeState: RootState) => storeState.setupStore
  );
  console.log("completed", completed);
  const isSignedIn = hasTokenExpired(state.userToken);

  useEffect(() => {
    if (!isSignedIn) {
      setClientToken(state.userToken);
    }
  }, [isSignedIn]);

  function displayStackScreen(
    stackContent: displayStackScreenType,
    index: number
  ) {
    return stackContent.title ? (
      <Stack.Screen
        key={`${stackContent.name}-${index}`}
        name={stackContent.name}
        options={{
          headerShown: true,
          headerTitleAlign: stackContent?.position
            ? stackContent.position
            : "center",
          headerTitleStyle: {
            fontFamily: "RobotoBold",
          },
          title: stackContent.title,
        }}
        component={displayScreenComponent(stackContent.name)}
      />
    ) : (
      <Stack.Screen
        key={`${stackContent.name}-${index}`}
        name={stackContent.name}
        component={displayScreenComponent(stackContent.name)}
      />
    );
  }

  return (
    <>
      <Spinner visible={state.isLoading} color="blue" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isSignedIn && !completed ? (
          <>
            {rootNavigationContent.privatePage.map((item: any, index) =>
              displayStackScreen(item, index)
            )}
            <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
          </>
        ) : !isSignedIn && completed ? (
          <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
        ) : (
          <>
            {rootNavigationContent.publicPage.map((item: any, index) =>
              displayStackScreen(item, index)
            )}
          </>
        )}
      </Stack.Navigator>
    </>
  );
}

type displayStackScreenType = {
  name: keyof RootStackParamList;
  title?: string;
  position: "left";
};
