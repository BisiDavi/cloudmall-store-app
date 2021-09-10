import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectField from "./SelectField";

export default function SelectGroup({ content }: SelectGroupProps) {
  return (
    <View style={styles.selectGroup}>
      {content.fields.map((field, index) => (
        <SelectField style={styles.select} key={index} content={field} />
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
  },
});

interface SelectGroupProps {
  content: {
    fields: [
      {
        name: string;
        options: { name: string; enabled: boolean }[];
      }
    ];
  };
}
