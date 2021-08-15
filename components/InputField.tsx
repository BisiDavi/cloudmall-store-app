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
  rightIcon,
  ...props
}: any) {
  return (
    <Input
      {...props}
      label={label}
      inputContainerStyle={[inputStyles.inputContainer, styles?.container]}
      labelStyle={[inputStyles.label, styles?.label]}
      inputStyle={[inputStyles.input, styles?.input]}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      rightIcon={rightIcon}
      rightIconContainerStyle={inputStyles.rightIconStyle}
    />
  );
}

const inputStyles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 0,
    borderColor: "black",
    borderWidth: 1,
    borderBottomColor: "black",
  },
  input: {
    height: 30,
    padding: 10,
    marginBottom: 0,
  },
  label: {
    color: "black",
    marginTop: 5,
    marginBottom: 5,
    fontWeight: "500",
  },
  rightIconStyle: {
    width: 30,
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
  rightIcon?: any;
}
