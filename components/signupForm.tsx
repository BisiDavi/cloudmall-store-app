import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";

import { RootStackParamList } from "customTypes";
import InputField from "@components/InputField";
import axiosInstance from "network/axiosInstance";
import registrationSchema from "./signupSchema";

export default function SignupForm({
  navigation,
}: StackScreenProps<RootStackParamList, "SignupScreen">) {
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  function passwordVisbilityHandler() {
    setHidePassword(!hidePassword);
  }

  const passwordIcon = hidePassword ? "eye-off" : "eye";

  return (
    <Formik
      validationSchema={registrationSchema}
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      onSubmit={(values) => {
        setLoading(true);
        const { email, password } = values;
        console.log("values", values);
        axiosInstance
          .post("/register", { email, password })
          .then((response) => {
            setLoading(false);
            console.log("response", response);
          })
          .catch((error) => {
            setLoading(false);
            console.error("error", error);
          });
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
          <Spinner visible={loading} color="blue" />
          <InputField
            label="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            textContentType="emailAddress"
            errorMessage={errors.email && touched.email && errors.email}
          />
          <InputField
            label="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            textContentType="password"
            errorMessage={
              errors.password && touched.password && errors.password
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
          <InputField
            label="Re-enter Password"
            textContentType="password"
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            secureTextEntry={hidePassword}
            errorMessage={
              errors.confirmPassword &&
              touched.confirmPassword &&
              errors.confirmPassword
            }
            rightIcon={
              <Feather
                name={passwordIcon}
                onPress={passwordVisbilityHandler}
                color="black"
                size={24}
              />
            }
          />
          {/* () => navigation.navigate("StoreDetailsScreenOne") */}
          <Button
            type="solid"
            onPress={handleSubmit}
            disabled={!isValid}
            title="Create Account"
            buttonStyle={styles.createAccount}
          />
          <View style={styles.withAccount}>
            <Text>Already have an account? </Text>
            <Button
              onPress={() => navigation.navigate("LoginScreen")}
              buttonStyle={styles.login}
              type="clear"
              title="Login in"
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },

  label: {
    color: "black",
    marginTop: 5,
    marginBottom: 5,
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
  createAccount: {
    marginTop: 20,
    marginBottom: 10,
    width: 250,
  },
  withAccount: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  login: {
    marginTop: 0,
  },
});
