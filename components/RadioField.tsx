import React, { ChangeEvent } from "react";
import colors from "../utils/colors";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

export default function RadioField({ content, onPress }: RadioFieldProps) {
  return (
    <View style={styles.storeType}>
      {content?.map((item: itemType, index: number) => (
        <View key={index} style={styles.radioField}>
          <Text style={styles.label}>{item.label}</Text>
          <RadioButton
            value={item.label}
            onPress={onPress}
            uncheckedColor={colors.mallBlue4}
            status="checked"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  radioField: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.mallBlue5,
    borderWidth: 1,
    borderRadius: 5,
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
  onPress: any;
}

type itemType = {
  label?: any;
  status?: "checked" | "unchecked";
};
