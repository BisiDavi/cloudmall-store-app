import SelectGroup from "@components/SelectGroup";
import colors from "@utils/colors";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-elements";

type TimeAndSwitchFieldType = {
    switch: {
        name: string;
        label: string;
    };
    time: [{ name: string; label: string; options: { name: string }[] }];
};
interface TimeAndSwitchField {
    content: TimeAndSwitchFieldType;
}

interface SwitchFieldsProps {
    content: {
        name: string;
        label?: string;
        fields?: TimeAndSwitchFieldType[];
    };
    onValueChange: () => void;
    selectedValue: () => void;
    error: any;
}

function TimeAndSwitchField({ content }: TimeAndSwitchField) {
    const [open, setOpen] = useState(false);
    const textColor = open ? styles.open : styles.close;
    return (
        <View>
            <View style={styles.switchView}>
                <Text style={styles.switchText}>{content.switch.label}</Text>
                <Switch
                    color={colors.mallBlue5}
                    value={open}
                    onValueChange={() => setOpen(!open)}
                />
                <Text style={{ ...textColor, ...styles.switchText }}>
                    {open ? "Open" : "Close"}
                </Text>
            </View>
            {open && <SelectGroup content={content.time} />}
        </View>
    );
}

export default function SwitchfieldTimefield(props: SwitchFieldsProps) {
    const { content, onValueChange, selectedValue, error } = props;
    return (
        <View style={styles.SwitchFields}>
            <Text style={styles.label}>{content.label}</Text>
            {content.fields?.map((item, index) => (
                <TimeAndSwitchField content={item} key={index} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    switchView: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
    },
    open: {
        color: "green",
    },
    close: {
        color: colors.accentRed,
    },
    SwitchFields: {
        marginTop: 0,
        margin: 10,
    },
    label: {
        fontFamily: "RobotoRegular",
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 10,
    },
    switchText: {
        fontFamily: "RobotoRegular",
        fontSize: 17,
        lineHeight: 20,
    },
});
