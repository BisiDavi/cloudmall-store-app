import React from "react";
import displayAsset from "@utils/displayAsset";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import MenuSvg from "@assets/MenuSvg";
import NotificationSvg from "@assets/NotificationSvg";

interface HeaderIconProps {
    position: "left" | "right";
    onPress: any;
    attributes?: any;
}

export default function HeaderIcon({
    position,
    onPress,
    attributes,
}: HeaderIconProps) {
    const positionStyle = position === "left" ? styles.left : styles.right;

    function toggleDrawer() {
        onPress.openDrawer();
    }
    function notificationHandler() {
        console.log("props", attributes);
    }
    const color = attributes ? attributes.pressColor : "blue";
    const Icon =
        position === "left" ? (
            <MenuSvg color={color} />
        ) : (
            <NotificationSvg color={attributes?.pressColor} />
        );
    const onPressHandler =
        position === "left" ? toggleDrawer : notificationHandler;
    return (
        <TouchableOpacity style={positionStyle} onPress={onPressHandler}>
            {Icon}
        </TouchableOpacity>
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
