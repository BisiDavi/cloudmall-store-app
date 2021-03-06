import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    StyleSheet,
    View,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    Dimensions,
} from "react-native";
import ProgressIndicator from "@components/ProgressIndicator";
import SettlementDetailsForm from "@components/forms/SettlementDetailsForm";
import { colors } from "@utils/.";

export default function SettlementDetailsScreen() {
    return (
        <SafeAreaView style={styles.view}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={true}
                style={styles.view}
            >
                <ScrollView style={styles.view}>
                    <View style={styles.container}>
                        <View style={styles.indicator}>
                            <ProgressIndicator
                                title="Step 3: Settlement Details"
                                selected={3}
                            />
                        </View>
                        <SettlementDetailsForm />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.neutralWhite,
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        margin: 20,
        width: Dimensions.get("window").width * 0.93,
        alignItems: "center",
    },
    indicator: {
        marginLeft: -20,
    },
});
