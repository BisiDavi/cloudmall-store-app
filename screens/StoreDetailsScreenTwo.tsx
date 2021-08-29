import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { Button } from "react-native-elements";
import InputField from "@components/InputField";
import { RootStackParamList } from "@customTypes/.";
import RadioField from "@components/RadioField";
import { useStoreSetupNavigation } from "@hooks/.";
import axiosInstance from "../network/axiosInstance";
import { storeDetailsScreenTwoSchema } from "@components/forms/StoreDetailsSchema";
import { showToast } from "../utils/.";
import ProgressIndicator from "@components/ProgressIndicator";
import StoreDetailsFormTwo from "@components/forms/StoreDetailsFormTwo";

const radioField = [{ label: "Instore" }, { label: "Pickup" }];

export default function StoreDetailsScreenTwo({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenTwo">) {
  const [loading, setLoading] = useState(false);
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <ProgressIndicator selected={2} />
          <Formik
            validationSchema={storeDetailsScreenTwoSchema}
            initialValues={{
              storeOwnerName: "",
              openingDays: "",
              storeOpenTime: "",
            }}
            onSubmit={async (values) => {
              setLoading(true);
              await axiosInstance
                .post("/store", values)
                .then((response) => {
                  const data: any = response.data;
                  setLoading(false);
                  if (response.status === 200) {
                    showToast(`${data.name} stores created`);
                    onBoardingNextScreen(3, false);
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
              <>
                <StoreDetailsFormTwo navigation={navigation} />
              </>
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
    alignItems:"center",
    padding: 20,
  },
  inputField: {
    marginTop: 1,
    padding: 0,
  },
  typeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 0,
    marginTop: 20,
    marginBottom: 10,
  },
  storeTypeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  iconImage: {
    height: 20,
    width: 10,
  },
  input: {
    width: 100,
    margin: 0,
    padding: 0,
  },
  addressField: {
    height: 70,
  },
  button: {
    width: 250,
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
