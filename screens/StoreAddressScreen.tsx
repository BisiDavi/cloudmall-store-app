import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Dimensions,
} from "react-native";
import Map from "@components/Map";
import { Button, Text } from "react-native-elements";

import { RootStackParamList } from "@customTypes/.";
import { getDeviceDimensions, colors } from "@utils/.";
import GoogleAutoCompleteInput from "@components/GoogleAutoCompleteInput";
import { SafeAreaView } from "react-native-safe-area-context";

const { deviceHeight, deviceWidth } = getDeviceDimensions();

export default function StoreAddressScreen({
    navigation,
}: StackScreenProps<RootStackParamList, "StoreAddressScreen">) {
    function nextPageHandler() {
        navigation.navigate("StoreDetailsScreenTwo");
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled={true}
        >
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.textView}>
                            <Text style={styles.title}>Stores Details</Text>
                        </View>
                        <Map />
                        <View style={styles.inputView}>
                            <Text style={styles.text}>Address of Store</Text>
                            {/*<GoogleAutoCompleteInput placeholder="Choose your location on the map" />*/}
                            <View style={styles.buttonView}>
                                <Button
                                    buttonStyle={styles.button}
                                    onPress={nextPageHandler}
                                    title="Confirm Address"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: colors.neutralWhite,
        padding: 0,
    },
    text: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        marginLeft: 10,
    },
    inputView: {
        padding: 20,
        paddingTop: 10,
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: deviceWidth,
        backgroundColor: "white",
        height: deviceHeight * 0.3,
    },
    button: {
        display: "flex",
        width: deviceWidth * 0.6,
        backgroundColor: colors.mallBlue5,
    },
    buttonView: {
        display: "flex",
        alignItems: "center",
        height: deviceHeight * 0.2,
        justifyContent: "center",
        marginTop: 30,
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
});
