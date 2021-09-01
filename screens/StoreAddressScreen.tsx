import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import Map from "@components/Map";
import { Button, Text } from "react-native-elements";

import { RootStackParamList } from "@customTypes/.";
import { useStoreSetupNavigation } from "@hooks/.";
import { getDeviceDimensions, colors } from "@utils/.";
import GoogleAutoCompleteInput from "@components/GoogleAutoCompleteInput";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <ScrollView>
        <View style={styles.container}>
          <Map />
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 0,
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
    flexDirection: "column",
    width: deviceWidth,
    backgroundColor: "white",
    height: deviceHeight * 0.3,
  },
  button: {
    display: "flex",
    width: deviceWidth * 0.6,
    backgroundColor: colors.mallBlue5,
  },
  buttonView: {
    display: "flex",
    alignItems: "center",
    height: deviceHeight * 0.2,
    justifyContent: "center",
    marginTop: 30,
  },
});
