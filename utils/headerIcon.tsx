import React from "react";
import displayAsset from "@utils/displayAsset";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements";

interface HeaderIconProps {
    icon: string;
    position: "left" | "right";
    onPress: any;
}

export default function HeaderIcon({
    icon,
    position,
    onPress,
}: HeaderIconProps) {
    const positionStyle = position === "left" ? styles.left : styles.right;

    function toggleDrawer() {
        onPress.openDrawer();
    }
    function notificationHandler() {
        console.log("notification drawer");
    }
    const onPressHandler =
        position === "left" ? toggleDrawer : notificationHandler;
    return (
        <Image
            style={{ ...styles.icon, ...positionStyle }}
            onPress={onPressHandler}
            source={displayAsset(icon)}
        />
    );
}

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20,
        marginLeft: 20,
    },
    left: {
        marginLeft: 20,
    },
    right: {
        marginRight: 20,
    },
});
