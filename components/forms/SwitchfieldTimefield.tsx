import SelectGroup from "@components/SelectGroup";
import { StoreOpendaysAction } from "@store/actions/StoreDetailsAction";
import colors from "@utils/colors";
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Switch } from "react-native-elements";
import { useDispatch } from "react-redux";

type TimeAndSwitchFieldType = {
    switch: {
        name: string;
        label: string;
    };
    time: [{ name: string; label: string; options: { name: string }[] }];
};
interface TimeAndSwitchField {
    field: TimeAndSwitchFieldType;
    index: number;
}

interface SwitchFieldsProps {
    content: {
        name: string;
        label?: string;
        fields?: TimeAndSwitchFieldType[];
    };
}

function TimeAndSwitchField(props: TimeAndSwitchField) {
    const dispatch = useDispatch();
    const { field } = props;
    const period: string = field.switch.name;

    const [openDays, setOpenDays] = useState({
        [period]: { openingTime: "", closingTime: "", status: false },
    });
    const specificPeriod = openDays[period];
    const switchStatus: boolean = openDays[period].status;
    function handleSelect(value: string, index: number) {
        const fieldName = field.time[index].name;

        setOpenDays((prevState: any) => ({
            ...prevState,
            [period]: {
                ...prevState[period],
                [fieldName]: value,
            },
        }));

        dispatch(StoreOpendaysAction({ specificPeriod, period }));
    }

    const textColor = switchStatus ? styles.open : styles.close;

    function handleSwitchChange() {
        setOpenDays((prevState: any) => ({
            ...prevState,
            [period]: {
                ...prevState[period],
                status: !prevState[period].status,
            },
        }));
    }

    return (
        <View style={styles.timeAndSwitchField}>
            <View style={styles.switchView}>
                <Text style={{ ...styles.switchLabel, ...styles.switchText }}>
                    {field.switch.label}
                </Text>
                <Switch
                    color={colors.mallBlue5}
                    value={switchStatus}
                    onValueChange={handleSwitchChange}
                />
                <Text style={{ ...textColor, ...styles.switchText }}>
                    {switchStatus ? "Open" : "Close"}
                </Text>
            </View>
            {switchStatus && (
                <View style={styles.selectField}>
                    <SelectGroup
                        selectedValue={openDays}
                        onValueChange={handleSelect}
                        selectField={field.time}
                        {...props}
                    />
                </View>
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
                <TimeAndSwitchField
                    index={index}
                    key={index}
                    field={item}
                    {...props}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    SwitchFields: {
        marginTop: 0,
        padding: 0,
        alignItems: "flex-start",
        width: Dimensions.get("window").width * 0.85,
    },
    timeAndSwitchField: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    selectField: {
        width: Dimensions.get("window").width * 0.85,
        alignItems: "center",
    },
    switchView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
    open: {
        color: "green",
    },
    close: {
        color: colors.accentRed,
    },

    label: {
        fontFamily: "RobotoRegular",
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 10,
    },
    switchText: {
        fontFamily: "RobotoRegular",
        fontSize: 17,
        lineHeight: 19,
    },
    switchLabel: {
        width: 100,
    },
});
