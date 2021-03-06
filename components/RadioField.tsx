import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { colors, displayAsset } from "@utils/.";
import { StoreDetailsTypeAction } from "@store/actions/StoreDetailsAction";
import { RootState } from "@store/RootReducer";

export default function RadioField({ content, toggleModal }: RadioFieldProps) {
    const [checked, setChecked] = useState("");
    const dispatch = useDispatch();
    const { storeDetails }: any = useSelector(
        (state: RootState) => state.storeDetails,
    );
    const { type } = storeDetails;
    useEffect(() => {
        dispatch(StoreDetailsTypeAction(checked));
    }, [checked]);

    const isTypeValid = type.length > 0;

    return (
        <View style={styles.storeType}>
            <View style={styles.typeView}>
                <Text style={styles.storeTypeText}>{content.label}</Text>
                {displayAsset(content.iconName, toggleModal)}
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
            {!isTypeValid && (
                <Text style={styles.error}>Store type is required</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    storeType: {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        padding: 0,
        width: Dimensions.get("window").width * 0.85,
        marginBottom: 20,
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
        fontSize: 13,
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
    toggleModal?: () => void;
}

type itemType = {
    label?: any;
    status?: "checked" | "unchecked";
    value?: any;
};
