import React from "react";
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

type productType = "staple" | "swallow";

function displayListView(type: productType) {
  return productContent[type].map((product: product, index: number) => (
    <ListItem key={index}>
      <ListItem.Content>
        <View style={styles.listViewContent}>
          <Text>{product.meal}</Text>
          <Text>Edit</Text>
          <Switch color="cloudOrange5" />
        </View>
      </ListItem.Content>
    </ListItem>
  ));
}

export default function MyStoreScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.category}>Staple Food</Text>
        {displayListView("staple")}
        <Text style={styles.category}>Swallow</Text>
        {displayListView("swallow")}
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
    padding: 10,
  },
  switch: {
    display: "flex",
    alignItems: "flex-end",
    margin: 10,
    justifyContent: "flex-end",
    position: "absolute",
    right: 10,
    zIndex: 100,
  },
  listViewContent: {
    display: "flex",
    alignItems: "center",
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
    height: 70,
    width: 70,
    backgroundColor: colors.mallBlue3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    color: colors.mallBlue5,
  },
  fabStyle: {
    fontSize: 40,
    padding: 0,
    marginTop: -5,
  },
});
