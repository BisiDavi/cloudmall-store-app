import React from "react";
import { View, StyleSheet } from "react-native";
import SelectField from "./SelectField";

export default function SelectGroup({ content }: SelectGroupProps) {
    return (
        <View style={styles.selectGroup}>
            {content.map((field, index) => (
                <SelectField
                    style={styles.select}
                    key={index}
                    content={field}
                    //onValueChange={}
                    //selectedValue={}
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
        padding: 10,
    },
    select: {
        width: 130,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
});

interface SelectGroupProps {
    content: {
        name: string;
        options: { name: string }[];
    }[];
}
