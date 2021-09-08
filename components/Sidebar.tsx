import React from "react";
import { ListItem, Avatar, Image } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import sidebarContent from "@json/sidebar.json";

const Sidebar = () => {
  return (
    <View>
      <Avatar avatarStyle={styles.avatar} rounded />
      <Text>Muhammad</Text>
      <View style={styles.listView}>
        {sidebarContent.map((sidebarLink, index) => (
          <ListItem key={index} onPress={onPress} bottomDivider>
            <ListItem.Content>
              <Text>{sidebarLink.name}</Text>
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
});
export default Sidebar;
