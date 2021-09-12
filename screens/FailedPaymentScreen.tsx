import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerStackParamList } from "@customTypes/.";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

type FailedPaymentNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "FailedPaymentScreen"
>;

type Props = {
    navigation: FailedPaymentNavigationProps;
};

export default function FailedPaymentScreen({ navigation }: Props) {
    function nextScreen() {
        navigation.navigate("bottomTab");
    }
    return (
        <View>
            <Text>Failed Payment</Text>
            <Text>Total amount contradiction. Please verify again</Text>
            <Button type="clear" onPress={nextScreen} title="Back" />
        </View>
    );
}
