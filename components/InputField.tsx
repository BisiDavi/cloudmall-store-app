import React from "react";
import { StyleSheet, KeyboardTypeOptions } from "react-native";
import { Input } from "react-native-elements";

export default function InputField({
  onChangeText,
  value,
  keyboardType,
  label,
  secureTextEntry = false,
  styles,
}: InputFieldProps) {
  return (
    <Input
      label={label}
      inputContainerStyle={[inputStyles.inputContainer, styles?.container]}
      labelStyle={[inputStyles.label, styles?.label]}
      inputStyle={[inputStyles.input, styles?.input]}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

const inputStyles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    borderBottomWidth: 0,
    marginBottom: 0,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 30,
    borderBottomColor: "black",
    padding: 10,
    marginBottom: 0,
  },
  label: {
    color: "black",
    marginTop: 5,
    marginBottom: 5,
  },
});

interface InputFieldProps {
  onChangeText?: () => void;
  value?: string;
  label: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  textContentType?: string;
  styles?: any;
}
