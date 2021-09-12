import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerStackParamList } from "@customTypes/.";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import colors from "@utils/colors";

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
        <View style={styles.container}>
            <Text style={styles.status}>Failed Payment</Text>
            <Text style={styles.textStyle}>
                Total amount contradiction. Please verify again
            </Text>
            <View style={styles.buttonView}>
                <Button
                    titleStyle={styles.buttonStyle}
                    type="clear"
                    onPress={nextScreen}
                    title="Back"
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
        color: colors.accentRed,
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
