import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { BottomTabParamList } from "../customTypes";
import {
  TabOneNavigator,
  TabTwoNavigator,
  TabThreeNavigator,
  TabFourNavigator,
} from "./TabNavigator";
import colors from "@utils/colors";
import DashboardSvg from "@assets/DashboardSvg";
import OrderSvg from "@assets/OrderSvg";
import StoreSvg from "@assets/StoreSvg";
import ProfileSvg from "@assets/ProfileSvg";
import WelcomeModal from "@components/WelcomeModal";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    <WelcomeModal visible={showModal} onToggle={setShowModal} />;
  }, []);
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Orders"
    >
      <BottomTab.Screen
        name="Dashboard"
        options={{
          tabBarActiveTintColor: colors.mallBlue5,
          tabBarIcon: ({ color }: any) => <DashboardSvg color={color} />,
        }}
        component={TabTwoNavigator}
      />

      <BottomTab.Screen
        name="Orders"
        options={{
          tabBarActiveTintColor: colors.mallBlue5,
          tabBarInactiveTintColor: colors.neutral5,
          tabBarIcon: ({ color }: any) => <OrderSvg color={color} />,
        }}
        component={TabOneNavigator}
      />

      {/* <BottomTab.Screen
        name="Products"
        options={{
          tabBarActiveTintColor: colors.mallBlue5,
          tabBarIcon: ({ color }: any) => <StoreSvg color={color} />,
        }}
        component={TabThreeNavigator}
      /> */}
      {/* <BottomTab.Screen
        name="Profile"
        options={{
          tabBarActiveTintColor: colors.mallBlue5,
          tabBarIcon: ({ color }: any) => <ProfileSvg color={color} />,
        }}
        component={TabFourNavigator}
      /> */}
    </BottomTab.Navigator>
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
