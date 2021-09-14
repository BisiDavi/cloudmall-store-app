import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useSelector } from "react-redux";
import { colors } from "@utils/.";
import { GOOGLE_MAP_API_KEY } from "@env";
import { RootState } from "@store/RootReducer";

const GoogleAutoCompleteInput = ({
    placeholder,
}: GoogleAutoCompleteInputProps) => {
    const { latitude, longitude } = useSelector(
        (state: RootState) => state.coordinates,
    );
    function googlePlaceAutocomplete(data: any, details: any = null) {
        console.log("data", data);
        console.log("details", details);
    }
    const currentLocation = {
        description: "currentLocation",
        geometry: { location: { lat: latitude, lng: longitude } },
    };
    return (
        <GooglePlacesAutocomplete
            placeholder={placeholder}
            onPress={googlePlaceAutocomplete}
            currentLocation={true}
            fetchDetails={true}
            currentLocationLabel="Your current location"
            predefinedPlaces={[currentLocation]}
            query={{
                language: "en",
                key: GOOGLE_MAP_API_KEY,
                components: "country:nigeria",
            }}
            styles={{
                textInputContainer: {
                    borderColor: colors.mallBlue3,
                    borderWidth: 1,
                    borderRadius: 5,
                    //height: 38,
                    margin: 10,
                    marginBottom: 0,
                },
            }}
        />
    );
};

export default GoogleAutoCompleteInput;

interface GoogleAutoCompleteInputProps {
    placeholder: string;
}
