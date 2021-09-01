import React, { useState } from "react";
import { Button } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { Dimensions, StyleSheet, View } from "react-native";
import { storeDetailsScreenOneSchema } from "@components/forms";
import { colors, screenNavigate } from "@utils/.";
import storeDetailsFormOne from "@json/storeDetailsFormOne.json";
import { RootState } from "@store/RootReducer";
import { StoreDetailsAction } from "@store/StoreDetailsAction";
import DisplayFormElements from "@components/forms/DisplayFormElements";

export default function StoreDetailsFormOne({ navigation }: any) {
  const state: any = useSelector((state: RootState) => state.storeDetails);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  console.log("form state", state);

  return (
    <>
      <Spinner visible={loading} color="blue" />
      <View style={styles.form}>
        <Formik
          validationSchema={storeDetailsScreenOneSchema}
          initialValues={{
            storeName: "",
            storeEmail: "",
            phoneNumber: "",
            storeAddress: "",
          }}
          onSubmit={(values) => {
            setLoading(true);
            dispatch(StoreDetailsAction(values));
            setLoading(false);
            screenNavigate(2, navigation);
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
    </>
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
