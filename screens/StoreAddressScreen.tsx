import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Map from "@components/Map";
import { Button, Text } from "react-native-elements";

import { RootStackParamList } from "@customTypes/.";
import { useStoreSetupNavigation } from "@hooks/.";
import { getDeviceDimensions, colors } from "@utils/.";
import GoogleAutoCompleteInput from "@components/GoogleAutoCompleteInput";

const { deviceHeight, deviceWidth } = getDeviceDimensions();

export default function StoreAddressScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreAddressScreen">) {
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);

  function nextPageHandler() {
    onBoardingNextScreen(2, false);
    navigation.navigate("StoreDetailsScreenTwo");
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <View style={styles.container}>
        <View style={styles.mapView}>
          <Map />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.text}>Address of Store</Text>
          <GoogleAutoCompleteInput placeholder="Choose your location on the map" />
          <View style={styles.buttonView}>
            <Button
              buttonStyle={styles.button}
              onPress={nextPageHandler}
              title="Confirm Address"
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 0,
  },
  mapView: {
    marginTop: 0,
    height: deviceHeight * 0.55,
    width: deviceWidth,
    backgroundColor: "#C4C4C4",
  },
  text: {
    fontSize: 14,
    fontFamily: "RobotoRegular",
    marginLeft: 10,
  },
  inputView: {
    padding: 20,
    paddingTop: 10,
    display: "flex",
    justifyContent: "flex-start",
    width: deviceWidth,
    backgroundColor: "white",
    height: deviceHeight * 0.3,
  },
  button: {
    display: "flex",
    width: deviceWidth * 0.6,
    backgroundColor: colors.mallBlue5,
    marginTop: 0,
  },
  buttonView: {
    display: "flex",
    alignItems: "center",
  },
});
