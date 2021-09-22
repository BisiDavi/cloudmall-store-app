import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerStackParamList } from "@customTypes/.";
import colors from "@utils/colors";
import { RouteProp } from "@react-navigation/native";
import InputField from "@components/InputField";

type AddProductScreenNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "AddProductCategoryScreen"
>;

type AddProductScreenRouteProps = RouteProp<
    DrawerStackParamList,
    "AddProductCategoryScreen"
>;

type Props = {
    route: AddProductScreenRouteProps;
    navigation: AddProductScreenNavigationProps;
};

export default function AddProductCategoryScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <InputField label="Add Product Category" />
            <View style={styles.buttonViewStyle}>
                <Button
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonText}
                    title="Add Product Category"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    buttonStyle: {
        backgroundColor: colors.mallBlue5,
        width: "100%",
    },
    buttonViewStyle: {
        position: "absolute",
        bottom: 20,
    },
    buttonText: {
        color: colors.neutralWhite,
    },
});
