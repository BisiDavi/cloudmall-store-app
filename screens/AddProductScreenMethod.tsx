import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";
import { BottomTabParamList } from "@customTypes/.";
import addProductMethod from "@json/add-product-method.json";
import colors from "@utils/colors";

type StoreScreeenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "AddProductScreenMethod"
>;

type StoreScreeenRouteProps = RouteProp<
  BottomTabParamList,
  "AddProductScreenMethod"
>;

type Props = {
  route: StoreScreeenRouteProps;
  navigation: StoreScreeenNavigationProps;
};

const AddProductScreenMethod = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      {addProductMethod.map((method, index) => (
        <View style={styles.method} key={index}>
          <Text style={styles.text}>{method}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  method: {
    height: 120,
    width: 120,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.mallBlue2,
    borderRadius: 20,
  },
  text: {
    color: colors.mallBlue5,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 24,
  },
});

export default AddProductScreenMethod;
