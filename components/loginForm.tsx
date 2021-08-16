import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import { StyleSheet, View, Text, ToastAndroid } from "react-native";
import { Button } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";

import { RootStackParamList } from "customTypes";
import InputField from "@components/InputField";
import axiosInstance from "network/axiosInstance";
import loginSchema from "./loginSchema";

export default function LoginForm({
  navigation,
}: StackScreenProps<RootStackParamList, "LoginScreen">) {
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  function passwordVisbilityHandler() {
    setHidePassword(!hidePassword);
  }

  function showToast(message: string) {
    ToastAndroid.show(message, ToastAndroid.LONG);
  }

  const passwordIcon = hidePassword ? "eye-off" : "eye";

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        setLoading(true);
        const { email, password } = values;
        axiosInstance
          .post("/login", { email, password })
          .then((response) => {
            setLoading(false);
            showToast(response?.data.message);
            navigation.navigate("StoreDetailsScreenOne");
          })
          .catch((error) => {
            setLoading(false);
            showToast(error.response.data?.message);
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
          <Button
            type="solid"
            onPress={handleSubmit}
            title="Login"
            disabled={!isValid}
            buttonStyle={styles.createAccount}
          />
          <View style={styles.withAccount}>
            <Text>Don't have an account? </Text>
            <Button
              onPress={() => navigation.navigate("SignupScreen")}
              buttonStyle={styles.login}
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
  createAccount: {
    alignItems: "center",
    marginTop: 20,
    display: "flex",
    marginBottom: 20,
    width: 250,
    justifyContent: "center",
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
