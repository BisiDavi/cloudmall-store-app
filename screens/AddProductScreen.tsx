import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image, Button } from "react-native-elements";
import addproductContent from "@json/add-product.json";
import pizza from "@assets/pizza.png";
import DisplayFormElements from "@components/forms/DisplayFormElements";
import { Formik } from "formik";
import addProductSchema from "@components/forms/AddProductSchema";

export default function AddProductScreen() {
  const productContent: productType[] = addproductContent;
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={pizza} />
      <Formik
        validationSchema={addProductSchema}
        initialValues={{ productName: "", productAmount: "", productSize: "" }}
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
            {productContent.map((formElement, index) => (
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  productImage: {
    height: 150,
    width: 200,
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: 30,
    marginRight: 30,
  },
  inputLabel: {
    padding: 0,
    marginTop: -5,
  },
  inputContainer: {
    padding: 0,
    height: 35,
    marginBottom: 0,
  },
  input: {
    padding: 0,
  },
});

type productType = {
  label: string;
  name: string;
  type: string;
};
