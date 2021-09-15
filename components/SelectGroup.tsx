import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SelectField from "./SelectField";

type stateType = {
    weekDays: { opensAt: string; closesAt: string } | boolean;
    saturday: { opensAt: string; closesAt: string } | boolean;
    sunday: { opensAt: string; closesAt: string } | boolean;
};

export default function SelectGroup(props: SelectGroupProps) {
    const { selectField, durationName } = props;
    const [openDays, setOpenDays] = useState<stateType>({
        weekDays: { opensAt: "", closesAt: "" },
        saturday: { opensAt: "", closesAt: "" },
        sunday: { opensAt: "", closesAt: "" },
    });

    function handleSelect(field: any, value: any) {
        console.log("field.switch.label", field);
        console.log("handleSelect value", value);

        console.log(" ");

        setOpenDays((prevState: any) => {
            return {
                ...prevState,
                [durationName]: {
                    ...prevState[durationName],
                    [field]: value,
                },
            };
        });
    }
    console.log("openDays", openDays);

    return (
        <View style={styles.selectGroup}>
            {selectField.map((field, index) => (
                <SelectField
                    content={field}
                    key={index}
                    selectedValue={openDays}
                    onValueChange={(value: string) =>
                        handleSelect(field.name, value)
                    }
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
        padding: 10,
    },
    select: {
        width: 130,
        borderWidth: 0,
        borderBottomWidth: 1,
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
