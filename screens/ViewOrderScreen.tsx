import colors from "@utils/colors";
import displayAsset from "@utils/displayAsset";
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { Button, Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Shadow } from "react-native-shadow-2";

export default function ViewOrderScreen({ route }: any) {
    const [note, setNote] = useState("");
    console.log("route viewOrderScreen", route.params);

    const userOrders = route.params;
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.packView}>
                    <Text>Number of Packs</Text>
                    <Text>2 Packs</Text>
                </View>
                <View style={styles.orderGroup}>
                    {userOrders.orders.map((order: any, index: number) => (
                        <View style={styles.orderView} key={index}>
                            <Image
                                style={styles.image}
                                source={displayAsset(userOrders.image)}
                            />
                            <View style={styles.foodDescription}>
                                <Text>{order.name}</Text>
                                <Text>N{order.amount}</Text>
                            </View>
                        </View>
                    ))}
                    <View style={{ ...styles.orderView, ...styles.totalView }}>
                        <Text style={styles.totalText}>Total Amount</Text>
                        <Text style={styles.totalText}>N1200</Text>
                    </View>
                    <View style={styles.note}>
                        <TextInput
                            multiline={true}
                            numberOfLines={3}
                            onChangeText={(text) => setNote(text)}
                            value={note}
                            placeholder="Dont put plenty oil in the beans"
                        />
                    </View>
                    <View style={styles.note}>
                        <Text>
                            Accept the order if all the products are available.
                            Recommend Replacement for unavailable products
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            buttonStyle={styles.outlineButton}
                            type="outline"
                            titleStyle={styles.outlineTitle}
                            title="Recommend Replacement"
                        />
                        <Button
                            buttonStyle={styles.buttonStyle}
                            title="Accept Order"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        margin: 20,
        width: Dimensions.get("window").width * 0.9,
    },
    packView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.9,
    },
    orderGroup: {
        marginTop: 20,
    },
    orderView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 3,
        marginBottom: 3,
        alignItems: "center",
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.black,
    },
    buttonView: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    buttonStyle: {
        alignItems: "center",
        backgroundColor: colors.mallBlue5,
        justifyContent: "center",
        marginTop: 20,
        width: Dimensions.get("window").width * 0.8,
        height: 50,
    },
    image: {
        height: 35,
        width: 35,
    },
    foodDescription: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get("window").width * 0.7,
    },
    outlineButton: {
        marginTop: 20,
        width: Dimensions.get("window").width * 0.8,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.mallBlue5,
        shadowColor: "rgba(184, 110, 0, 0.25)",
        shadowOpacity: 0.2,
        height: 50,
        borderRadius: 5,
    },
    outlineTitle: {
        color: colors.mallBlue5,
    },
    totalView: {
        marginTop: -2,
    },
    totalText: {
        color: colors.mallBlue5,
        fontFamily: "RobotoBold",
    },
    note: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: colors.mallBlue5,
    },
});
