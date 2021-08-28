import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Button, Text } from "react-native-elements";

import { RootStackParamList } from "@customTypes/.";
import { useStoreSetupNavigation } from "@hooks/.";
import getDeviceDimensions from "../utils/getDeviceDimensions";

const { deviceHeight, deviceWidth } = getDeviceDimensions();

export default function StoreAddressScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreAddressScreen">) {
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);

  const [cordinate, setCoordinate] = useState({
    latitude: 7.4905,
    longitude: 4.5521,
  });
  function googlePlaceAutocomplete(data: any, details: any = null) {
    console.log("data", data);
    console.log("details", details);
  }

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
          <MapView
            style={styles.mapView}
            initialRegion={{
              latitude: 7.4905,
              longitude: 4.5521,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker draggable coordinate={cordinate} />
          </MapView>
          <View style={styles.inputView}>
            <Text>Address of Store</Text>
            <GooglePlacesAutocomplete
              placeholder="Choose your location on the map"
              onPress={googlePlaceAutocomplete}
              query={{
                language: "en",
                key: "",
                components: "country:nigeria",
              }}
              styles={styles.input}
            />
            <Button
              buttonStyle={styles.button}
              onPress={nextPageHandler}
              title="Confirm Address"
            />
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
  mapView: {
    marginTop: 0,
    height: deviceHeight * 0.6,
    width: deviceWidth,
    backgroundColor: "#C4C4C4",
  },
  inputView: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    height: deviceHeight * 0.3,
    width: deviceWidth,
    backgroundColor: "white",
  },
  input: {
    height: 40,
    width: deviceWidth,
    marginTop: 10,
    marginBottom: 0,
    borderColor:'blue',
    backgroundColor:'red'
  },
  button: {
    justifyContent: "center",
    margin: 40,
  },
});
