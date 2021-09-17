import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    StyleSheet,
    View,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";

import ProgressIndicator from "@components/ProgressIndicator";
import StoreDetailsFormTwo from "@components/forms/StoreDetailsFormTwo";
import { colors } from "@utils/.";

export default function StoreDetailsScreenTwo() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={true}
                style={{ flex: 1 }}
            >
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <ProgressIndicator
                            title="Step 2: Owner Details"
                            selected={2}
                        />
                        <StoreDetailsFormTwo />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.neutralWhite,
    },
    inputField: {
        marginTop: 1,
        padding: 0,
    },
    typeView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 0,
        marginTop: 20,
        marginBottom: 10,
    },
    storeTypeText: {
        fontSize: 16,
        fontWeight: "500",
    },
    iconImage: {
        height: 20,
        width: 10,
    },
    input: {
        width: 100,
        margin: 0,
        padding: 0,
    },
    addressField: {
        height: 70,
    },
    button: {
        width: 250,
    },
    buttonView: {
        alignItems: "center",
        justifyContent: "center",
    },
});
