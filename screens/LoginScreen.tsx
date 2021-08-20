import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from "react-native";

import { RootStackParamList } from "customTypes";
import LoginForm from "@components/loginForm";

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "LoginScreen"
>;

type LoginScreenRouteProps = RouteProp<RootStackParamList, "LoginScreen">;

type Props = {
  route: LoginScreenRouteProps;
  navigation: LoginScreenNavigationProps;
};

export default function LoginScreen({ navigation }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <LoginForm navigation={navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
