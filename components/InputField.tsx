import React, { ChangeEvent } from "react";
import { Input } from "react-native-elements";
import {
    StyleSheet,
    KeyboardTypeOptions,
    Text,
    Dimensions,
    View,
} from "react-native";
import colors from "@utils/colors";

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
        <View style={inputStyles.inputView}>
            <Input
                {...props}
                label={label}
                placeholder={props.placeholder}
                inputContainerStyle={[
                    inputStyles.inputContainer,
                    props.styleContainer,
                ]}
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
            {props.helperText && !errorMessage && (
                <Text style={inputStyles.helperTextStyle}>
                    {props.helperText}
                </Text>
            )}
        </View>
    );
}

const inputStyles = StyleSheet.create({
    inputContainer: {
        width: Dimensions.get("window").width * 0.85,
        margin: 0,
        height: 48,
        borderColor: colors.mallBlue3,
        borderWidth: 1,
        borderRadius: 5,
    },
    input: {
        height: 48,
        padding: 10,
        margin: 0,
        fontSize: 14,
        fontFamily: "Roboto",
    },
    label: {
        color: "black",
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "500",
        fontSize: 14,
        fontFamily: "RobotoRegular",
    },
    rightIconStyle: {
        width: 30,
    },
    inputView: {
        //position: "relative",
    },
    helperTextStyle: {
        textAlign: "left",
        fontSize: 12,
        //justifyContent: "flex-start",
        //alignItems: "flex-start",
        //width: 10,
        color: colors.mallBlue5,
        marginLeft: 15,
        marginTop: -15,
    },
});

interface InputFieldProps {
    onChangeText?: (e: string | ChangeEvent<any>) => void | undefined;
    value?: any;
    label?: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    styles?: any;
    rightIcon?: any;
    errorMessage?: any;
    styleContainer?: any;
    styleLabel?: any;
    styleInput?: any;
    placeholder?: string;
    helperText?: string;
    onBlur?: (e: string | ChangeEvent<any>) => void | undefined;
    textContentType?:
        | "password"
        | "emailAddress"
        | "telephoneNumber"
        | "fullStreetAddress";
}
