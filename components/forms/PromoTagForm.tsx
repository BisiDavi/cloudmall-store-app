import React from "react";
import { Formik } from "formik";
import addNewProductSchema from "@components/forms/AddNewProductSchema";
import { View, StyleSheet } from "react-native";
import DisplayFormElements from "@components/forms/DisplayFormElements";
import { Button } from "react-native-elements";
import promoTagContent from "@json/add-promo-tag.json";
import colors from "@utils/colors";

export default function PromoTagForm({ navigation: { goBack } }: any) {
  return (
    <Formik
      validationSchema={addNewProductSchema}
      initialValues={{
        availabiltyDuration: "",
        promoName: "",
        discountPercent: "",
        promoDuration: "",
      }}
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
          {promoTagContent.map((formElement, index) => (
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
              title="Back"
              type="solid"
              titleStyle={styles.backButtonTitle}
              onPress={() => goBack()}
              buttonStyle={styles.backButton}
            />
            <Button
              disabled={!isValid}
              title="Submit"
              type="solid"
              onPress={handleSubmit}
              buttonStyle={styles.nextButton}
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
    //   display:"flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "92%",
    margin: 10,
    marginTop: 0,
  },
});

type productType = {
  label: string;
  name: string;
  type: string;
};
