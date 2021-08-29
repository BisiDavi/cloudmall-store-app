import React, { useState } from "react";
import { Button } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { Dimensions, StyleSheet, View } from "react-native";
import { storeDetailsScreenOneSchema } from "@components/forms/StoreDetailsSchema";
import { useStoreSetupNavigation } from "@hooks/.";
import axiosInstance from "@network/axiosInstance";
import { showToast, colors, DisplayFormElements } from "@utils/.";
import storeDetailsFormOne from "@json/storeDetailsFormOne.json";
import { RootState } from "@store/RootReducer";
import { SetupStoreDetailsSubmittedAction } from "@store/StoreDetailsAction";

export default function StoreDetailsFormOne({ navigation }: any) {
  const state = useSelector((state: RootState) => state.storeDetails);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  console.log("storeType", state);
  const [storeId, setStoreId] = useState(null);
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);
  return (
    <View style={styles.form}>
      <Spinner visible={loading} color="blue" />
      <Formik
        validationSchema={storeDetailsScreenOneSchema}
        initialValues={{
          storeName: "",
          storeEmail: "",
          phoneNumber: "",
          storeAddress: "",
          storeType: state?.storeType,
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
                dispatch(SetupStoreDetailsSubmittedAction(values));
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
    padding: 20,
    paddingTop: 0,
  },
  buttonStyle: {
    width: Dimensions.get("window").width * 0.7,
    alignItems: "center",
    backgroundColor: colors.mallBlue5,
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
