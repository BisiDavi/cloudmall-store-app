import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Platform, ToastAndroid } from "react-native";
import { Image, Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { RootStackParamList } from "@customTypes/.";
import UploadIcon from "@assets/upload.png";
import Spinner from "react-native-loading-spinner-overlay";
import axiosInstance from "../network/axiosInstance";
import colors from "../utils/colors";

export default function StoreDetailsScreenThree({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenTwo">) {
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
      // axiosInstance.post("/store/", { storeImage: image?.uri });
    }
    setLoading(false);
  };
  return (
    <>
      <Spinner visible={loading} color="blue" />
      <View style={styles.container}>
        <Text style={styles.title}>Upload Store's Image</Text>
        <View style={styles.content}>
          <Text style={styles.description}>
            This image will appear as your store front on the user's app
          </Text>
          {!image ? (
            <View style={styles.imageView}>
              <Image source={UploadIcon}  />
            </View>
          ) : (
            <Image style={styles.image} source={{ uri: image }} />
          )}
          <View>
            <Button
              onPress={pickImage}
              buttonStyle={styles.button}
              title="Upload Photo"
            />
            <Button
              buttonStyle={styles.button}
              onPress={() => navigation.navigate("BottomNav")}
              title="Skip"
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 20,
    paddingTop: 0,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
  },
  imageView: {
    height: 282,
    width: 282,
    margin: 20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderColor: colors.mallBlue5,
  },
  image: {
    height: 250,
    width: 300,
    margin: 20,
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
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
