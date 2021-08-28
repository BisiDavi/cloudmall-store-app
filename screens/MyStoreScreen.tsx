import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Switch, Image, ListItem } from "react-native-elements";
import storeContent from "@json/my-store-content.json";
import { BottomTabParamList } from "../customTypes";
import pizza from "@assets/pizza.png";

type LoginScreenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "MyStore"
>;

type LoginScreenRouteProps = RouteProp<BottomTabParamList, "MyStore">;

type Props = {
  route: LoginScreenRouteProps;
  navigation: LoginScreenNavigationProps;
};

export default function MyStoreScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Switch style={styles.switch} color="cloudOrange5" />
      <Image
        PlaceholderContent={<ActivityIndicator size="large" color="#0000ff" />}
        source={pizza}
        style={styles.storeImage}
      />
      <View style={styles.listView}>
        {storeContent.map((item: any, index) => (
          <ListItem
            key={index}
            onPress={() => navigation.navigate(item.link)}
            bottomDivider
          >
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
  storeImage: {
    marginTop: 50,
    height: 200,
    width: 300,
    margin: 20,
  },
  listView: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});

type storeType = {
  title: string;
  link: string;
};
