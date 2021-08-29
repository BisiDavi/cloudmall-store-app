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
import * as ImagePicker from "expo-image-picker";
import { RootStackParamList } from "@customTypes/.";
import UploadIcon from "@assets/upload.png";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "@utils/colors";
import ProgressIndicator from "@components/ProgressIndicator";

export default function UploadStoreImage({
  navigation,
}: StackScreenProps<RootStackParamList, "UploadStoreImage">) {
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

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
      <ScrollView>
        <Spinner visible={loading} color="blue" />
        <View style={styles.container}>
          <ProgressIndicator selected={4} />
          <View style={styles.content}>
            <Text style={styles.description}>
              This image will appear as your store front on the user's app
            </Text>
            {!image ? (
              <View style={styles.imageView}>
                <Image
                  onPress={pickImage}
                  style={styles.uploadIcon}
                  source={UploadIcon}
                />
              </View>
            ) : (
              <Image style={styles.image} source={{ uri: image }} />
            )}
            <View>
              <Button
                onPress={pickImage}
                buttonStyle={styles.nextButton}
                title="Upload"
              />
              <Button
                buttonStyle={styles.skipButton}
                titleStyle={styles.skipText}
                onPress={() => navigation.navigate("BottomNav")}
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
});
