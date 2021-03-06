import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import addNewProductSchema from "@components/forms/AddNewProductSchema";
import { DisplayFormElements } from "@components/forms/DisplayFormElements";
import { Button } from "react-native-elements";
import addproductContent from "@json/add-product.json";
import colors from "@utils/colors";
import { AddProductStep1Action } from "@store/actions/addProductAction";
import { getProductsCategories } from "@network/postRequest";
import { RootState } from "@store/RootReducer";
import { checkObjectKey } from "@utils/checkExistingStore";
import showToast from "@utils/showToast";

export default function AddNewProductForm({ navigation }: any) {
    const [productCategories, setProductCategories] = useState<any>([]);

    const dispatch = useDispatch();
    const { storeProfile }: any = useSelector(
        (state: RootState) => state.storeProfile,
    );

    useEffect(() => {
        if (productCategories.length === 0) {
            getProductsCategories(storeProfile.id)
                .then((response) => {
                    const { data } = response.data;
                    setProductCategories(data);
                })
                .catch((error) => {
                    if (error.response) {
                        showToast(error.response.data.message);
                    } else if (error.request) {
                        showToast(
                            "Oops, poor network, unable to fetch product categories",
                        );
                    }
                    console.log("productCategories error", error);
                });
        }
    }, []);

    useEffect(() => {
        if (productCategories.length !== 0) {
            addproductContent[1].options = productCategories;
        }
    }, [productCategories]);

    function navigationHandler(handleSubmit: any, isFormFilled: number) {
        handleSubmit();
        if (isFormFilled === 6) {
            navigation.navigate("AddProductOtherDetailsScreen");
        }
    }
    function goBack() {
        navigation.goBack();
    }
    return (
        <Formik
            initialValues={{
                name: "",
                categoryId: "",
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
                        {addproductContent.map((formElement, index) => (
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
