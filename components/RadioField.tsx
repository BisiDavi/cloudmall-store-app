import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

export default function RadioField({ content }: RadioFieldProps) {
  return (
    <View style={styles.storeType}>
      {content?.map((item: itemType, index: number) => (
        <View key={index} style={styles.radioField}>
          <Text style={styles.label}>{item.label}</Text>
          <RadioButton value={item.label} status={item.status} />
        </View>
      ))}
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
  storeType: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});

interface RadioFieldProps {
  content: itemType[] | undefined;
}

type itemType = {
  label: string;
  status?: any;
};
