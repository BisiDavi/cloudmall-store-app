import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Switch, Image, ListItem, withBadge } from "react-native-elements";
import storeContent from "@json/my-store-content.json";
import pizza from "@assets/pizza.png";

export default function MyStoreScreen() {
  return (
    <View style={styles.container}>
      <Switch style={styles.switch} color="orange" />
      <Image
        PlaceholderContent={<ActivityIndicator size="large" color="#0000ff" />}
        source={pizza}
        style={styles.storeImage}
      />
      <View style={styles.listView}>
        {storeContent.map((item, index) => (
          <ListItem key={index} bottomDivider>
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
  },
  storeImage: {
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
