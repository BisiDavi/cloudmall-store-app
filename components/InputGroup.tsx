import React, { ChangeEvent } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputField from "./InputField";

export default function InputGroup({ inputGroup, ...props }: InputGroupProps) {
  return (
    <View>
      <Text>{inputGroup.label}</Text>
      {inputGroup.inputs?.map((input, index: number) => (
        <InputField key={index} placeholder={input.placeholder} {...props} />
      ))}
    </View>
  );
}

interface InputGroupProps {
  inputGroup: {
    label?: string;
    name: string;
    type: string;
    inputs?: { placeholder: string; name: string; type: string }[];
  };
  onChangeText?: (e: string | ChangeEvent<any>) => void | undefined;
  onBlur?: (e: string | ChangeEvent<any>) => void | undefined;
  errorMessage?: any;
}

const styles = StyleSheet.create({

})