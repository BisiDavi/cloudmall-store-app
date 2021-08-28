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
import SettlementDetailsForm from "@components/forms/SettlementDetailsForm";

export default function SettlementDetailsScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenOne">) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <ProgressIndicator selected={3} />
          <SettlementDetailsForm navigation={navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
  },
});
