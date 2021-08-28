import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SelectField({ content, ...props }: selectFieldProps) {
  return (
    <View>
      <Text>{content.label}</Text>
      <Picker
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
      >
        {content.options?.map((item: string, index: number) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>
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
}
