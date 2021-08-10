import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

export default function RadioField({ content }: RadioFieldProps) {
  return (
    <View style={styles.radioField}>
      <Text style={styles.label}>{content.label}</Text>
      <RadioButton value={content.label} status={content.status} />
    </View>
  );
}

const styles = StyleSheet.create({
  radioField: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    width: 130,
    height: 50,
    justifyContent: "space-around",
  },
  label: {
    fontWeight: "500",
  },
});

interface RadioFieldProps {
  content: {
    label: string;
    status?: any;
  };
}
