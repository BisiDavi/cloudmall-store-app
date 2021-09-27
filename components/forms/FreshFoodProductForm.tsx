import React from "react";
import { Formik } from "formik";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import addNewProductSchema from "@components/forms/AddNewProductSchema";
import { DisplayFormElements } from "@components/forms/DisplayFormElements";
import { Button } from "react-native-elements";
import addFreshProductContent from "@json/add-fresh-food.json";
import colors from "@utils/colors";
import { AddProductStep1Action } from "@store/actions/addProductAction";
import { checkObjectKey } from "@utils/checkExistingStore";

export default function FreshFoodProductForm({ navigation }: any) {
    const dispatch = useDispatch();

    function navigationHandler(handleSubmit: any, isFormFilled: number) {
        handleSubmit();
        if (isFormFilled === 6) {
            navigation.navigate("AddFreshFoodOtherDetailsScreen");
        }
    }
    function goBack() {
        navigation.goBack();
    }
    return (
        <Formik
            initialValues={{
                name: "",
                categoryId: "5e677e28ef014a1626d2b5ed",
                description: "",
                price: 0,
                takeAwayPrice: 0,
                quantity: 100,
            }}
            validationSchema={addNewProductSchema}
            onSubmit={(values: any) => {
                dispatch(AddProductStep1Action(values));
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
            }) => {
                const isFormFilled = checkObjectKey("errors");
                return (
                    <View style={styles.formView}>
                        {addFreshProductContent.map((formElement, index) => (
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
                        <View style={styles.buttonGroup}>
                            <Button
                                title="Back"
                                type="solid"
                                titleStyle={styles.backButtonTitle}
                                onPress={goBack}
                                buttonStyle={styles.backButton}
                            />
                            <Button
                                disabled={!isValid}
                                title="Next"
                                type="solid"
                                onPress={() =>
                                    navigationHandler(
                                        handleSubmit,
                                        isFormFilled,
                                    )
                                }
                                buttonStyle={styles.nextButton}
                            />
                        </View>
                    </View>
                );
            }}
        </Formik>
    );
}

const styles = StyleSheet.create({
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "92%",
        margin: 10,
        marginTop: 10,
    },
    formView: {
        justifyContent: "center",
        alignItems: "center",
    },
    uploadProductImage: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    fabContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 70,
        marginTop: 30,
    },
    productImage: {
        height: 150,
        width: 200,
        marginBottom: 20,
    },
    FabView: {
        height: 160,
        width: 160,
        backgroundColor: colors.neutral3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
    },
});
