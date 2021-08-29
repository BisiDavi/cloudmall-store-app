import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import colors from "@utils/colors";

export default function SelectField({ content, ...props }: selectFieldProps) {
  return (
    <View style={styles.selectField}>
      <View style={styles.textView}>
        <Text style={styles.text}>{content.label}</Text>
      </View>
      <View style={styles.pickerView}>
        <View style={styles.picker}>
          <Picker
            selectedValue={props.selectedValue}
            onValueChange={props.onValueChange}
          >
            {content.options?.map((item: string, index: number) => (
              <Picker.Item
                fontFamily="RobotoRegular"
                key={index}
                label={item}
                value={item}
              />
            ))}
          </Picker>
        </View>
      </View>
      <Text style={styles.error}>{props.error}</Text>
    </View>
  );
}

interface selectFieldProps {
  content: {
    label?: string;
    options?: string[];
  };
  selectedValue: any;
  onValueChange: any;
  error: string;
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontWeight: "500",
    fontSize: 14,
    textAlign: "left",
    fontFamily: "RobotoRegular",
  },
  textView: {
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "flex-start",
  },
  pickerView: {
    alignItems: "center",
    justifyContent: "center",
  },
  selectField: {
    marginBottom: 20,
    marginTop: -10,
    justifyContent: "center",
    // alignItems: "center",
  },
  picker: {
    height: 48,
    borderColor: colors.mallBlue3,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.85,
  },
  error: {
    color: colors.accentRed,
    margin: 5,
    marginLeft: 15,
    fontFamily: "RobotoRegular",
    fontSize: 12,
    fontWeight: "600",
  },
});
