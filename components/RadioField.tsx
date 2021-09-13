import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import { Image } from "react-native-elements";
import { useDispatch } from "react-redux";
import { colors, displayAsset } from "@utils/.";
import { StoreDetailsTypeAction } from "@store/actions/StoreDetailsAction";

export default function RadioField({ content, error }: RadioFieldProps) {
    const [checked, setChecked] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(StoreDetailsTypeAction(checked));
    }, [checked]);

    return (
        <View style={styles.storeType}>
            <View style={styles.typeView}>
                <Text style={styles.storeTypeText}>{content.label}</Text>
                <Image
                    source={displayAsset(content?.iconName)}
                    style={styles.iconImage}
                />
            </View>
            <View style={styles.radioFields}>
                {content.fields?.map((item: itemType, index: number) => (
                    <View key={index} style={styles.radioField}>
                        <Text style={styles.label}>{item.label}</Text>
                        <RadioButton
                            value={item.value}
                            onPress={() => setChecked(item.value)}
                            uncheckedColor={colors.mallBlue4}
                            color={colors.mallBlue5}
                            status={
                                checked === item.value ? "checked" : "unchecked"
                            }
                        />
                    </View>
                ))}
            </View>
            <Text style={styles.error}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    storeType: {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        padding: 10,
    },
    typeView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.85,
        marginBottom: 10,
    },
    radioField: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: colors.mallBlue5,
        borderWidth: 1,
        borderRadius: 5,
        width: 130,
        height: 50,
        justifyContent: "space-around",
    },
    radioFields: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "auto",
        width: Dimensions.get("window").width * 0.85,
    },
    label: {
        fontWeight: "500",
    },
    storeTypeText: {
        fontSize: 16,
        fontWeight: "500",
    },
    iconImage: {
        height: 25,
        width: 10,
    },
    error: {
        color: "red",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
    },
});

interface RadioFieldProps {
    content: {
        name?: string;
        label?: string;
        icon?: boolean;
        type: string;
        fields?: itemType[] | undefined;
        iconName?: string | undefined;
    };
    error: string;
}

type itemType = {
    label?: any;
    status?: "checked" | "unchecked";
    value?: any;
};
