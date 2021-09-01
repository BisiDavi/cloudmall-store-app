import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import getDeviceDimensions from "@utils/getDeviceDimensions";

const { deviceHeight, deviceWidth } = getDeviceDimensions();

const Map = () => {
  const [cordinate, setCoordinate] = useState({
    latitude: 7.4905,
    longitude: 4.5521,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  console.log("coordinates", cordinate);
  return (
    <MapView
      style={styles.map}
      initialRegion={cordinate}
      showsUserLocation
      onRegionChangeComplete={(cordinate) => setCoordinate(cordinate)}
    >
      <Marker draggable coordinate={{ latitude: 7.4905, longitude: 4.5521 }} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: deviceHeight * 0.6,
    width: deviceWidth,
    backgroundColor: "#C4C4C4",
    flex: 1,
  },
});

export default Map;
