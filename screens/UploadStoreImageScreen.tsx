import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    ToastAndroid,
} from "react-native";
import { Image, Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import Spinner from "react-native-loading-spinner-overlay";

import useStoreSetupNavigation from "@hooks/useStoreSetupNavigation";
import UploadIcon from "@assets/upload.png";
import colors from "@utils/colors";
import ProgressIndicator from "@components/ProgressIndicator";
import { StoreImageUploadAction } from "@store/actions/StoreDetailsAction";
import { uploadStoreBackgroundRequest } from "@network/postRequest";
import formatUploadedImage from "@utils/formatUploadedImage";
import showToast from "@utils/showToast";

export default function UploadStoreImageScreen() {
    const [formDataState, setFormDataState] = useState({});
    const [image, setImage] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const { onBoardingNextScreen } = useStoreSetupNavigation();
    const dispatch = useDispatch();

    async function uploadImage() {
        setLoading(true);
        dispatch(StoreImageUploadAction(formDataState));
        await uploadStoreBackgroundRequest(formDataState)
            .then((response) => {
                setLoading(false);
                console.log("response", response);
                showToast(response.data.message);
                onBoardingNextScreen(6, true);
            })
            .catch((error) => {
                setLoading(false);
                if (error.request) {
                    console.log("error.request", error.request);
                }
                console.log("error", error);
            });
    }

    async function skipImage() {
        onBoardingNextScreen(6, true);
    }

    const pickImage = async () => {
        setLoading(true);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
        });
        if (result.cancelled) {
            ToastAndroid.show(
                "To upload your stores logo, we need your permission to view your gallery",
                ToastAndroid.LONG,
            );
        }
        if (!result.cancelled) {
            let formData = formatUploadedImage("background", result);
            setFormDataState(formData);
            setImage(result.uri);
        }
        setLoading(false);
    };
    return (
        <SafeAreaView style={styles.view}>
            <Spinner visible={loading} color="blue" />
            <ScrollView>
                <View style={styles.container}>
                    <ProgressIndicator
                        title="Upload Store's Image"
                        selected={4}
                    />
                    <View style={styles.content}>
                        <Text style={styles.description}>
                            This image will appear as your store front on the
                            user's app
                        </Text>
                        {!image ? (
                            <>
                                <View style={styles.imageView}>
                                    <Image
                                        onPress={pickImage}
                                        style={styles.uploadIcon}
                                        source={UploadIcon}
                                    />
                                </View>
                                <Text style={styles.error}>
                                    please upload an image, click on the icon
                                    above
                                </Text>
                            </>
                        ) : (
                            <Image
                                style={styles.image}
                                onPress={pickImage}
                                source={{ uri: image }}
                            />
                        )}
                        <View>
                            <Button
                                onPress={uploadImage}
                                buttonStyle={styles.nextButton}
                                title="Upload"
                            />
                            <Button
                                buttonStyle={styles.skipButton}
                                titleStyle={styles.skipText}
                                onPress={skipImage}
                                title="Skip"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 20,
    },
    nextButton: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.mallBlue5,
        width: 270,
    },
    imageView: {
        height: Dimensions.get("window").height * 0.35,
        width: Dimensions.get("window").width * 0.75,
        margin: 20,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        alignItems: "center",
        borderColor: colors.mallBlue5,
        borderWidth: 1,
        borderRadius: 5,
    },
    skipButton: {
        borderColor: colors.mallBlue5,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        width: 270,
    },
    skipText: {
        color: colors.mallBlue5,
    },
    image: {
        height: 250,
        width: 300,
        margin: 20,
    },
    uploadIcon: {
        height: 25,
        width: 25,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "left",
        marginTop: 0,
    },
    description: {
        fontSize: 14,
        textAlign: "left",
        fontFamily: "RobotoRegular",
    },
    content: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 10,
    },
    error: {
        color: colors.accentRed,
        fontSize: 12,
        marginBottom: 10,
    },
});
