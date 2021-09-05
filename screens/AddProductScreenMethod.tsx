import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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
      <View style={styles.methods}>
        {addProductMethod.map((method, index) => (
          <View style={styles.method} key={index}>
            <Text style={styles.text}>{method}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  methods: {
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  method: {
    height: 120,
    width: 120,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.mallBlue2,
    borderRadius: 20,
    margin: 15,
  },
  text: {
    color: colors.mallBlue5,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },
});

export default AddProductScreenMethod;
