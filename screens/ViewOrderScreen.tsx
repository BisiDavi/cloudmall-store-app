import colors from "@utils/colors";
import displayAsset from "@utils/displayAsset";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button, Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ViewOrderScreen({ route, navigation }: any) {
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
                    <View>
                        <Text>Total Amount</Text>
                        <Text>N1200</Text>
                    </View>
                    <View>
                        <Text>Dont put plenty oil in the beans</Text>
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
        width: Dimensions.get("window").width,
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
        width: Dimensions.get("window").width * 0.8,
    },
    buttonView: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: Dimensions.get("window").width * 0.7,
    },
    buttonStyle: {
        //width: Dimensions.get("window").width * 0.7,
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.mallBlue5,
        justifyContent: "center",
        marginTop: 20,
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
        width: Dimensions.get("window").width * 0.6,
    },
    outlineButton: {
        marginTop: 20,
        width: "100%",
        //width: Dimensions.get("window").width * 0.7,
        borderWidth: 1,
        borderColor: colors.mallBlue5,
        shadowColor: "rgba(184, 110, 0, 0.25)",
        shadowOpacity: 0.2,
        height: 50,
        borderRadius: 5,
    },
    outlineTitle: {
        color: colors.mallBlue5,
    },
});
