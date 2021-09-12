import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    View,
    Text,
} from "react-native";

import { RootStackParamList } from "../customTypes";
import LoginForm from "@components/forms/LoginForm";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@utils/.";

type LoginScreenNavigationProps = StackNavigationProp<
    RootStackParamList,
    "LoginScreen"
>;

type Props = {
    navigation: LoginScreenNavigationProps;
};

export default function LoginScreen({ navigation }: Props) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled={true}
        >
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={styles.textView}>
                            <Text style={styles.title}>Welcome Back</Text>
                        </View>
                        <LoginForm navigation={navigation} />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    title: {
        color: colors.cloudOrange5,
        fontFamily: "MontserratBold",
        fontSize: 18,
        lineHeight: 28,
    },
    textView: {
        margin: 30,
        marginTop: 20,
        marginBottom: 0,
    },
    text: {
        fontFamily: "RobotoRegular",
        fontSize: 14,
        lineHeight: 20,
    },
});
