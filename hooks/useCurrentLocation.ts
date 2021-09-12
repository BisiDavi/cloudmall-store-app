import { useState, useEffect } from "react";
import * as Location from "expo-location";

type locationType = null | Location.LocationObject;
type errorMsgType = null | string;

export default function useCurrentLocation() {
    const [location, setLocation] = useState<locationType>(null);
    const [errorMsg, setErrorMsg] = useState<errorMsgType>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location: Location.LocationObject =
                await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    console.log("location", location);

    let locationStatus = "Waiting..";
    if (errorMsg) {
        locationStatus = errorMsg;
    } else if (location) {
        locationStatus = JSON.stringify(location);
    }

    return { locationStatus };
}
