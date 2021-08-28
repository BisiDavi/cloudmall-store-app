import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { Button, Image } from "react-native-elements";
import InputField from "@components/InputField";

import { RootStackParamList } from "@customTypes/.";
import RadioField from "@components/RadioField";
import infoIcon from "@assets/infoIcon.png";
import { useStoreSetupNavigation } from "@hooks/.";
import axiosInstance from "../network/axiosInstance";
import { storeDetailsScreenTwoSchema } from "@components/forms/StoreDetailsSchema";
import { showToast } from "../utils/.";

const radioField = [{ label: "Instore" }, { label: "Pickup" }];

export default function StoreDetailsScreenTwo({
  navigation,
}: StackScreenProps<RootStackParamList, "StoreDetailsScreenTwo">) {
  const [storeDetails, setStoreDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.typeView}>
            <Text style={styles.storeTypeText}>Type of Store</Text>
            <Image source={infoIcon} style={styles.iconImage} />
          </View>
          <Formik
            validationSchema={storeDetailsScreenTwoSchema}
            initialValues={{
              storeType: "",
              openingDays: "",
            }}
            onSubmit={async (values) => {
              setLoading(true);
              await axiosInstance
                .post("/store", values)
                .then((response) => {
                  const data: any = response.data;
                  setLoading(false);
                  if (response.status === 200) {
                    showToast(`${data.name} stores created`);
                    onBoardingNextScreen(3, false);
                    navigation.navigate("StoreAddressScreen");
                  } else {
                    showToast(data);
                  }
                })
                .catch((error) => {
                  setLoading(false);
                  showToast(error.response.data);
                });
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <RadioField content={radioField} />
                <InputField
                  styles={{ input: styles.inputField }}
                  label="Open days"
                  onChangeText={handleChange("openDays")}
                  value={values.openingDays}
                />
                <InputField
                  label="Phone number"
                  textContentType="telephoneNumber"
                />
                <InputField
                  label="Address"
                  styles={{ input: styles.addressField }}
                  textContentType="fullStreetAddress"
                />
                <View style={styles.buttonView}>
                  <Button
                    title="Next"
                    buttonStyle={styles.button}
                    onPress={() =>
                      navigation.navigate("StoreDetailsScreenThree")
                    }
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
  },
  inputField: {
    marginTop: 1,
    padding: 0,
  },  
  typeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 10,
  },
  storeTypeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  iconImage: {
    height: 20,
    width: 10,
  },
  input: {
    width: 100,
    margin: 0,
    padding: 0,
  },
  addressField: {
    height: 70,
  },
  button: {
    width: 250,
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
