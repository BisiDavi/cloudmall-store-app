import React, { ChangeEvent } from "react";
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
  errorMessage,
  ...props
}: InputFieldProps) {
  return (
    <Input
      {...props}
      label={label}
      inputContainerStyle={[inputStyles.inputContainer, props.styleContainer]}
      labelStyle={[inputStyles.label, props.styleLabel]}
      inputStyle={[inputStyles.input, props.styleInput]}
      keyboardType={keyboardType}
      value={value}
      errorMessage={errorMessage}
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
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  value?: any;
  label: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  styles?: any;
  rightIcon?: any;
  errorMessage?: any;
  styleContainer?: any;
  styleLabel?: any;
  styleInput?: any;
  onBlur?: (e: string | ChangeEvent<any>) => void;
  textContentType?:
    | "password"
    | "emailAddress"
    | "telephoneNumber"
    | "fullStreetAddress";
}
