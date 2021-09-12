import React, { useState, useEffect } from "react";
import MapView, { LatLng, Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import getDeviceDimensions from "@utils/getDeviceDimensions";

const { deviceHeight, deviceWidth } = getDeviceDimensions();

type mapType = {
    latitude: LatLng;
    longitude: LatLng;
    latitudeDelta: LatLng;
    longitudeDelta: LatLng;
};

const Map = () => {
	useEffect(() => {
		navigator.geolocation.
	}, [])
    const [cordinate, setCoordinate] = useState<mapType>({
        latitude: 7.4905,
        longitude: 4.5521,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });
    return (
        <MapView
            style={styles.map}
            initialRegion={cordinate}
            showsUserLocation
            onRegionChangeComplete={(cordinate) => {
                console.log("cordinate", cordinate);
                setCoordinate({ ...cordinate });
            }}
        >
            <Marker
                draggable
                onDragEnd={(e) => {
                    console.log("onDragEnd", e.nativeEvent.coordinate);
                    setCoordinate({
                        ...cordinate,
                        latitude: e.nativeEvent.coordinate,
                    });
                }}
                coordinate={{ latitude: 7.4905, longitude: 4.5521 }}
            />
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
