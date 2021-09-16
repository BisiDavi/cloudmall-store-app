import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import RequestRiderForm from "@components/forms/RequestRiderForm";
import { StackScreenProps } from "@react-navigation/stack";
import colors from "@utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerStackParamList } from "@customTypes/.";

export default function RequestARiderScreen({
    navigation,
}: StackScreenProps<DrawerStackParamList, "RequestARiderScreen">) {
    function navigateToDeliveryAddress() {
        return navigation.navigate("DeliveryAddressScreen");
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.spaceUp}>
                    <Text style={styles.link}>Order Details</Text>
                </View>
                <Text style={styles.text}>Order Category</Text>
                <View style={styles.unitView}>
                    <Text style={styles.text}>Number of Units</Text>
                    <Input containerStyle={styles.inputStyle} />
                </View>
                <TouchableOpacity onPress={navigateToDeliveryAddress}>
                    <Text style={styles.link}>Delivery Details</Text>
                </TouchableOpacity>
                <RequestRiderForm />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        justifyContent: "flex-start",
    },
    unitView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "space-between",
    },
    inputStyle: {
        width: 100,
    },
    spaceUp: {
        marginBottom: 50,
    },
    link: {
        color: colors.mallBlue5,
        fontFamily: "RobotoBold",
        fontSize: 20,
        lineHeight: 24,
        marginLeft: 10,
        marginBottom: 5,
    },
    text: {
        marginLeft: 10,
        color: colors.black,
        fontFamily: "RobotoRegular",
        fontSize: 17,
    },
});
