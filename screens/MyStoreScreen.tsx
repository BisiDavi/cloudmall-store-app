import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, ActivityIndicator, Dimensions } from "react-native";
import { Switch, Image, ListItem } from "react-native-elements";
import storeContent from "@json/my-store-content.json";
import { BottomTabParamList } from "../customTypes";
import pizza from "@assets/pizza.png";
import colors from "@utils/colors";

type LoginScreenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "MyProducts"
>;

type LoginScreenRouteProps = RouteProp<BottomTabParamList, "MyProducts">;

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
            <ListItem.Chevron iconStyle={styles.iconStyle} />
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
    backgroundColor:colors.neutralWhite
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
    width: Dimensions.get("window").width * 0.8,
    // padding:20
  },
  iconStyle: {
    color: colors.cloudOrange4,
    fontSize: 20,
  },
});

type storeType = {
  title: string;
  link: string;
};
