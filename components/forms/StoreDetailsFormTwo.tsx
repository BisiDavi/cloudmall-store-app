import React, { useState } from "react";
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { StyleSheet, Dimensions, View } from "react-native";
import { useStoreSetupNavigation } from "@hooks/.";
import storeDetailsFormTwo from "@json/storeDetailsFormTwo.json";
import { storeDetailsScreenTwoSchema } from "@components/forms";
import DisplayFormElements from "@components/forms/DisplayFormElements";
import { StoreOwnerAction } from "@store/StoreDetailsAction";
import { screenNavigate, colors } from "@utils/.";
import { RootState } from "@store/RootReducer";

export default function StoreDetailsFormTwo({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.storeDetails);
  console.log("state", state);

  return (
    <View>
      <Spinner visible={loading} color="blue" />
      <Formik
        validationSchema={storeDetailsScreenTwoSchema}
        initialValues={{
          storeOwnerName: "",
          openingDays: "",
          storeOpenTime: "",
        }}
        onSubmit={(values) => {
          console.log("values", values);
          setLoading(true);
          dispatch(StoreOwnerAction(values));
          setLoading(false);
          onBoardingNextScreen(2, false);
          screenNavigate(2, navigation);
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
          <View style={styles.form}>
            {storeDetailsFormTwo.map((formElement, index: number) => (
              <DisplayFormElements
                key={index}
                formElement={formElement}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
              />
            ))}
            <View style={styles.buttonView}>
              <Button
                buttonStyle={styles.buttonStyle}
                onPress={handleSubmit}
                disabled={!isValid}
                title="Next"
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 10,
  },
  buttonStyle: {
    width: Dimensions.get("window").width * 0.7,
    alignItems: "center",
    backgroundColor: colors.mallBlue5,
  },
  buttonView: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    justifyContent: "flex-start",
    marginBottom: 0,
    marginTop: 0,
    width: "100%",
    alignItems: "flex-start",
  },
});
