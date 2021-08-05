import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthScreen from "../screens/AuthScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import BottomTabNavigator from "./BottomTabNavigator";
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      fallback={<Text>Loading ...</Text>}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
