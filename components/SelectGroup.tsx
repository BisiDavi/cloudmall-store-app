import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import colors from "@utils/colors";

type stateType = {
    weekDays: { opensAt: string; closesAt: string } | boolean;
    saturday: { opensAt: string; closesAt: string } | boolean;
    sunday: { opensAt: string; closesAt: string } | boolean;
};

export default function SelectGroup(props: SelectGroupProps) {
    const { selectField, durationName } = props;
    function getPickerValue(item: any) {
        const pickerValue = item.value ? item.value : item.name;
        return pickerValue;
    }
    const [openDays, setOpenDays] = useState<stateType>({
        weekDays: { opensAt: "", closesAt: "" },
        saturday: { opensAt: "", closesAt: "" },
        sunday: { opensAt: "", closesAt: "" },
    });

    function handleSelect(switchName: string, field: any, value: any) {
        console.log("field.switch.label", field);
        console.log("switchName", switchName);
        console.log("props.durationLabel", durationName);
        console.log("handleSelect value", value);

        console.log(" ");

        setOpenDays((prevState) => {
            return {
                ...prevState,
                [durationName]: {
                    ...prevState[durationName],
                    [field]: value,
                },
            };
        });
        console.log("openDays", openDays);
    }

    return (
        <View style={styles.selectGroup}>
            {selectField.map((field, index) => {
                return (
                    <View key={index} style={styles.selectField}>
                        {field.label && (
                            <View style={styles.textView}>
                                <Text style={styles.text}>{field.label}</Text>
                            </View>
                        )}
                        <View style={styles.pickerView}>
                            <View style={styles.picker}>
                                <Picker
                                    selectedValue={openDays}
                                    onValueChange={(value) => {
                                        handleSelect(
                                            durationName,
                                            field.name,
                                            value,
                                        );
                                    }}
                                >
                                    {field.options.map(
                                        (item: { name: string }) => (
                                            <Picker.Item
                                                fontFamily="RobotoRegular"
                                                key={item.name}
                                                label={item.name}
                                                value={getPickerValue(item)}
                                            />
                                        ),
                                    )}
                                </Picker>
                            </View>
                        </View>
                        {/*<Text style={styles.error}>{error}</Text>*/}
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    selectGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
    },
    select: {
        width: 130,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
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
        width: 125,
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

interface SelectGroupProps {
    selectField: {
        label: string;
        options: { name: string }[];
        name?: string;
    }[];
    durationName: string;
}
