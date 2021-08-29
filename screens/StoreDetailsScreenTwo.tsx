import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { RootStackParamList } from "@customTypes/.";
import { useStoreSetupNavigation } from "@hooks/.";
import ProgressIndicator from "@components/ProgressIndicator";
import StoreDetailsFormTwo from "@components/forms/StoreDetailsFormTwo";

const radioField = [{ label: "Instore" }, { label: "Pickup" }];

export default function StoreDetailsScreenTwo({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenTwo">) {
  const [loading, setLoading] = useState(false);
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <ProgressIndicator selected={2} />
          <StoreDetailsFormTwo navigation={navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputField: {
    marginTop: 1,
    padding: 0,
  },
  typeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 0,
    marginTop: 20,
    marginBottom: 10,
  },
  storeTypeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  iconImage: {
    height: 20,
    width: 10,
  },
  input: {
    width: 100,
    margin: 0,
    padding: 0,
  },
  addressField: {
    height: 70,
  },
  button: {
    width: 250,
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
