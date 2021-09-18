import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Image } from "react-native-elements";
import clipboard from "@assets/clipboard.png";
import colors from "@utils/colors";
import displayAsset from "@utils/displayAsset";
import { ordersList } from "./NewOrdersTab";

export default function OrdersListItem({ item, onPress }: OrdersViewProps) {
    const statusStyle =
        item.status === "New"
            ? styles.new
            : item.status === "Pending"
            ? styles.pending
            : styles.completed;

    const navigation = useNavigation();

    function viewOrder(item: ordersList) {
        navigation.navigate("ViewOrderScreen", item);
    }

    return (
        <ListItem
            key={item?.id}
            style={styles.listItem}
            onPress={() => viewOrder(item)}
            bottomDivider
        >
            <Image source={displayAsset(item.image)} style={styles.avatar} />
            <ListItem.Content>
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
    listItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
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
