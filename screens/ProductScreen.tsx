import React from "react";
import { View, SafeAreaView, ScrollView, Text, Dimensions } from "react-native";
import { ListItem, Switch } from "react-native-elements";
import productContent from "@json/products.json";
import { FAB } from "react-native-elements";

type product = {
  meal: string;
};

type productType = "staple" | "swallow";

type productContentType = {
  staple: product[];
  swallow: product[];
};

const listProducts: productContentType = productContent;

function displayListView(type: productType) {
  return productContent[type].map((product: product, index: number) => (
    <ListItem key={index}>
      <ListItem.Content>
        <View>
          <Text>{product.meal}</Text>
          <Text>Edit</Text>
          <Switch color="cloudOrange5" />
        </View>
      </ListItem.Content>
    </ListItem>
  ));
}

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Staple Food</Text>
        {displayListView("staple")}
        <Text>Swallow</Text>
        {displayListView("swallow")}
        <View>
          <FAB placement="right" title="Create" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;
