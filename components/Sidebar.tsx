import React from "react";
import { ListItem, Avatar, Image } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import sidebarContent from "@json/sidebar.json";
import colors from "@utils/colors";

const Sidebar = () => {
  function navigationHandler(link: any) {
    console.log("link", link);
  }
  return (
    <View>
      <Avatar avatarStyle={styles.avatar} rounded />
      <Text>Muhammad</Text>
      <View style={styles.listView}>
        {sidebarContent.map((sidebarLink, index) => (
          <ListItem
            key={index}
            onPress={() => navigationHandler(sidebarLink.link)}
            bottomDivider
          >
            <ListItem.Content>
              <Text style={styles.sidebarText}>{sidebarLink.name}</Text>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
  },
  listView: {},
  sidebarText: {
    color: "black",
  },
});
export default Sidebar;
