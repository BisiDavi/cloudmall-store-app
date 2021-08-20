import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      BottomNav: {
        screens: {
          Orders: {
            screens: {
              OrdersScreen: {
                path: "orders",
              },
            },
          },
          Dashboard: {
            screens: {
              DashboardScreen: "*",
            },
          },
          Mystore: {
            screens: {
              MystoreScreen: "*",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "*",
            },
          },
        },
      },
      SignupScreen: "*",
      OnboardingScreen: "*",
      LoginScreen: "*",
      StoreDetailsScreenOne: "*",
      StoreDetailsScreenTwo: "*",
      StoreDetailsScreenThree: "*",
      StoreAddressScreen: "*",
    },
  },
};
