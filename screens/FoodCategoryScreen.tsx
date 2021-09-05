import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import foodCategoryContent from "@json/food-category.json";
import colors from "@utils/colors";
import { BottomTabParamList } from "@customTypes/.";

type FoodCategoryScreenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "FoodCategoryScreen"
>;

type FoodCategoryScreenRouteProps = RouteProp<
  BottomTabParamList,
  "FoodCategoryScreen"
>;

type Props = {
  route: FoodCategoryScreenRouteProps;
  navigation: FoodCategoryScreenNavigationProps;
};

type item = {
  name: string;
  link: any;
};

const FoodCategoryScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      {foodCategoryContent.map((item: item, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.link)}
          key={index}
        >
          <View style={styles.category}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    height: 85,
    display: "flex",
    borderWidth: 1,
    borderColor: colors.mallBlue2,
    borderRadius: 7,
    margin: 15,
    justifyContent: "center",
  },
  categoryText: {
    paddingLeft: 30,
    color: colors.mallBlue5,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 24,
  },
});

export default FoodCategoryScreen;
