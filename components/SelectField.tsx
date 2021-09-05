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
      <View style={styles.pickerView }>
        <View style={{ ...props.style, ...styles.picker }}>
          <Picker
            selectedValue={props.selectedValue}
            onValueChange={props.onValueChange}
            style={props.style}
          >
            {content.options?.map((item: optionType, index: number) => (
              <Picker.Item
                fontFamily="RobotoRegular"
                key={index}
                label={item.name}
                value={item.name}
                enabled={item.enabled}
              />
            ))}
          </Picker>
        </View>
      </View>
      <Text style={styles.error}>{props.error}</Text>
    </View>
  );
}

type optionType = {
  name: string | undefined;
  enabled: boolean;
};

interface selectFieldProps {
  content: {
    label?: string;
    options?: optionType[];
  };
  selectedValue?: any;
  onValueChange?: any;
  error?: string;
  style?: any;
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
    marginBottom: 0,
    marginTop: -10,
    justifyContent: "center",
  },
  picker: {
    // width: Dimensions.get("window").width * 0.85,
    height: 48,
    marginBottom: 0,
    paddingBottom: 0,
    borderColor: colors.mallBlue3,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
  },
  error: {
    color: colors.accentRed,
    margin: 5,
    marginLeft: 15,
    marginBottom: 0,
    fontFamily: "RobotoRegular",
    fontSize: 12,
    fontWeight: "600",
  },
});
