import React, { ChangeEvent } from "react";
import { Input } from "react-native-elements";
import { StyleSheet, KeyboardTypeOptions, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import colors from "../utils/colors";

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
      placeholder={props.placeholder}
      inputContainerStyle={[inputStyles.inputContainer, props.styleContainer]}
      labelStyle={[inputStyles.label, props.styleLabel]}
      inputStyle={[inputStyles.input, props.styleInput]}
      keyboardType={keyboardType}
      value={value}
      placeholderTextColor={colors.neutral4}
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
    width: Dimensions.get("window").width * 0.85,
    marginBottom: 0,
    height: 48,
    borderColor: colors.mallBlue3,
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    height: 48,
    padding: 10,
    marginBottom: 0,
    margin: 0,
    fontSize: 14,
    fontFamily:"Roboto", 
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
  onChangeText?: (e: string | ChangeEvent<any>) => void | undefined;
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
  placeholder?: string;
  onBlur?: (e: string | ChangeEvent<any>) => void | undefined;
  textContentType?:
    | "password"
    | "emailAddress"
    | "telephoneNumber"
    | "fullStreetAddress";
}
