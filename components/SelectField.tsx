import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
                            content.options.map((item: { name: string }) => (
                                <Picker.Item
                                    fontFamily="RobotoRegular"
                                    key={item.name}
                                    label={item.name}
                                    value={getPickerValue(item)}
                                />
                            ))
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
        options: any;
        value: string;
    };
    selectedValue?: any;
    onValueChange?: any;
    error?: string;
    style?: any;
    value?: string;
}

const styles = StyleSheet.create({
    text: {
        margin: 10,
        fontWeight: "500",
        fontSize: 14,
        textAlign: "left",
        fontFamily: "RobotoRegular",
    },
    textView: {
        alignItems: "flex-start",
        display: "flex",
        justifyContent: "flex-start",
    },
    pickerView: {
        alignItems: "center",
        justifyContent: "center",
    },
    selectField: {
        marginBottom: 0,
        marginTop: -10,
        justifyContent: "center",
    },
    picker: {
        height: 48,
        marginBottom: 0,
        paddingBottom: 0,
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
