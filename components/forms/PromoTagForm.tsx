import React from "react";
import { Formik } from "formik";
import addNewProductSchema from "@components/forms/AddNewProductSchema";
import { View, StyleSheet, Dimensions } from "react-native";
import { DisplayFormElements } from "@components/forms/DisplayFormElements";
import promoTagContent from "@json/add-promo-tag.json";

export default function PromoTagForm() {
    return (
        <Formik
            validationSchema={addNewProductSchema}
            initialValues={{
                availabiltyDuration: "",
                promoName: "",
                discountPercent: "",
                promoDuration: "",
            }}
            onSubmit={(values: any) => {
                console.log("values", values);
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
                <View style={styles.promoTag}>
                    {promoTagContent.map((formElement, index) => (
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
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    promoTag: {
        width: Dimensions.get("window").width,
        padding: 0,
        margin: 0,
        marginTop: 30,
    },
});
