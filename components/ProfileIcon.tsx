import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { DrawerItem, DrawerItemList } from "@react-navigation/drawer";

export default function ProfileIcon(props: any) {
    return (
        <View>
            <View>
                <Avatar avatarStyle={styles.avatar} rounded />
                <Text>Muhammad</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem onPress={() => {}} label="Logout" />
        </View>
    );
}
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
