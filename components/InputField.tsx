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
  label,
  secureTextEntry = false,
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
    height: 60,
    width:1,
    flexDirection: "column",
  },
  input: {
    height: 20,
    margin: 5,
    borderWidth: 1,
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
