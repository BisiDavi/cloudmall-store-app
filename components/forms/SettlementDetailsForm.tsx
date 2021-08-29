import React, { useState } from "react";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { Dimensions, StyleSheet, View } from "react-native";
import { useStoreSetupNavigation } from "@hooks/.";
import { colors } from "@utils/.";
import settlementDetails from "@json/settlement-details.json";
import DisplayFormElements from "@components/forms/DisplayFormElements";
import { storeSettlementDetailsSchema } from "./StoreDetailsSchema";

export default function SettlementDetailsForm({ navigation }: any) {
  const [loading, setLoading] = useState(false);
  const [storeId, setStoreId] = useState(null);
  const { onBoardingNextScreen } = useStoreSetupNavigation(navigation);
  return (
    <View style={styles.form}>
      <Spinner visible={loading} color="blue" />
      <Formik
        validationSchema={storeSettlementDetailsSchema}
        initialValues={{
          settlementPlan: "",
          bankName: "",
          accountNumber: "",
          accountName: "",
        }}
        onSubmit={(values) => {
          console.log("values", values);
          setLoading(true);
          onBoardingNextScreen(4, false);
          setLoading(false);
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
          <View>
            {settlementDetails.map((formElement, index: number) => (
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
                buttonStyle={styles.skipButtonStyle}
                onPress={handleSubmit}
                titleStyle={styles.skipTextStyle}
                title="Skip"
              />
              <Button
                buttonStyle={styles.nextButtonStyle}
                onPress={handleSubmit}
                titleStyle={styles.nextTextStyle}
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
    padding: 20,
    paddingTop: 0,
  },
  nextButtonStyle: {
    width: Dimensions.get("window").width * 0.3,
    alignItems: "center",
    color: colors.neutralWhite,
    backgroundColor: colors.mallBlue5,
    fontFamily: "RobotoBold",
  },
  skipButtonStyle: {
    width: Dimensions.get("window").width * 0.3,
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: colors.mallBlue5,
    borderWidth: 1,
    fontFamily: "RobotoBold",
  },
  skipTextStyle: {
    color: colors.mallBlue5,
  },
  nextTextStyle: {
    color: colors.neutralWhite,
  },
  buttonView: {
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    paddingTop: 0,
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
