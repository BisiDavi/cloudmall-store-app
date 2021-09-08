import React from "react";
import { Formik } from "formik";
import requestRiderSchema from "@components/forms/RequestRiderSchema";
import { View, StyleSheet } from "react-native";
import DisplayFormElements from "@components/forms/DisplayFormElements";
import { Button } from "react-native-elements";
import requestRiderContent from "@json/request-rider.json";
import colors from "@utils/colors";

export default function RequestRiderForm() {
  return (
    <Formik
      initialValues={{
        personName: "",
        phone: "",
        address: "",
        additionalDescription: "",
      }}
      validationSchema={requestRiderSchema}
      onSubmit={(values: any) => {
        console.log("values", values);
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
          {requestRiderContent.map((formElement, index) => (
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
          <View style={styles.buttonGroup}>
            <Button
              title="Proceed to Payment"
              type="solid"
              titleStyle={styles.backButtonTitle}
              //   onPress={goBack}
              buttonStyle={styles.backButton}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  nextButton: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.mallBlue5,
  },
  backButton: {
    borderWidth: 1,
    borderColor: colors.mallBlue5,
    backgroundColor: "transparent",
    width: 100,
    borderRadius: 10,
  },
  backButtonTitle: {
    color: colors.mallBlue5,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "92%",
    margin: 10,
    marginTop: 10,
  },
});
