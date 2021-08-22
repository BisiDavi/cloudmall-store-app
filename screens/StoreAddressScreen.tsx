import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Button } from "react-native-elements";
import InputField from "@components/InputField";

import { RootStackParamList } from "@customTypes/.";

export default function StoreAddressScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreAddressScreen">) {
  const [cordinate, setCoordinate] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  function googlePlaceAutocomplete(data: any, details: any) {
    console.log("data", data);
    console.log("details", details);
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
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
            key:""
          }}
        />
        {/* <InputField label="Choose your location on the map" /> */}
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
    height: 320,
    backgroundColor: "#C4C4C4",
    width: "100%",
  },
  inputView: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 250,
  },
});
