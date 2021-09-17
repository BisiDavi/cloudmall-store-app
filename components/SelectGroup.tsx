import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SelectField from "./SelectField";

interface SelectGroupProps {
    selectedValue: any;
    onValueChange: (value: string, index: number) => void;
    selectField: any;
}

export default function SelectGroup(props: SelectGroupProps) {
    const [wholeday, setWholeday] = useState(false);
    const { selectedValue, onValueChange, selectField } = props;
    const [flag, setFlag] = useState({
        openFlag: "",
        closeFlag: "",
    });
    const [secondOptions] = useState(selectField[1].options);

    return (
        <View style={styles.selectGroup}>
            {selectField.map((field: any, index: number) => {
                wholeday
                    ? (selectField[1].options = null)
                    : (selectField[1].options = secondOptions);
                return (
                    <View key={index}>
                        <SelectField
                            content={field}
                            selectedValue={selectedValue}
                            onValueChange={(value: string) => {
                                value === "24 hours"
                                    ? setWholeday(true)
                                    : setWholeday(false);
                                onValueChange(value, index);
                                value === "Opens At" &&
                                    setFlag({
                                        ...flag,
                                        openFlag: "openingTime",
                                    });
                                value === "Closes At" &&
                                    setFlag({
                                        ...flag,
                                        closeFlag: "closingTime",
                                    });
                            }}
                            style={styles.select}
                        />
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
        alignItems: "flex-start",
        marginTop: 5,
    },
    select: {
        width: 130,
        borderWidth: 1,
    },
    error: {
        color: "red",
        fontSize: 13,
        marginTop: -15,
    },
    selectView: {
        display: "none",
    },
});
