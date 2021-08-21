import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Switch, Image, Button } from "react-native-elements";
import addproductContent from "@json/add-product.json";
import pizza from "@assets/pizza.png";
import InputField from "@components/InputField";
import { Formik } from "formik";
import addProductSchema from "@components/addProductSchema";

export default function AddProductScreen() {
  return (
    <View style={styles.container}>
      <Switch color="orange" />
      <Image
        style={styles.productImage}
        source={pizza}
        height={300}
        width={300}
      />
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
          <form>
            {addproductContent.map((item: any, index) => (
              <InputField
                onChangeText={() => handleChange(item.name)}
                onBlur={() => handleBlur(item.name)}
                value={values[item.name]}
                errorMessage={errors[item.name] && touched[item.name]}
                key={index}
                label={item.label}
              />
            ))}
            <Button
              disabled={!isValid}
              title="Add Produt"
              type="solid"
              onPress={handleSubmit}
            />
          </form>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    height: 200,
    width: 200,
  },
});

type valuesType = {
  productName: string;
  productAmount: string;
  productSize: string;
};

type productType = {
  label: string;
  name: string;
};
