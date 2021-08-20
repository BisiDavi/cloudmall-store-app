import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Switch, Image, ListItem } from "react-native-elements";
import storeContent from "@json/my-store-content.json";
import pizza from "../assets/pizza.png";

export default function MyStoreScreen() {
  return (
    <View style={styles.container}>
      <Switch color="orange" />
      <Image source={pizza} height={300} width={300} />
      {storeContent.map((item, index) => (
        <ListItem key={index} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
