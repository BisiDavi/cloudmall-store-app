import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "@utils/colors";

export default function LoadingActivityIndicator() {
    return (
        <View style={styles.LoadingActivityIndicator}>
            <ActivityIndicator size="large" color={colors.cloudOrange5} />
        </View>
    );
}

const styles = StyleSheet.create({
    LoadingActivityIndicator: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
