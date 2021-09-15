import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    StyleSheet,
    View,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import { RootStackParamList } from "@customTypes/.";
import ProgressIndicator from "@components/ProgressIndicator";
import SettlementDetailsForm from "@components/forms/SettlementDetailsForm";

export default function SettlementDetailsScreen({
    navigation,
}: StackScreenProps<RootStackParamList, "SettlementDetailsScreen">) {
    return (
        <SafeAreaView style={styles.view}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={true}
                style={styles.view}
            >
                <ScrollView style={styles.view}>
                    <View style={styles.container}>
                        <ProgressIndicator
                            title="Step 3: Settlement Details"
                            selected={3}
                        />
                        <SettlementDetailsForm navigation={navigation} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
        paddingTop: 0,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: "center",
    },
});
