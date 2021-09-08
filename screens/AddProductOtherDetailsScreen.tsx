import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import ProgressIndicator from "@components/ProgressIndicator";
import { View, Text, StyleSheet } from "react-native";
import AddProductOtherDetailsForm from "@components/forms/AddProductOtherDetailsForm";
import { BottomTabParamList } from "../customTypes";

type AddProductOtherDetailsScreenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "AddProductOtherDetailsScreen"
>;

type AddProductOtherDetailsScreenRouteProps = RouteProp<
  BottomTabParamList,
  "AddProductOtherDetailsScreen"
>;

type Props = {
  route?: AddProductOtherDetailsScreenRouteProps;
  navigation: AddProductOtherDetailsScreenNavigationProps;
};

export default function AddProductOtherDetailsScreen({ navigation }: Props) {
  return (
    <View>
      <Text style={styles.title}>Step 2: Other Details</Text>
      <ProgressIndicator
        style={styles.progressIndicator}
        selected={2}
        total={2}
      />
      <AddProductOtherDetailsForm />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
