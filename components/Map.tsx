import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import getDeviceDimensions from "@utils/getDeviceDimensions";
import useCurrentLocation from "@hooks/useCurrentLocation";
import LoadingActivityIndicator from "./LoadingActivityIndicator";
import { useDispatch, useSelector } from "react-redux";
import { GetUserCoordinateAction } from "@store/actions/UserCoordinateAction";
import { RootState } from "@store/RootReducer";

const { deviceHeight, deviceWidth } = getDeviceDimensions();

type locationStatusType = {
    coords: {
        latitude: number;
        longitude: number;
    };
};

const Map = () => {
    const locationStatus: locationStatusType | any = useCurrentLocation();
    const { longitude, latitude } = useSelector(
        (state: RootState) => state.coordinates,
    );
    Location.installWebGeolocationPolyfill();
    const dispatch = useDispatch();
    const [coordinate, setCoordinate] = useState<any>({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        if (locationStatus !== "Waiting.." || null) {
            const parsedLocationStatus = JSON.parse(locationStatus);
            dispatch(GetUserCoordinateAction(parsedLocationStatus.coords));
            setCoordinate({
                ...coordinate,
                latitude: parsedLocationStatus.coords.latitude,
                longitude: parsedLocationStatus.coords.longitude,
            });
        }
    }, [locationStatus]);

    return (
        <>
            {locationStatus !== "Waiting.." || coordinate.latitude !== 0 ? (
                <MapView
                    style={styles.map}
                    initialRegion={coordinate}
                    showsUserLocation={true}
                    onRegionChangeComplete={(coordinate) =>
                        setCoordinate({ ...coordinate })
                    }
                >
                    <Marker
                        draggable
                        onDragEnd={(e) => {
                            console.log("onDragEnd", e.nativeEvent.coordinate);
                            setCoordinate({
                                ...coordinate,
                                latitude: e.nativeEvent.coordinate,
                            });
                        }}
                        coordinate={{
                            latitude: coordinate.latitude,
                            longitude: coordinate.longitude,
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
        width: deviceWidth,
        backgroundColor: "#C4C4C4",
        flex: 1,
        height: deviceHeight * 0.5,
    },
    loadingView: {
        height: deviceHeight * 0.6,
    },
});

export default Map;
