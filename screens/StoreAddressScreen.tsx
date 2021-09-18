import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    Dimensions,
} from "react-native";
import Map from "@components/Map";
import { Button, Text } from "react-native-elements";

import { RootStackParamList } from "@customTypes/.";
import { getDeviceDimensions, colors } from "@utils/.";
import GoogleAutoCompleteInput from "@components/GoogleAutoCompleteInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootState } from "@store/RootReducer";
import useStoreSetupNavigation from "@hooks/useStoreSetupNavigation";

const { deviceHeight, deviceWidth } = getDeviceDimensions();

function MapView() {
    return (
        <View style={styles.mapView}>
            <Map />
        </View>
    );
}

function RenderGoogleInput(nextPage: () => void) {
    return (
        <View style={styles.renderGoogleInputView}>
            <Text style={styles.text}>Address of Store</Text>
            <GoogleAutoCompleteInput placeholder="Choose your location on the map" />
            <View style={styles.buttonView}>
                <Button
                    onPress={nextPage}
                    buttonStyle={styles.button}
                    title="Confirm Address"
                />
            </View>
        </View>
    );
}

export default function StoreAddressScreen({
    navigation,
}: StackScreenProps<RootStackParamList, "StoreAddressScreen">) {
    const { storeDetails } = useSelector(
        (state: RootState) => state.storeDetails,
    );
    const { latitude, longitude } = storeDetails;
    const { onBoardingNextScreen } = useStoreSetupNavigation();

    useEffect(() => {
        console.log("latitude", latitude);
        if (latitude !== null || longitude !== null) {
            onBoardingNextScreen(2, false);
        }
    }, [latitude, longitude]);

    function nextPage() {
        if (latitude || longitude) {
            onBoardingNextScreen(2, false);
        }
    }

    return (
        <SafeAreaView style={styles.safeView}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={true}
                style={styles.safeView}
            >
                <View style={styles.container}>
                    <View style={styles.textView}>
                        <Text style={styles.title}>Stores Address</Text>
                    </View>
                    <FlatList
                        style={styles.safeView}
                        data={null}
                        removeClippedSubviews={false}
                        keyboardShouldPersistTaps={"handled"}
                        ListHeaderComponent={<MapView />}
                        ListFooterComponent={RenderGoogleInput(nextPage)}
                        renderItem={null}
                        ListFooterComponentStyle={styles.footerComponentStyle}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        height: "100%",
    },
    scrollView: {
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: colors.neutralWhite,
        padding: 0,
    },
    text: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        marginLeft: 10,
    },
    mapView: {
        width: deviceWidth,
        backgroundColor: colors.neutral3,
        flexDirection: "column",
        alignItems: "center",
    },
    inputView: {
        padding: 20,
        paddingTop: 10,
        paddingBottom: 0,
        justifyContent: "flex-start",
        flexDirection: "column",
        width: deviceWidth,
        backgroundColor: "white",
    },
    button: {
        width: deviceWidth * 0.6,
        backgroundColor: colors.mallBlue5,
    },
    buttonView: {
        display: "flex",
        alignItems: "center",
        height: deviceHeight * 0.2,
        justifyContent: "center",
        marginTop: 0,
    },
    title: {
        color: colors.cloudOrange5,
        fontFamily: "MontserratBold",
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 10,
    },
    textView: {
        margin: 30,
        marginTop: 20,
        marginBottom: 0,
        backgroundColor: colors.neutralWhite,
        width: Dimensions.get("window").width,
    },
    footerComponentStyle: {
        padding: 20,
        justifyContent: "flex-start",
    },
    renderGoogleInputView: {
        flexDirection: "column",
        justifyContent: "flex-start",
    },
});
