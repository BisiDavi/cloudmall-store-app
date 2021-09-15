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
    field: TimeAndSwitchFieldType;
}

interface SwitchFieldsProps {
    content: {
        name: string;
        label?: string;
        fields?: TimeAndSwitchFieldType[];
    };
}

type stateType = {
    weekDays: { opensAt: string; closesAt: string } | boolean;
    saturday: { opensAt: string; closesAt: string } | boolean;
    sunday: { opensAt: string; closesAt: string } | boolean;
};

function TimeAndSwitchField(props: TimeAndSwitchField) {
    const { field } = props;
    const [open, setOpen] = useState(false);
    const [openDays, setOpenDays] = useState<stateType>({
        weekDays: { opensAt: "", closesAt: "" },
        saturday: { opensAt: "", closesAt: "" },
        sunday: { opensAt: "", closesAt: "" },
    });

    function handleSelect(switchName: string) {
        console.log("field.switch.label", field.switch.name);
        console.log("switchName", switchName);
        console.log(" ");

        setOpenDays((prevState) => {
            return {
                ...prevState,
                [field.switch.name]: { opensAt: switchName, closesAt: "" },
            };
        });
        console.log("openDays", openDays);
    }
    const textColor = open ? styles.open : styles.close;

    function handleSwitchChange() {
        setOpen((prevState) => !prevState);
    }

    return (
        <View>
            <View style={styles.switchView}>
                <Text style={styles.switchText}>{field.switch.label}</Text>
                <Switch
                    color={colors.mallBlue5}
                    value={open}
                    onValueChange={handleSwitchChange}
                />
                <Text style={{ ...textColor, ...styles.switchText }}>
                    {open ? "Open" : "Close"}
                </Text>
            </View>
            {open && (
                <SelectGroup
                    durationName={field.switch.name}
                    selectField={field?.time}
                    {...props}
                />
            )}
        </View>
    );
}

export default function SwitchfieldTimefield(props: SwitchFieldsProps) {
    const { content } = props;

    return (
        <View style={styles.SwitchFields}>
            <Text style={styles.label}>{content.label}</Text>
            {content.fields?.map((item, index) => (
                <TimeAndSwitchField key={index} field={item} {...props} />
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
