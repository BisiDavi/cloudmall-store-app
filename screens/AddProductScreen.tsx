import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Image } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { DrawerStackParamList } from "@customTypes/.";
import ProgressIndicator from "@components/ProgressIndicator";
import Spinner from "react-native-loading-spinner-overlay";
import { ScrollView } from "react-native-gesture-handler";
import AddNewProductForm from "@components/forms/AddNewProductForm";
import Fab from "@components/Fab";
import colors from "@utils/colors";
import formatUploadedImage from "@utils/formatUploadedImage";

type AddProductScreenNavigationProps = StackNavigationProp<
    DrawerStackParamList,
    "AddProductScreen"
>;

type AddProductScreenRouteProps = RouteProp<
    DrawerStackParamList,
    "AddProductScreen"
>;

type Props = {
    route: AddProductScreenRouteProps;
    navigation: AddProductScreenNavigationProps;
};

export default function AddProductScreen({ navigation }: Props) {
    const [productImage, setProductImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [formDataState, setFormDataState] = useState({});

    const pickImage = async () => {
        setLoading(true);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
        });
        if (!result.cancelled) {
            console.log("result", result);
            let formData = formatUploadedImage("image", result);
            setFormDataState(formData);
            setProductImage(result.uri);
        }
        setLoading(false);
    };
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
                            <Text>Upload Product Picture</Text>
                        </View>
                    ) : (
                        <Image
                            onPress={pickImage}
                            style={styles.productImage}
                            source={{ uri: productImage }}
                        />
                    )}
                </View>
                <AddNewProductForm navigation={navigation} />
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
