import React from "react";
import { Formik } from "formik";
import addExtraSchema from "@components/forms/addExtraSchema";
import { View, StyleSheet } from "react-native";
import { DisplayFormElements } from "@components/forms/DisplayFormElements";
import { Button } from "react-native-elements";
import formContent from "@json/add-extra.json";
import colors from "@utils/colors";
import { addExtrasRequest } from "@network/postRequest";
import { useSelector } from "react-redux";
import { RootState } from "@store/RootReducer";
import showToast from "@utils/showToast";

export default function AddExtraForm({ navigation: { goBack } }: any) {
    const { storeProfile }: any = useSelector(
        (state: RootState) => state.storeProfile,
    );
    function addExtras(data: any) {
        addExtrasRequest(data)
            .then((response) => {
                console.log("response", response.data);
                showToast(response.data.message);
            })
            .catch((error) => {
                if (error.request) {
                    console.log("error", error.request);
                } else {
                    console.log("error", error.response);
                }
            });
    }
    return (
        <Formik
            validationSchema={addExtraSchema}
            initialValues={{
                name: "",
                price: "",
                isAvailable: true,
                isCompulsory: false,
                quantity: 1,
            }}
            onSubmit={(values: any) => {
                const formValues = {
                    ...values,
                    storeId: storeProfile.id,
                    price: Number(values.price),
                };
                console.log("addExtras", addExtras);
                addExtras(formValues);
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
                <View style={styles.formContainer}>
                    <View style={styles.formInputs}>
                        {formContent.map((formElement, index) => (
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
                    </View>
                    <View style={styles.buttonGroup}>
                        <Button
                            title="Back"
                            type="solid"
                            titleStyle={styles.backButtonTitle}
                            onPress={() => goBack()}
                            buttonStyle={styles.backButton}
                        />
                        <Button
                            disabled={!isValid}
                            title="Submit"
                            type="solid"
                            onPress={handleSubmit}
                            buttonStyle={styles.nextButton}
                        />
                    </View>
                </View>
            )}
        </Formik>
    );
}
const styles = StyleSheet.create({
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    formInputs: {
        justifyContent: "center",
        alignItems: "center",
    },
    nextButton: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: 100,
        borderRadius: 10,
        backgroundColor: colors.mallBlue5,
    },
    backButton: {
        borderWidth: 1,
        borderColor: colors.mallBlue5,
        backgroundColor: "transparent",
        width: 100,
        borderRadius: 10,
    },
    backButtonTitle: {
        color: colors.mallBlue5,
    },
    buttonGroup: {
        //   display:"flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        margin: 10,
        marginTop: 10,
    },
});
