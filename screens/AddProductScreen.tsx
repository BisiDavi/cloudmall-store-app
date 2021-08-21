import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Switch, Image, Button } from "react-native-elements";
import addproductContent from "@json/add-product.json";
import pizza from "@assets/pizza.png";
import InputField from "@components/InputField";
import { Formik } from "formik";
import addProductSchema from "@components/addProductSchema";

export default function AddProductScreen() {
  const productContent: productType[] = addproductContent;
  const productValues = ["AddNewProduct", "EditAProduct", "ViewStore"];
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={pizza} />
      <Formik
        validationSchema={addProductSchema}
        initialValues={{ productName: "", productAmount: "", productSize: "" }}
        onSubmit={(values: any) => {
          // const { productName, productAmount, productSize } = values;
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
            {productContent.map((item, index) => (
              <InputField
                onChangeText={handleChange(item.name)}
                onBlur={handleBlur(item.name)}
                value={values[item.name]}
                styleInput={styles.input}
                styleContainer={styles.inputContainer}
                styleLabel={styles.inputLabel}
                errorMessage={errors[item.name] && touched[item.name]}
                key={index}
                label={item.label}
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
    marginBottom:20
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
};
