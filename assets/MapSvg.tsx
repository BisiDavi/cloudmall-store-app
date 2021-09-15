import React from "react";
import { useNavigation } from "@react-navigation/native";
import SvgWrapper from "@utils/SvgWrapper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "@customTypes/.";

export default function MapSvg() {
    const navigation = useNavigation();
    const route: keyof RootStackParamList = "StoreAddressScreen";

    const svg = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 0L17.34 0.03L12 2.1L6 0L0.36 1.9C0.15 1.97 0 2.15 0 2.38V17.5C0 17.78 0.22 18 0.5 18L0.66 17.97L6 15.9L12 18L17.64 16.1C17.85 16.03 18 15.85 18 15.62V0.5C18 0.22 17.78 0 17.5 0ZM7 2.47L11 3.87V15.53L7 14.13V2.47ZM2 3.46L5 2.45V14.15L2 15.31V3.46ZM16 14.54L13 15.55V3.86L16 2.7V14.54Z" fill="#F29100"/>
</svg>`;
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate(route)}>
                <SvgWrapper svg={svg} width="18px" />
            </TouchableOpacity>
        </>
    );
}
