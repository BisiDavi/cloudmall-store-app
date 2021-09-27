import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Spinner from "react-native-loading-spinner-overlay";
import { RouteProp } from "@react-navigation/native";
import { Image } from "react-native-elements";

import FreshFoodProductForm from "@components/forms/FreshFoodProductForm";
import useUploadImage from "@hooks/useUploadImage";
import { colors } from "@utils/.";
import { ProgressIndicator, Fab } from "@components/.";
import { uploadProductImageRequest } from "@network/postRequest";
import { DrawerStackParamList } from "@customTypes/.";

type FreshFoodProductScreenNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "FreshFoodProductScreen"
>;

type FreshFoodProductScreenRouteProps = RouteProp<
    DrawerStackParamList,
    "FreshFoodProductScreen"
>;

type Props = {
    route: FreshFoodProductScreenRouteProps;
    navigation: FreshFoodProductScreenNavigationProps;
};

export default function FreshFoodProductScreen({ navigation }: Props) {
    const [loading, setLoading] = useState(false);
    const [uploadImageStatus, setUploadImageStatus] = useState(false);
    const {
        formDataState,
        image: productImage,
        pickImage,
    } = useUploadImage(setLoading, "image");
    console.log("uploadImageStatus", uploadImageStatus);

    async function uploadImage() {
        await uploadProductImageRequest(formDataState)
            .then((response) => {
                console.log("response", response.data.message);
                setLoading(false);
                if (
                    response.data.message.includes(
                        "Product image uploaded successfully",
                    )
                ) {
                    setUploadImageStatus(true);
                }
            })
            .catch((error) => {
                console.log("uploadImage error", error);
                let errorMessage;
                if (error.request) {
                    console.log("error.request", error.request);
                    errorMessage = error.request._response;
                }
            });
        return;
    }

    useEffect(() => {
        const isFormDataStateEmpty = Object.keys(formDataState).length > 0;
        console.log("isFormDataStateEmpty", isFormDataStateEmpty);
        if (isFormDataStateEmpty && !uploadImageStatus) {
            uploadImage();
        }
    }, [formDataState]);

    return (
        <ScrollView>
            <Spinner visible={loading} color={colors.cloudOrange5} />
            <View style={styles.container}>
                <View style={styles.progressIndicatorView}>
                    <ProgressIndicator
                        style={styles.progressIndicator}
                        selected={1}
                        title="Step 1: Product Details"
                        total={2}
                    />
                </View>
                <View style={styles.uploadProductImage}>
                    {!productImage ? (
                        <View style={styles.FabView}>
                            <View style={styles.fabContainer}>
                                <Fab onPress={pickImage} />
                            </View>
                            <Text>Upload Fresh food Picture</Text>
                        </View>
                    ) : (
                        <Image
                            onPress={pickImage}
                            style={styles.productImage}
                            source={{ uri: productImage }}
                        />
                    )}
                </View>
                <FreshFoodProductForm navigation={navigation} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 15,
        paddingTop: 0,
    },
    progressIndicatorView: {
        marginLeft: 15,
    },
    productImage: {
        height: 150,
        width: 200,
        marginBottom: 20,
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
    uploadProductImage: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    fabContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 70,
        marginTop: 30,
    },
    FabView: {
        height: 160,
        width: 160,
        backgroundColor: colors.neutral3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
    },
    inputLabel: {
        padding: 0,
        marginTop: -5,
    },
    inputContainer: {
        padding: 0,
        height: 35,
        marginBottom: 0,
    },
    input: {
        padding: 0,
    },
});

type productType = {
    label: string;
    name: string;
    type: string;
};
