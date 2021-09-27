import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { colors, showToast } from "@utils/.";
import { GOOGLE_MAP_API_KEY } from "@env";
import { GetUserCoordinateAction } from "@store/actions/UserCoordinateAction";
import { StoreAddressCoordinatesAction } from "@store/actions/StoreDetailsAction";

const GoogleAutoCompleteInput = ({
    placeholder,
}: GoogleAutoCompleteInputProps) => {
    const dispatch = useDispatch();

    function googlePlaceAutocomplete(data: any, details: any = null) {
        console.log("data", data);
        const { lat, lng } = details.geometry.location;
        dispatch(
            StoreAddressCoordinatesAction({
                latitude: lat,
                longitude: lng,
            }),
        );
        dispatch(
            GetUserCoordinateAction({
                latitude: lat,
                longitude: lng,
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
            enableTypingLoader={true}
            renderTypingLoader={() => (
                <ActivityIndicator
                    style={{ marginTop: 20 }}
                    color={colors.cloudOrange5}
                    animating={true}
                />
            )}
            onNotFound={() => showToast("Oops, address not found")}
            onTimeout={() => showToast("Oops, timeout, try again")}
            listViewDisplayed={true}
            predefinedPlacesAlwaysVisible={true}
            filterReverseGeocodingByTypes={[
                "locality",
                "administrative_area_level_3",
            ]}
            isRowScrollable={true}
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
                showToast(`Oops, an error occured, try again ${error}`)
            }
            styles={{
                textInputContainer: {
                    borderColor: colors.mallBlue5,
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
                    height: 300,
                },
                loader: {
                    borderColor: "red",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    height: 50,
                    backgroundColor: "blue",
                },
                separator: {
                    height: 0.5,
                    backgroundColor: "#c8c7cc",
                },
            }}
        />
    );
};

export default GoogleAutoCompleteInput;

interface GoogleAutoCompleteInputProps {
    placeholder: string;
}
