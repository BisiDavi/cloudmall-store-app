import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SelectField({ content }) {
  return (
    <View>
      <Text>{content.label}</Text>
      <Picker>
        {content.fields.map((item: string, index: number) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}

interface selectFieldProps{
    
}