import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Platform,
    ToastAndroid,
    Dimensions,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import Spinner from "react-native-loading-spinner-overlay";

import useStoreSetupNavigation from "@hooks/useStoreSetupNavigation";
import UploadIcon from "@assets/upload.png";
import colors from "@utils/colors";
import { RootState } from "@store/RootReducer";
import ProgressIndicator from "@components/ProgressIndicator";
import { StoreLogoUploadAction } from "@store/actions/StoreDetailsAction";
import {
    uploadStoreLogoRequest,
    postStoreDetailsRequest,
} from "@network/postRequest";

export default function UploadStoreLogoScreen() {
    const [formDataState, setFormDataState] = useState({});
    const [storeLogo, setStoreLogo] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const { onBoardingNextScreen } = useStoreSetupNavigation();
    const dispatch = useDispatch();
    const { storeDetails } = useSelector(
        (state: RootState) => state.storeDetails,
    );

    console.log("storeLogo", storeLogo);

    useEffect(() => {
        const displayAfter2Secs = setTimeout(() => {
            (async () => {
                if (Platform.OS !== "web") {
                    const { status } =
                        await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if (status !== "granted") {
                        ToastAndroid.show(
                            "Sorry we need your permission to upload stores image.",
                            ToastAndroid.LONG,
                        );
                    }
                }
            })();
        }, 2000);

        return () => clearTimeout(displayAfter2Secs);
    }, []);

    async function postStore() {
        setLoading(true);
        await postStoreDetailsRequest(storeDetails)
            .then(() => {
                setLoading(false);
                onBoardingNextScreen(5, false);
            })
            .catch(() => {
                setLoading(false);
            });
    }

    async function uploadImage() {
        storeLogo && dispatch(StoreLogoUploadAction(formDataState));
        setLoading(true);
        await uploadStoreLogoRequest(formDataState)
            .then((response) => {
                console.log("response", response);
            })
            .catch((error) => console.log("error", error));
        storeLogo && postStore();
    }

    function skipImage() {
        postStore();
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
            let filename: string | any = result.uri.split("/").pop();
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;
            const source = {
                fileName: filename,
                uri: result.uri,
                type: type,
                height: result.height,
                width: result.width,
            };
            let formData = new FormData();
            formData.append("storeLogo", source);
            console.log("formData", formData);
            console.log("result", result);
            setFormDataState(formData);
            setStoreLogo(result.uri);
        }
        setLoading(false);
    };
    return (
        <SafeAreaView style={styles.view}>
            <Spinner visible={loading} color={colors.cloudOrange5} />
            <ScrollView style={styles.view}>
                <View style={styles.container}>
                    <ProgressIndicator
                        title="Upload Store's Logo"
                        selected={4}
                    />
                    <View style={styles.content}>
                        <Text style={styles.description}>
                            This Logo will represent your store on the user's
                            app
                        </Text>
                        {!storeLogo ? (
                            <>
                                <View style={styles.imageView}>
                                    <Image
                                        onPress={pickImage}
                                        style={styles.uploadIcon}
                                        source={UploadIcon}
                                    />
                                </View>
                                <Text style={styles.error}>
                                    please upload your logo, click on the icon
                                    above
                                </Text>
                            </>
                        ) : (
                            <Image
                                style={styles.logo}
                                source={{ uri: storeLogo }}
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
    logo: {
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
