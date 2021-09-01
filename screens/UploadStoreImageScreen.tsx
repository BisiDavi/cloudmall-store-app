import { StackScreenProps } from "@react-navigation/stack";
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
import { Image, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import Spinner from "react-native-loading-spinner-overlay";

import useStoreSetupNavigation from "@hooks/useStoreSetupNavigation";
import { RootStackParamList } from "@customTypes/.";
import UploadIcon from "@assets/upload.png";
import colors from "@utils/colors";
import { RootState } from "@store/RootReducer";
import ProgressIndicator from "@components/ProgressIndicator";
import { StoreImageUploadAction } from "@store/StoreDetailsAction";
import postStoreRequest from "@utils/postStoreRequest";

export default function UploadStoreImage({
  navigation,
}: StackScreenProps<RootStackParamList, "UploadStoreImage">) {
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.storeDetails);
  console.log("UploadStoreImage", state);

  useEffect(() => {
    const displayAfter2Secs = setTimeout(() => {
      (async () => {
        if (Platform.OS !== "web") {
          const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== "granted") {
            ToastAndroid.show(
              "Sorry we need your permission to upload stores image.",
              ToastAndroid.LONG
            );
          }
        }
      })();
    }, 2000);

    return () => clearTimeout(displayAfter2Secs);
  }, []);

  async function postToDB() {
    setLoading(true);
    await postStoreRequest(state, navigation)
      .then(() => {
        setLoading(false);
        onBoardingNextScreen(4, true);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  async function uploadImage() {
    image && dispatch(StoreImageUploadAction(image));
    image && postToDB();
  }

  async function skipImage() {
    postToDB();
  }

  const pickImage = async () => {
    setLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      console.log("result", result);
      setImage(result.uri);
    }
    setLoading(false);
  };
  return (
    <>
      <Spinner visible={loading} color="blue" />
      <ScrollView>
        <View style={styles.container}>
          <ProgressIndicator selected={4} />
          <View style={styles.content}>
            <Text style={styles.description}>
              This image will appear as your store front on the user's app
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
                  please upload an image, click on the icon above
                </Text>
              </>
            ) : (
              <Image style={styles.image} source={{ uri: image }} />
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
    </>
  );
}

const styles = StyleSheet.create({
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
