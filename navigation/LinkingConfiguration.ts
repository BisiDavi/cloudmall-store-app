import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              OrdersScreen: "orders",
            },
          },
          TabTwo: {
            screens: {
              DashboardScreen: "dashboard",
            },
          },
          TabThree: {
            screens: {
              MystoreScreen: "mystore",
            },
          },
          TabFour: {
            screens: {
              ProfileScreen: "profile",
            },
          },
        },
      },
      SignupScreen: "*",
    },
  },
};
