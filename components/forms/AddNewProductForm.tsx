import React from "react";
import { Formik } from "formik";
import addProductSchema from "@components/forms/AddProductSchema";
import { View, StyleSheet } from "react-native";
import DisplayFormElements from "@components/forms/DisplayFormElements";
import { Button } from "react-native-elements";
import addproductContent from "@json/add-product.json";

export default function AddNewProductForm() {
  return (
    <Formik
      validationSchema={addProductSchema}
      initialValues={{
        productName: "",
        productAmount: "",
        productSize: "",
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
          {addproductContent.map((formElement, index) => (
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
          <Button
            disabled={!isValid}
            title="Add Product"
            type="solid"
            onPress={handleSubmit}
            buttonStyle={styles.button}
          />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: 30,
    marginRight: 30,
  },
});

type productType = {
  label: string;
  name: string;
  type: string;
};
