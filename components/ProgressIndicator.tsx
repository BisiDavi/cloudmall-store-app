import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

import colors from "../utils/colors";

export default function ProgressIndicator({
    selected,
    total = 4,
    style,
    title,
}: ProgressIndicator) {
    const numberofIndicators = new Array(total).fill("");

    return (
        <View style={styles.progressView}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ ...styles.progressIndicator, ...style }}>
                {numberofIndicators.map((_, index) => {
                    const indicatorStyle =
                        index < selected ? styles.selected : styles.notSelected;
                    return (
                        <View
                            style={{ ...styles.bar, ...indicatorStyle }}
                            key={index}
                        ></View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    progressView: {
        flexDirection: "column",
        justifyContent: "flex-start",
        margin: 30,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
    },
    progressIndicator: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 0,
        paddingTop: 0,
        width: "100%",
    },
    bar: {
        height: 5,
        width: Dimensions.get("window").width * 0.2,
        borderColor: colors.gray,
        borderWidth: 1,
        margin: 0,
    },
    selected: {
        backgroundColor: colors.cloudOrange5,
    },
    notSelected: {
        backgroundColor: "white",
    },
    title: {
        color: colors.cloudOrange5,
        fontFamily: "MontserratBold",
        fontSize: 18,
        lineHeight: 28,
        marginBottom: 10,
        padding: 0,
    },
});

interface ProgressIndicator {
    selected: number;
    total?: number;
    style?: any;
    title: string;
}
