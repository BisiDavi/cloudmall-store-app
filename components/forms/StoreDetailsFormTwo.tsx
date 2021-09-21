import React, { useState } from "react";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { StyleSheet, Dimensions, View } from "react-native";
import { useStoreSetupNavigation } from "@hooks/.";
import storeDetailsFormTwo from "@json/storeDetailsFormTwo.json";
import { storeDetailsScreenTwoSchema } from "@components/forms";
import { DisplayFormElements } from "@components/forms/DisplayFormElements";
import { StoreOwnerAction } from "@store/actions/StoreDetailsAction";
import { colors } from "@utils/.";

export default function StoreDetailsFormTwo() {
    const [loading, setLoading] = useState(false);
    const { onBoardingNextScreen } = useStoreSetupNavigation();
    const dispatch = useDispatch();

    return (
        <View>
            <Spinner visible={loading} color={colors.cloudOrange5} />
            <Formik
                validationSchema={storeDetailsScreenTwoSchema}
                initialValues={{
                    ownerName: "",
                    ownerPhone: "",
                    ownerEmail: "",
                }}
                onSubmit={(values) => {
                    console.log("values", values);
                    setLoading(true);
                    dispatch(StoreOwnerAction(values));
                    setLoading(false);
                    onBoardingNextScreen(3, false);
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
                        {storeDetailsFormTwo.map(
                            (formElement, index: number) => (
                                <DisplayFormElements
                                    key={index}
                                    formElement={formElement}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                />
                            ),
                        )}
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
