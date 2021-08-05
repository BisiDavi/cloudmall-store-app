import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";

export default function InputField({
  onChangeText,
  value,
  keyboardType,
  textContentType,
  label,
  secureTextEntry = false,
  ...props
}: InputFieldProps) {
  return (
    <SafeAreaView style={styles.inputField}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputField: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 100,
    padding: 10,
  },
});

interface InputFieldProps {
  onChangeText?: () => void;
  value?: string;
  label: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  textContentType?: string;
}
