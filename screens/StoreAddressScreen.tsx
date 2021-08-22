import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Button } from "react-native-elements";

import { RootStackParamList } from "@customTypes/.";
import { useStoreSetupNavigation } from "@hooks/.";
import getDeviceDimensions from "../utils/getDeviceDimensions";

const { deviceHeight, deviceWidth } = getDeviceDimensions();

export default function StoreAddressScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreAddressScreen">) {
  useStoreSetupNavigation(navigation);
  console.log("height dimension", Dimensions.get("window").height);
  const [cordinate, setCoordinate] = useState({
    latitude: 7.4905,
    longitude: 4.5521,
  });
  function googlePlaceAutocomplete(data: any, details: any = null) {
    console.log("data", data);
    console.log("details", details);
  }
  return (
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
          onPress={() => navigation.navigate("StoreDetailsScreenTwo")}
          title="Confirm Address"
        />
      </View>
    </View>
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
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    display: "flex",
    justifyContent: "flex-start",
    // alignItems: "center",
    height: deviceHeight * 0.4,
    width: deviceWidth,
    backgroundColor: "red",
  },
  input: {
    height: 40,
    width: deviceWidth,
    marginTop: 10,
  },
  button: {
    width: 250,
    backgroundColor: "blue",
    margin: 0,
  },
});
