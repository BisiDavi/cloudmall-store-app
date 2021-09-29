import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import useStoreSetupNavigation from "@hooks/useStoreSetupNavigation";
import UploadIcon from "@assets/upload.png";
import colors from "@utils/colors";
import ProgressIndicator from "@components/ProgressIndicator";
import { StoreLogoUploadAction } from "@store/actions/StoreDetailsAction";
import { uploadStoreLogoRequest } from "@network/postRequest";
import showToast from "@utils/showToast";
import useUploadImage from "@hooks/useUploadImage";
import { RootState } from "@store/RootReducer";
import StoreProfileActions from "@store/actions/StoreProfileActions";
import getExistingStoreProfile from "@utils/getExistingStoreProfile";

export default function UploadStoreLogoScreen() {
    const [loading, setLoading] = useState(false);
    const {
        formDataState,
        image: storeLogo,
        pickImage,
        permissionToUploadImage,
    } = useUploadImage(setLoading, "logo");
    const { onBoardingNextScreen } = useStoreSetupNavigation();
    const { storeProfile } = useSelector(
        (state: RootState) => state.storeProfile,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const displayAfter2Secs = setTimeout(
            () => permissionToUploadImage,
            2000,
        );
        return () => clearTimeout(displayAfter2Secs);
    }, []);

    useEffect(() => {
        if (storeProfile === null) {
            getExistingStoreProfile()
                .then((response) => {
                    if (response !== null) {
                        console.log("getExistingStoreProfile", response);
                        dispatch(StoreProfileActions(response));
                    }
                })
                .catch((error) => {
                    console.log("getExistingStoreProfile error", error);
                });
        }
    }, []);

    async function uploadImage() {
        dispatch(StoreLogoUploadAction(formDataState));
        setLoading(true);
        await uploadStoreLogoRequest(formDataState)
            .then((response) => {
                console.log("response", response.data.message);
                setLoading(false);
                showToast(response.data.message);
                return onBoardingNextScreen(5, false);
            })
            .catch((error) => {
                console.log("uploadImage error", error);
                let errorMessage;
                if (error.request) {
                    console.log("error.request", error.request);
                    errorMessage = error.request._response;
                }
                showToast(errorMessage);
                setLoading(false);
            });
        return;
    }

    async function skipImage() {
        return onBoardingNextScreen(6, true);
    }

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
                                onPress={pickImage}
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
        backgroundColor: colors.neutralWhite,
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
