import React, { useState, useEffect } from "react";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { Dimensions, StyleSheet, View } from "react-native";
import { storeDetailsScreenOneSchema } from "@components/forms";
import { colors } from "@utils/.";
import storeDetailsFormOne from "@json/storeDetailsFormOne.json";
import { StoreDetailsAction } from "@store/actions/StoreDetailsAction";
import { DisplayFormElements } from "@components/forms/DisplayFormElements";
import useStoreSetupNavigation from "@hooks/useStoreSetupNavigation";
import { getStoreCategoriesRequest } from "@network/getRequest";
import StoreTypeInfoModal from "@components/StoreTypeInfoModal";

export default function StoreDetailsFormOne() {
    const dispatch = useDispatch();
    const { onBoardingNextScreen } = useStoreSetupNavigation();
    const [loading, setLoading] = useState(false);
    const [infoModal, setInfoModal] = useState(false);
    const [storeCategory, setStoreCategory] = useState([]);

    storeDetailsFormOne[4].options = storeCategory;

    function toggleModal() {
        return setInfoModal(!infoModal);
    }

    useEffect(() => {
        getStoreCategoriesRequest()
            .then((response) => {
                setStoreCategory(response.data.data);
            })
            .catch((error) => console.log("error", error?.response.data));
    }, []);

    return (
        <>
            <Spinner visible={loading} color="blue" />
            <StoreTypeInfoModal modal={infoModal} toggleModal={toggleModal} />
            <View style={styles.form}>
                <Formik
                    validationSchema={storeDetailsScreenOneSchema}
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                        category: "",
                    }}
                    onSubmit={(values) => {
                        setLoading(true);
                        dispatch(StoreDetailsAction(values));
                        setLoading(false);
                        onBoardingNextScreen(1, false);
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
                            {storeDetailsFormOne.map((formElement, index) => (
                                <DisplayFormElements
                                    key={index}
                                    formElement={formElement}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                    toggleModal={toggleModal}
                                />
                            ))}
                            {console.log("formik values", values)}
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
        </>
    );
}

const styles = StyleSheet.create({
    form: {
        marginTop: 10,
        padding: 20,
        paddingTop: 0,
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
