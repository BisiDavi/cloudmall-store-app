import React, { useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { ListItem, Switch, Image } from "react-native-elements";
import productContent from "@json/products.json";
import { BottomTabParamList } from "@customTypes/.";
import colors from "@utils/colors";
import Fab from "@components/Fab";
import displayAsset from "@utils/displayAsset";

type ProductScreenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "Products"
>;

type ProductScreenRouteProps = RouteProp<BottomTabParamList, "Products">;

type Props = {
  route: ProductScreenRouteProps;
  navigation: ProductScreenNavigationProps;
};

interface productType {
  product: "staple" | "swallow";
}

function ListView({ item }: any) {
  const [toggle, setToggle] = useState(false);

  return (
    <ListItem bottomDivider style={styles.listItem}>
      <ListItem.Content>
        <View style={styles.listViewContent}>
          <Text style={styles.meal}>{item.meal}</Text>
          <Text style={styles.edit}>
            <Image source={displayAsset("editIcon")} style={styles.editIcon} />
          </Text>
          <Switch
            value={toggle}
            onValueChange={() => setToggle(!toggle)}
            style={styles.switch}
            color={colors.cloudOrange5}
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );
}

function ProductListView({ product }: productType) {
  return (
    <>
      {productContent[product].map((item, index) => (
        <ListView item={item} key={index} />
      ))}
    </>
  );
}

export default function ProductScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.productView}>
          <View style={styles.textView}>
            <Text style={styles.category}>Staple Food</Text>
          </View>
          <ProductListView product="staple" />
          <View style={styles.textView}>
            <Text style={styles.category}>Swallow</Text>
          </View>
          <ProductListView product="swallow" />
        </View>
      </ScrollView>
      <View style={styles.fabView}>
        <Fab onPress={() => navigation.navigate("AddProductScreenMethod")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: colors.neutralWhite,
    flexDirection: "column",
    width: Dimensions.get("window").width,
  },
  meal: {
    width: 100,
  },
  edit: {
    color: colors.mallBlue5,
  },
  switch: {
    display: "flex",
  },
  editIcon: {
    height: 15,
    width: 15,
  },
  listItem: {
    width: Dimensions.get("window").width,
  },
  listViewContent: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.9,
  },
  fabView: {
    height: 70,
  },
  productView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  category: {
    color: colors.mallBlue5,
    padding: 15,
  },
  textView: {
    height: 50,
    width: Dimensions.get("window").width,
    borderWidth: 1,
    borderBottomColor: colors.neutral3,
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
  },
});
