import React, { ChangeEvent } from "react";
import { KeyboardTypeOptions } from "react-native";
import InputField from "@components/InputField";
import RadioField from "@components/RadioField";

export default function DisplayFormElements({
  formElement,
  ...props
}: displayFormElementsProps) {
  switch (formElement.type) {
    case "input": {
      return (
        <InputField
          label={formElement.label}
          placeholder={formElement.placeholder}
          textContentType={formElement?.textContentType}
          onChangeText={props?.handleChange(formElement.name)}
          onBlur={props.handleBlur(formElement.name)}
          value={props.values[formElement.name]}
          keyboardType={formElement?.keyboardType}
          errorMessage={
            props.errors[formElement.name] &&
            props.touched[formElement.name] &&
            props.errors[formElement.name]
          }
        />
      );
    }
    case "radio": {
      return (
        <RadioField content={formElement} onPress={props.handleChange} />
      );
    }
    default:
      return null;
  }
}

interface displayFormElementsProps {
  formElement: {
    name: string;
    label?: any;
    placeholder?: string;
    fields?: { name?: string; label?: string }[];
    type: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    textContentType?:
      | "password"
      | "emailAddress"
      | "telephoneNumber"
      | "fullStreetAddress"
      | undefined;
  };
  handleChange: (e: string | ChangeEvent<any>) => any;
  handleBlur: (e: string | ChangeEvent<any>) => any;
  values: any;
  errors: any;
  touched: any;
}
