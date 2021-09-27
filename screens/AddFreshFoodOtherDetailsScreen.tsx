import React from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import ProgressIndicator from "@components/ProgressIndicator";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import AddProductOtherDetailsForm from "@components/forms/AddProductOtherDetailsForm";
import { DrawerStackParamList } from "../customTypes";
import { SafeAreaView } from "react-native-safe-area-context";

type AddFreshFoodOtherDetailsScreenNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "AddFreshFoodOtherDetailsScreen"
>;

type AddFreshFoodOtherDetailsScreenRouteProps = RouteProp<
    DrawerStackParamList,
    "AddFreshFoodOtherDetailsScreen"
>;

type Props = {
    route?: AddFreshFoodOtherDetailsScreenRouteProps;
    navigation: AddFreshFoodOtherDetailsScreenNavigationProps;
};

export default function AddFreshFoodOtherDetailsScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.scrollView}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <ProgressIndicator
                        style={styles.progressIndicator}
                        selected={2}
                        title="Step 2: Other Details (fresh food)"
                        total={2}
                    />
                    <AddProductOtherDetailsForm navigation={navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        margin: 20,
        marginTop: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        width: Dimensions.get("window").width * 0.9,
    },
    progressIndicator: {
        margin: 5,
        marginLeft: 0,
        marginBottom: 20,
        marginTop: 0,
    },
    title: {
        fontFamily: "MontserratBold",
        fontSize: 16,
        marginTop: 0,
        margin: 10,
        marginLeft: 0,
        textAlign: "center",
    },
});
