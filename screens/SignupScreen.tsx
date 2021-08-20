import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

import { RootStackParamList } from "customTypes";
import SignupForm from "@components/signupForm";

type SignupScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "SignupScreen"
>;

type signupScreenProps = {
  navigation: SignupScreenNavigationProps;
};

export default function SignupScreen({ navigation }: signupScreenProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <SignupForm navigation={navigation} />
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
