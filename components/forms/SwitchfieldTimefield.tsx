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
}

function TimeAndSwitchField({ content }: TimeAndSwitchField) {
    const [open, setOpen] = useState(false);
    return (
        <View>
            <View style={styles.switchView}>
                <Text style={styles.switchText}>{content.switch.label}</Text>
                <Switch
                    color={colors.mallBlue5}
                    value={open}
                    onValueChange={() => setOpen(!open)}
                />
                <Text style={styles.switchText}>{open ? "Open" : "Close"}</Text>
            </View>
            <SelectGroup content={content.time} />
        </View>
    );
}

export default function SwitchfieldTimefield({ content }: SwitchFieldsProps) {
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
