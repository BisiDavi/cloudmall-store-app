import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import SelectField from "./SelectField";

type stateType = {
    weekDays: { openingTime: string; closingTime: string } | boolean;
    saturday: { openingTime: string; closingTime: string } | boolean;
    sunday: { openingTime: string; closingTime: string } | boolean;
};

interface SelectGroupProps {
    selectedValue: any;
    onValueChange: (value: string, index: number) => void;
    selectField: any;
}

export default function SelectGroup(props: SelectGroupProps) {
    const { selectedValue, onValueChange, selectField } = props;
    return (
        <View style={styles.selectGroup}>
            {selectField.map((field: any, index: number) => (
                <SelectField
                    content={field}
                    key={index}
                    selectedValue={selectedValue}
                    onValueChange={(value: string) => {
                        onValueChange(value, index);
                    }}
                    style={styles.select}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    selectGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "flex-start",
    },
    select: {
        width: 130,
        borderWidth: 1,
    },
});
