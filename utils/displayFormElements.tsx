import React, { ChangeEvent } from "react";
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
          keyboardType="email-address"
          errorMessage={
            props.errors[formElement.name] &&
            props.touched[formElement.name] &&
            props.errors[formElement.name]
          }
        />
      );
    }
    case "radio": {
      <RadioField content={formElement.fields} />;
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
    fields?: { name: string; label?: string }[];
    type: string;
    keyboardType?: string;
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
