import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { BottomTabParamList } from "@customTypes/.";
import { Image } from "react-native-elements";
import addproductContent from "@json/add-product.json";
import pizza from "@assets/pizza.png";
import ProgressIndicator from "@components/ProgressIndicator";
import { ScrollView } from "react-native-gesture-handler";
import AddNewProductForm from "@components/forms/AddNewProductForm";
import Fab from "@components/Fab";
import colors from "@utils/colors";

type AddProductScreenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "AddProductScreen"
>;

type AddProductScreenRouteProps = RouteProp<
  BottomTabParamList,
  "AddProductScreen"
>;

type Props = {
  route: AddProductScreenRouteProps;
  navigation: AddProductScreenNavigationProps;
};

export default function AddProductScreen({ navigation }: Props) {
  const [productImage, setProductImage] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Step 1: Product Details</Text>
        <ProgressIndicator
          style={styles.progressIndicator}
          selected={1}
          total={2}
        />
        <View style={styles.uploadProductImage}>
          <View style={styles.FabView}>
            <View style={styles.fabContainer}>
              <Fab onPress={() => {}} />
            </View>
            <Text>Upload Product Picture</Text>
          </View>
        </View>
        {productImage && <Image style={styles.productImage} source={pizza} />}
        <AddNewProductForm navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 15,
  },
  productImage: {
    height: 150,
    width: 200,
    marginBottom: 20,
  },
  progressIndicator: {
    margin: 5,
    marginLeft: 0,
    marginBottom: 20,
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    marginTop: 0,
    margin: 10,
    marginLeft: 0,
    textAlign: "center",
  },
  uploadProductImage: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  fabContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 70,
    marginTop: 30,
  },
  FabView: {
    height: 160,
    width: 160,
    backgroundColor: colors.neutral3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
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
