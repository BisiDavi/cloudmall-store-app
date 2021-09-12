import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
    StyleSheet,
    View,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import { RootStackParamList } from "@customTypes/.";
import ProgressIndicator from "@components/ProgressIndicator";
import StoreDetailsFormOne from "@components/forms/StoreDetailsFormOne";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StoreDetailsScreenOne({
    navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenOne">) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled={true}
        >
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <ProgressIndicator
                            title="Step: Stores Details"
                            selected={1}
                        />
                        <StoreDetailsFormOne navigation={navigation} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 0,
        alignItems: "center",
    },
});
