import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerStackParamList } from "@customTypes/.";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

type PaymentApprovedNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "PaymentApprovedScreen"
>;

type Props = {
    navigation: PaymentApprovedNavigationProps;
};

export default function PaymentApprovedScreen({ navigation }: Props) {
    function nextScreen() {
        navigation.navigate("FailedPaymentScreen");
    }
    return (
        <View>
            <Text>Payment Approved</Text>
            <Text>N7,000 has been transferred to your account</Text>
            <Button type="clear" onPress={nextScreen} title="Back to Home" />
        </View>
    );
}
