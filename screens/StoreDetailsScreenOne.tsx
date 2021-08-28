import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { RootStackParamList } from "@customTypes/.";
import ProgressIndicator from "@components/ProgressIndicator";
import StoreDetailsFormOne from "@components/forms/StoreDetailsFormOne";

export default function StoreDetailsScreenOne({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenOne">) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <ProgressIndicator selected={1} />
          <StoreDetailsFormOne navigation={navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    margin: "auto",
    alignItems: "center",
  },
});
