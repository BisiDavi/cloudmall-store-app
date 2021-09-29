import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ListItem, Image } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import clipboard from "@assets/clipboard.png";
import colors from "@utils/colors";
import displayAsset from "@utils/displayAsset";

export default function OrdersListItem({ item, onPress }: OrdersViewProps) {
    const statusStyle =
        item.status === "New"
            ? styles.new
            : item.status === "Pending"
            ? styles.pending
            : styles.completed;

    return (
        <TouchableHighlight
            style={styles.touchableOpacity}
            key={item?.id}
            onPress={onPress}
        >
            <ListItem style={styles.listItem} bottomDivider>
                <Image
                    source={displayAsset(item.image)}
                    style={styles.avatar}
                />
                <ListItem.Content style={styles.listItemContent}>
                    <View style={styles.row}>
                        <Text>{item?.name}</Text>
                        <Text>{item?.code}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>{item?.time}</Text>
                        <Image style={styles.clipboard} source={clipboard} />
                        <Text style={{ ...styles.status, ...statusStyle }}>
                            {item?.status}
                        </Text>
                    </View>
                </ListItem.Content>
            </ListItem>
        </TouchableHighlight>
    );
}

interface OrdersViewProps {
    onPress?: () => void;
    item: {
        id: number;
        name: string;
        code: string;
        time: string;
        status: string;
        image: string;
    };
}

const styles = StyleSheet.create({
    completed: {
        backgroundColor: colors.mallBlue5,
    },
    pending: {
        backgroundColor: colors.cloudOrange5,
    },
    new: {
        backgroundColor: colors.accentRed,
    },
    touchableOpacity: {
        width: Dimensions.get("window").width,
        height: 120,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width,
        height: 120,
    },
    listItemContent: {
        width: Dimensions.get("window").width,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        //width: "100%",
        width: Dimensions.get("window").width * 0.7,
        marginTop: 10,
        marginBottom: 10,
    },
    clipboard: {
        height: 20,
        width: 20,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 100,
        margin: 5,
    },
    status: {
        padding: 5,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4,
        fontSize: 12,
        color: colors.neutralWhite,
    },
    appModal: {
        flex: 1,
    },
});
