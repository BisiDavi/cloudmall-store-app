import React, { useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { ListItem, Switch } from "react-native-elements";
import productContent from "@json/products.json";
import { FAB } from "react-native-elements";
import { BottomTabParamList } from "@customTypes/.";
import colors from "@utils/colors";

type StoreScreeenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "Products"
>;

type StoreScreeenRouteProps = RouteProp<BottomTabParamList, "Products">;

type Props = {
  route: StoreScreeenRouteProps;
  navigation: StoreScreeenNavigationProps;
};

type product = {
  meal: string;
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
          <Text style={styles.edit}>Edit</Text>
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

export default function MyStoreScreen({ navigation }: Props) {
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
        <FAB
          color={colors.mallBlue3}
          title="+"
          buttonStyle={styles.fab}
          titleStyle={styles.fabStyle}
          placement="right"
        />
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
  fab: {
    borderRadius: 100,
    borderWidth: 0,
    height: 60,
    width: 60,
    padding: 0,
    backgroundColor: colors.mallBlue3,
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
    borderLeftColor:"transparent",
    borderTopColor:"transparent",
    borderRightColor:"transparent"

  },
  fabStyle: {
    fontSize: 40,
    marginTop: -5,
    width: 40,
  },
});
