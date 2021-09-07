import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image, Button, FAB } from "react-native-elements";
import { Formik } from "formik";
import addproductContent from "@json/add-product.json";
import pizza from "@assets/pizza.png";
import DisplayFormElements from "@components/forms/DisplayFormElements";
import addProductSchema from "@components/forms/AddProductSchema";
import ProgressIndicator from "@components/ProgressIndicator";
import { ScrollView } from "react-native-gesture-handler";
import AddNewProductForm from "@components/forms/AddNewProductForm";

export default function AddProductScreen() {
  const productContent: productType[] = addproductContent;
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProgressIndicator selected={1} total={2} />
        <View>
          <FAB />
          <Text>Upload Product Picture</Text>
        </View>
        <Image style={styles.productImage} source={pizza} />
        <AddNewProductForm />
      </View>
    </ScrollView>
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
