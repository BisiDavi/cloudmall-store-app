import React, { useState, useContext } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import { RootStackParamList } from "@customTypes/.";
import InputField from "@components/InputField";
import colors from "@utils/colors";
import loginSchema from "./LoginSchema";
import AuthContext from "@context/AuthContext";

type LoginScreenNavigationProps = StackNavigationProp<
    RootStackParamList,
    "LoginScreen"
>;

type loginFormProps = {
    navigation: LoginScreenNavigationProps;
};

export default function LoginForm({ navigation }: loginFormProps) {
    const [hidePassword, setHidePassword] = useState(true);
    const { authContext } = useContext(AuthContext);
    const passwordIcon = hidePassword ? "eye-off" : "eye";

    function passwordVisbilityHandler() {
        setHidePassword(!hidePassword);
    }

    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
                const { email, password } = values;
                authContext.loginIn(email, password, navigation);
            }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
            }) => (
                <View style={styles.form}>
                    <InputField
                        label="Email"
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        errorMessage={
                            errors.email && touched.email && errors.email
                        }
                    />
                    <InputField
                        label="Password"
                        value={values.password}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        textContentType="password"
                        errorMessage={
                            errors.password &&
                            touched.password &&
                            errors.password
                        }
                        secureTextEntry={hidePassword}
                        rightIcon={
                            <Feather
                                name={passwordIcon}
                                onPress={passwordVisbilityHandler}
                                color="black"
                                size={24}
                            />
                        }
                    />
                    <Button
                        type="solid"
                        onPress={handleSubmit}
                        title="Login"
                        disabled={!isValid}
                        buttonStyle={styles.login}
                    />
                    <View style={styles.withAccount}>
                        <Text>Don't have an account? </Text>
                        <Button
                            onPress={() => navigation.navigate("SignupScreen")}
                            buttonStyle={styles.signup}
                            type="clear"
                            title="Sign up"
                        />
                    </View>
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    form: {
        justifyContent: "space-around",
        marginTop: 20,
        marginBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 60,
        lineHeight: 24,
        textAlign: "center",
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "black",
    },
    login: {
        alignItems: "center",
        marginTop: 20,
        display: "flex",
        marginBottom: 20,
        width: 250,
        borderRadius: 8,
        justifyContent: "center",
        backgroundColor: colors.mallBlue5,
    },
    withAccount: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
    },
    signup: {
        marginTop: 0,
    },
});
