import React from "react";
import { Image } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import JollofRice from "@assets/jollofRice.png";
import colors from "@utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProfileIcon(props: any) {
    function navigateToProfile() {
        props.navigation.navigate("ProfileScreen");
    }
    return (
        <DrawerContentScrollView style={styles.drawerScrollView} {...props}>
            <TouchableOpacity onPress={navigateToProfile}>
                <View style={styles.profileIconView}>
                    <Image source={JollofRice} style={styles.avatar} />
                    <Text style={styles.userName}>Muhammad</Text>
                </View>
            </TouchableOpacity>
            <DrawerItemList {...props} />
            <DrawerItem
                labelStyle={styles.drawerItem}
                activeTintColor={colors.neutralWhite}
                onPress={() => {}}
                label="Logout"
            />
        </DrawerContentScrollView>
    );
}
const styles = StyleSheet.create({
    avatar: {
        height: 50,
        width: 50,
    },
    userName: {
        color: colors.mallBlue5,
        fontFamily: "RobotoBold",
        fontSize: 16,
    },
    sidebarText: {
        color: "black",
    },
    drawerItem: {
        fontFamily: "RobotoBold",
        fontSize: 16,
        color: "black",
    },
    profileIconView: {
        alignItems: "center",
        justifyContent: "center",
        margin: 40,
    },
    drawerItemList: {
        color: colors.neutralWhite,
    },
    drawerScrollView: {
        backgroundColor: colors.neutralWhite,
    },
});
