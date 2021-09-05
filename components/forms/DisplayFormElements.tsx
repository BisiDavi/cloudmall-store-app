import React, { ChangeEvent } from "react";
import { Dimensions, KeyboardTypeOptions, StyleSheet } from "react-native";
import InputField from "@components/InputField";
import RadioField from "@components/RadioField";
import SelectField from "@components/SelectField";
import { displayAsset } from "@utils/.";

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
          onBlur={props?.handleBlur(formElement.name)}
          value={props.values[formElement.name]}
          keyboardType={formElement?.keyboardType}
          rightIcon={displayAsset(formElement.iconName)}
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
        <RadioField
          content={formElement}
          error={
            props.errors[formElement.name] &&
            props.touched[formElement.name] &&
            props.errors[formElement.name]
          }
        />
      );
    }
    case "select": {
      return (
        <SelectField
          content={formElement}
          style={styles.selectField}
          onValueChange={props.handleChange(formElement.name)}
          selectedValue={props.values[formElement.name]}
          error={
            props.errors[formElement.name] &&
            props.touched[formElement.name] &&
            props.errors[formElement.name]
          }
        />
      );
    }
    default:
      return null;
  }
}

type optionType = {
  name: string | undefined;
  enabled: boolean;
};

interface displayFormElementsProps {
  formElement: {
    name: string;
    label?: any;
    placeholder?: string;
    fields?: { name?: string; label?: string }[] | undefined;
    type: string;
    keyboardType?: KeyboardTypeOptions | undefined | any;
    options?: optionType[];
    iconName?: string;
    textContentType?:
      | "password"
      | "emailAddress"
      | "telephoneNumber"
      | "fullStreetAddress"
      | undefined
      | any;
  };
  handleChange: (e: string | ChangeEvent<any>) => any;
  handleBlur: (e: string | ChangeEvent<any>) => any;
  values: any;
  errors?: any;
  touched?: any;
}

const styles = StyleSheet.create({
  selectField: {
    width: Dimensions.get("window").width * 0.85,
  },
});
