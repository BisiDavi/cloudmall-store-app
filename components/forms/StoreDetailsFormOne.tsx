import React, { useState } from "react";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { StyleSheet, View } from "react-native";
import { storeDetailsScreenOneSchema } from "@components/forms/StoreDetailsSchema";
import { useStoreSetupNavigation } from "@hooks/.";
import RadioField from "@components/RadioField";
import axiosInstance from "../../network/axiosInstance";
import { showToast } from "../../utils";
import storeDetailsFormOne from "@json/storeDetailsFormOne.json";
import DisplayFormElements from "../../utils/displayFormElements";

const radioField = [{ label: "Instore" }, { label: "Pickup" }];


export default function StoreDetailsFormOne({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const [storeId, setStoreId] = useState(null);
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);
  return (
    <View>
      <Spinner visible={loading} color="blue" />
      <Formik
        validationSchema={storeDetailsScreenOneSchema}
        initialValues={{
          storeName: "",
          storeEmail: "",
          phoneNumber: "",
          storeAddress: "",
          storeType: "",
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
          <View style={styles.form}>
            {storeDetailsFormOne.map((formElement, index: number) => (
              <DisplayFormElements
                key={index}
                formElement={formElement}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
            ))}
            <RadioField content={radioField} />
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
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 10,
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
});
