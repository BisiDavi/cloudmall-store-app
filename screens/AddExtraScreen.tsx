import React from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabParamList } from "@customTypes/.";
import { RouteProp } from "@react-navigation/native";
import AddExtraForm from "@components/forms/AddExtraForm";

type AddProductScreenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "AddExtraScreen"
>;

type AddProductScreenRouteProps = RouteProp<
  BottomTabParamList,
  "AddExtraScreen"
>;

type Props = {
  route: AddProductScreenRouteProps;
  navigation: AddProductScreenNavigationProps;
};

export default function AddExtraScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <AddExtraForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
