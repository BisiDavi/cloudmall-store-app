import "react-native-gesture-handler";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import { RootStackParamList } from "@customTypes/.";
import rootNavigationContent from "@json/root-navigation.json";
import { hasTokenExpired, colors } from "@utils/.";
import AuthContext from "@context/AuthContext";
import { displayScreenComponent } from "@utils/displayScreenComponents";
import BottomTabNavigator from "./BottomTabNavigator";
import { setClientToken } from "@network/axiosInstance";
import { RootState } from "@store/RootReducer";
import { getsignedUserEmail } from "@utils/hasTokenExpired";
import checkExistingStore from "@utils/checkExistingStore";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { state } = useContext(AuthContext);
  const { completed } = useSelector(
    (storeState: RootState) => storeState.setupStore
  );
  const navigation = useNavigation();
  const isSignedIn = hasTokenExpired(state.userToken);

  useEffect(() => {
    if (state.userToken) {
      const userEmail = getsignedUserEmail(state.userToken);
      if (userEmail && !isSignedIn) {
        setClientToken(state.userToken);
        checkExistingStore(navigation, userEmail);
      }
    }
  }, [state]);

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
            fontFamily: "MontserratBold",
            color: colors.cloudOrange5,
            fontSize: 18,
            lineHeight: 28,
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isSignedIn && !completed ? (
          <Stack.Group>
            {rootNavigationContent.privatePage.map((item: any, index) =>
              displayStackScreen(item, index)
            )}
            <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
          </Stack.Group>
        ) : !isSignedIn && completed ? (
          <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
        ) : (
          rootNavigationContent.publicPage.map((item: any, index) =>
            displayStackScreen(item, index)
          )
        )}
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: 20,
    width: 20,
    marginLeft: 20,
  },
  notificationIcon: {
    marginRight: 20,
    height: 20,
    width: 20,
  },
});

type displayStackScreenType = {
  name: keyof RootStackParamList;
  title?: string;
  position: "left";
};
