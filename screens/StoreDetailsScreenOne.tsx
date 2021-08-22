import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";

import { RootStackParamList } from "@customTypes/.";
import InputField from "@components/InputField";
import { storeDetailsSchema } from "@components/StoreDetailsSchema";
import axiosInstance from "../network/axiosInstance";
import { showToast } from "../utils/.";
import { SetupStoreScreenAction } from "../store/SetupStoreAction";
import { useStoreSetupNavigation } from "@hooks/.";

export default function StoreDetailsScreenOne({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenOne">) {
  const [loading, setLoading] = useState(false);
  const [storeId, setStoreId] = useState(null);
  const dispatch = useDispatch();

  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);

  console.log("storeId", storeId);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <Spinner visible={loading} color="blue" />
        <View style={styles.container}>
          <Formik
            validationSchema={storeDetailsSchema}
            initialValues={{
              name: "",
              storeEmail: "",
              phoneNumber: "",
              address: "",
            }}
            onSubmit={async (values) => {
              setLoading(true);
              await axiosInstance
                .post("/store", values)
                .then((response) => {
                  const data: any = response.data;
                  setLoading(false);
                  if (response.status === 200) {
                    setStoreId(data?._id);
                    showToast(`${data.name} stores created`);
                    onBoardingNextScreen(1, false);
                    navigation.navigate("StoreAddressScreen");
                  } else {
                    showToast(data);
                  }
                })
                .catch((error) => {
                  setLoading(false);
                  showToast(error.response.data);
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
              <View>
                <InputField
                  label="Name of Store"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  errorMessage={errors.name && touched.name && errors.name}
                />
                <InputField
                  label="Email address of store"
                  textContentType="emailAddress"
                  onChangeText={handleChange("storeEmail")}
                  onBlur={handleBlur("storeEmail")}
                  value={values.storeEmail}
                  keyboardType="email-address"
                  errorMessage={
                    errors.storeEmail && touched.storeEmail && errors.storeEmail
                  }
                />
                <InputField
                  label="Phone number"
                  textContentType="telephoneNumber"
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  errorMessage={
                    errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber
                  }
                />
                <InputField
                  label="Address"
                  styles={{ input: styles.addressField }}
                  textContentType="fullStreetAddress"
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                  errorMessage={
                    errors.address && touched.address && errors.address
                  }
                />
                <View style={styles.buttonView}>
                  <Button
                    buttonStyle={styles.buttonStyle}
                    onPress={handleSubmit}
                    disabled={!isValid}
                    title="Next"
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  buttonStyle: {
    width: 250,
    alignItems: "center",
  },
  buttonView: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    justifyContent: "flex-start",
    marginBottom: 0,
    marginTop: 0,
    width: "100%",
    alignItems: "flex-start",
  },
  addressField: {
    height: 70,
  },
});
