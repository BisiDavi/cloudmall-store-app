import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View } from "react-native";
import { colors } from "@utils/.";
import { GOOGLE_MAP_API_KEY } from "@env";

const GoogleAutoCompleteInput = ({
  placeholder,
}: GoogleAutoCompleteInputProps) => {
  function googlePlaceAutocomplete(data: any, details: any = null) {
    console.log("data", data);
    console.log("details", details);
  }
  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        onPress={googlePlaceAutocomplete}
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
            margin: 10,
          },
        }}
      />
    </View>
  );
};

export default GoogleAutoCompleteInput;

interface GoogleAutoCompleteInputProps {
  placeholder: string;
}
