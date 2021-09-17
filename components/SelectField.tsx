import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import colors from "@utils/colors";

export default function SelectField({ content, ...props }: selectFieldProps) {
    function getPickerValue(item: any) {
        const pickerValue = content.value ? item[content.value] : item.name;
        return pickerValue;
    }
    return (
        <View style={styles.selectField}>
            {content.label && (
                <View style={styles.textView}>
                    <Text style={styles.text}>{content.label}</Text>
                </View>
            )}
            <View style={styles.pickerView}>
                <View style={{ ...props.style, ...styles.picker }}>
                    <Picker
                        selectedValue={props.selectedValue}
                        onValueChange={props.onValueChange}
                        style={props.style}
                    >
                        {content.options.length > 0 ? (
                            content.options.map((item: any, index: number) => {
                                const labelName = content.optionName
                                    ? item[content.optionName]
                                    : item.name;
                                return (
                                    <Picker.Item
                                        fontFamily="RobotoRegular"
                                        key={`${item.name}-${index}`}
                                        label={labelName}
                                        value={getPickerValue(item)}
                                    />
                                );
                            })
                        ) : (
                            <Picker.Item
                                fontFamily="RobotoRegular"
                                label="Loading ..."
                                value="loading"
                            />
                        )}
                    </Picker>
                </View>
            </View>
            <Text style={styles.error}>{props.error}</Text>
        </View>
    );
}

interface selectFieldProps {
    content: {
        label?: string;
        options?: any;
        value?: string;
        optionName?: string;
    };
    selectedValue?: any;
    onValueChange?: any;
    error?: string;
    style?: any;
}

const styles = StyleSheet.create({
    text: {
        margin: 5,
        marginLeft: 0,
        fontWeight: "500",
        fontSize: 14,
        textAlign: "left",
        fontFamily: "RobotoRegular",
    },
    textView: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    pickerView: {
        alignItems: "center",
        justifyContent: "center",
    },
    selectField: {
        margin: 0,
        padding: 0,
        alignItems: "flex-start",
        flexDirection: "column",
    },
    picker: {
        height: 48,
        margin: 0,
        padding: 0,
        borderColor: colors.mallBlue3,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
    },
    error: {
        color: colors.accentRed,
        margin: 5,
        marginLeft: 15,
        marginBottom: 0,
        fontFamily: "RobotoRegular",
        fontSize: 12,
        fontWeight: "600",
    },
});
