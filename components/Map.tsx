import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import getDeviceDimensions from "@utils/getDeviceDimensions";
import useCurrentLocation from "@hooks/useCurrentLocation";
import LoadingActivityIndicator from "./LoadingActivityIndicator";

const { deviceHeight, deviceWidth } = getDeviceDimensions();

type locationStatusType = {
    coords: {
        latitude: number;
        longitude: number;
    };
};

const Map = () => {
    const locationStatus: locationStatusType | any = useCurrentLocation();

    const [cordinate, setCoordinate] = useState<any>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        if (locationStatus !== "Waiting.." || null) {
            const parsedLocationStatus = JSON.parse(locationStatus);
            setCoordinate({
                ...cordinate,
                latitude: parsedLocationStatus.coords.latitude,
                longitude: parsedLocationStatus.coords.longitude,
            });
        }
    }, [locationStatus]);

    return (
        <>
            {locationStatus !== "Waiting.." ? (
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
                        coordinate={{
                            latitude: cordinate.latitude,
                            longitude: cordinate.longitude,
                        }}
                    />
                </MapView>
            ) : (
                <View style={styles.loadingView}>
                    <LoadingActivityIndicator />
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        height: deviceHeight * 0.6,
        width: deviceWidth,
        backgroundColor: "#C4C4C4",
        flex: 1,
    },
    loadingView: {
        height: deviceHeight * 0.6,
    },
});

export default Map;
