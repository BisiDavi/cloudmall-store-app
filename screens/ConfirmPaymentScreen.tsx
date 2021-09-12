import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerStackParamList } from "@customTypes/.";
import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";

type ConfirmPaymentNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "ConfirmPaymentScreen"
>;

type Props = {
    navigation: ConfirmPaymentNavigationProps;
};

export default function ConfirmPayment({ navigation }: Props) {
    function nextScreen() {
        navigation.navigate("PaymentApprovedScreen");
    }
    return (
        <View>
            <Text>Input Total Amount</Text>
            <Input />
            <Button onPress={nextScreen} title="Scan to Accept Payment" />
        </View>
    );
}

