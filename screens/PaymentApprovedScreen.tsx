import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerStackParamList } from "@customTypes/.";
import colors from "@utils/colors";
import { View, Text, StyleSheet } from "react-native";
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
        <View style={styles.container}>
            <Text style={styles.status}>Payment Approved</Text>
            <Text style={styles.textStyle}>
                N7,000 has been transferred to your account
            </Text>
            <View style={styles.buttonView}>
                <Button
                    titleStyle={styles.buttonStyle}
                    type="clear"
                    onPress={nextScreen}
                    title="Back to Home"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    status: {
        color: colors.mallBlue5,
        fontFamily: "MontserratBold",
        fontSize: 20,
        lineHeight: 24,
    },
    buttonView: {
        position: "absolute",
        bottom: 20,
    },
    textStyle: {
        marginTop: 50,
        fontFamily: "MontserratRegular",
        fontSize: 18,
        lineHeight: 28,
        textAlign: "center",
    },
    buttonStyle: {
        color: colors.mallBlue5,
    },
});
