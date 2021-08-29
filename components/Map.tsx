import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text } from "react-native";

const Map = () => {
  const [cordinate, setCoordinate] = useState({
    latitude: 7.4905,
    longitude: 4.5521,
  });
  return (
    <MapView
      initialRegion={{
        latitude: 7.4905,
        longitude: 4.5521,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker draggable coordinate={cordinate} />
    </MapView>
  );
};

export default Map;
