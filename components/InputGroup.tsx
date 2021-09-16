import React, { ChangeEvent } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import InputField from "./InputField";

export default function InputGroup({ inputGroup, ...props }: InputGroupProps) {
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{inputGroup.label}</Text>
            <View style={styles.inputView}>
                {inputGroup.inputs?.map((input, index: number) => (
                    <InputField
                        key={index}
                        placeholder={input.placeholder}
                        {...props}
                        styleContainer={styles.input}
                    />
                ))}
            </View>
        </View>
    );
}

interface InputGroupProps {
    inputGroup: {
        label?: string;
        name: string;
        type: string;
        inputs?: { placeholder: string; name: string; type: string }[];
    };
    onChangeText?: (e: string | ChangeEvent<any>) => void | undefined;
    onBlur?: (e: string | ChangeEvent<any>) => void | undefined;
    errorMessage?: any;
}

const styles = StyleSheet.create({
    inputGroup: {
        width: Dimensions.get("window").width,
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        margin: 0,
    },
    label: {
        marginBottom: 10,
        marginLeft: 10,
    },
    inputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
        margin: 0,
        padding: 0,
    },
    input: {
        width: 120,
    },
});
