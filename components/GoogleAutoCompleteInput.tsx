import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { colors } from "@utils/.";
import { GOOGLE_MAP_API_KEY } from "@env";
import { GetUserCoordinateAction } from "@store/actions/UserCoordinateAction";

const GoogleAutoCompleteInput = ({
    placeholder,
}: GoogleAutoCompleteInputProps) => {
    const dispatch = useDispatch();
    function googlePlaceAutocomplete(data: any, details: any = null) {
        console.log("data GoogleAutoCompleteInput", data);
        console.log("details GoogleAutoCompleteInput", details);
        console.log(
            "location GoogleAutoCompleteInput",
            JSON.stringify(details.geometry.location),
        );
        const { lat, lng } = details.geometry.location;
        dispatch(
            GetUserCoordinateAction({
                latitude: lat,
                longitude: lng,
                landmark: data?.description,
            }),
        );
    }

    return (
        <GooglePlacesAutocomplete
            placeholder={placeholder}
            onPress={googlePlaceAutocomplete}
            fetchDetails={true}
            keyboardShouldPersistTaps={"handled"}
            listUnderlayColor={"blue"}
            minLength={1}
            listViewDisplayed={"auto"}
            predefinedPlacesAlwaysVisible={true}
            filterReverseGeocodingByTypes={[
                "locality",
                "administrative_area_level_3",
            ]}
            GooglePlacesDetailsQuery={{
                fields: "geometry",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            query={{
                language: "en",
                key: GOOGLE_MAP_API_KEY,
                components: "country:ng",
            }}
            onFail={(error) =>
                console.error("GoogleAutoCompleteInput error", error)
            }
            debounce={200}
            styles={{
                textInputContainer: {
                    borderColor: colors.mallBlue3,
                    borderWidth: 1,
                    borderRadius: 5,
                    margin: 10,
                    marginBottom: 0,
                },
                listView: {
                    borderWidth: 1,
                    borderColor: "#ddd",
                    backgroundColor: "#fff",
                    marginHorizontal: 20,
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    marginTop: 10,
                },
            }}
        />
    );
};

export default GoogleAutoCompleteInput;

interface GoogleAutoCompleteInputProps {
    placeholder: string;
}
