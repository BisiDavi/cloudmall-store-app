import React from "react";
import {
    StyleSheet,
    View,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import ProgressIndicator from "@components/ProgressIndicator";
import StoreDetailsFormOne from "@components/forms/StoreDetailsFormOne";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StoreDetailsScreenOne() {
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
                            title="Step 1: Stores Details"
                            selected={1}
                        />
                        <StoreDetailsFormOne />
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
        width: "100%",
        flexDirection: "column",
        padding: 20,
        paddingLeft: 0,
        alignItems: "flex-start",
    },
});
