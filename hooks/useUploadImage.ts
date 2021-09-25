import { useState, Dispatch, SetStateAction } from "react";
import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

import showToast from "@utils/showToast";
import formatUploadedImage from "@utils/formatUploadedImage";

type useUploadImage = Dispatch<SetStateAction<boolean>>;

export default function useUploadImage(
    setLoading: useUploadImage,
    logoName: string,
) {
    const [formDataState, setFormDataState] = useState({});
    const [image, setImage] = useState<any>(null);

    async function permissionToUploadImage() {
        if (Platform.OS !== "web") {
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                showToast(
                    "Sorry we need your permission to upload stores image.",
                );
            }
        }
    }

    async function pickImage() {
        setLoading(true);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
        });
        if (result.cancelled) {
            showToast(
                "To upload your stores logo, we need your permission to view your gallery",
            );
        }
        if (!result.cancelled) {
            let formData = formatUploadedImage(logoName, result);
            setFormDataState(formData);
            setImage(result.uri);
        }
        setLoading(false);
    }

    return {
        pickImage,
        image,
        formDataState,
        permissionToUploadImage,
    };
}
