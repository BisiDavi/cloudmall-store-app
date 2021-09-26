import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import colors from "@utils/colors";
import productExtras from "@json/add-product-extras.json";
import PromoTagForm from "./PromoTagForm";
import InputGroup from "@components/InputGroup";
import { RootState } from "@store/RootReducer";
import { addProductsRequest } from "@network/postRequest";
import showToast from "@utils/showToast";
import Spinner from "react-native-loading-spinner-overlay";

interface DisplayCheckboxProps {
    title: string;
}

function DisplayCheckbox({ title }: DisplayCheckboxProps) {
    const [addExtra, setAddExtra] = useState(false);
    function toggleCheckBox() {
        return setAddExtra(!addExtra);
    }
    return (
        <CheckBox checked={addExtra} title={title} onPress={toggleCheckBox} />
    );
}

const AddProductOtherDetailsForm = ({ navigation }: any) => {
    const [loading, setLoading] = useState(false);
    const [productFields, setProductFields] = useState<any>({});
    const addedProduct: any = useSelector(
        (state: RootState) => state.addProduct,
    );
    const { storeProfile }: any = useSelector(
        (state: RootState) => state.storeProfile,
    );
    const [showPromoTag, setShowPromoTag] = useState(false);
    const [isProductAvailable, setIsProductAvailable] = useState<any>({
        isAvailable: null,
        duration: {
            from: null,
            to: null,
        },
    });
    const { main, secondary, productAvailabilty } = productExtras;

    console.log("productFields", productFields);

    function submitProduct() {
        setLoading(true);
        setProductFields({
            ...productFields,
            ...addedProduct,
            duration: 0,
            isAvailable: isProductAvailable.isAvailable,
            kg: 0,
            storeId: storeProfile.id,
        });
        addProductsRequest(productFields)
            .then((response) => {
                setLoading(false);
                console.log("response", response.data);
                showToast(response.data.message);
                navigation.navigate("ProductScreen");
            })
            .catch((error) => {
                setLoading(false);
                console.log("response addProductsRequest", error);
                if (error.request) {
                    console.log("error.request", error.request);
                    showToast(
                        "Oops network is bad, unable to submit, please try again",
                    );
                } else if (error.response) {
                    console.log("error.response", error.response);
                    showToast(error.response.data.message);
                }
            });
    }

    function isAvailableHandler(status: boolean) {
        return setIsProductAvailable({
            ...isProductAvailable,
            isAvailable: status,
        });
    }

    function goBack() {
        navigation.goBack();
    }

    function promoTagFormHandler() {
        setShowPromoTag(!showPromoTag);
    }
    return (
        <>
            <Spinner visible={loading} color={colors.cloudOrange5} />
            <View style={styles.form}>
                <View>
                    <Text style={styles.extra}>Main Extras</Text>
                    <View style={styles.checkboxView}>
                        {main.map((extra) => (
                            <DisplayCheckbox title={extra} key={extra} />
                        ))}
                    </View>
                </View>
                <View>
                    <Text style={styles.extra}>Secondary Extras</Text>

                    <View style={styles.checkboxView}>
                        {secondary.map((extra) => (
                            <DisplayCheckbox title={extra} key={extra} />
                        ))}
                    </View>
                </View>
                <View>
                    <Text style={styles.promoTagText}>
                        Is {addedProduct.name} always available?
                    </Text>
                    <View
                        style={{
                            ...styles.buttonGroup,
                            ...styles.productAvailabiltyButtonGroup,
                        }}
                    >
                        <View style={styles.buttonView}>
                            <View style={styles.productButtonGroup}>
                                <Button
                                    onPress={() => isAvailableHandler(true)}
                                    type="outline"
                                    buttonStyle={styles.backButton}
                                    titleStyle={styles.backButtonTitle}
                                    title="Yes"
                                />
                                <Button
                                    onPress={() => isAvailableHandler(false)}
                                    buttonStyle={styles.nextButton}
                                    title="No"
                                />
                            </View>
                            {isProductAvailable.isAvailable === null && (
                                <Text style={styles.error}>
                                    Product Availablity is required
                                </Text>
                            )}
                        </View>
                    </View>
                    {!isProductAvailable.isAvailable && (
                        <View>
                            <InputGroup inputGroup={productAvailabilty} />
                        </View>
                    )}
                </View>
                <View>
                    <TouchableOpacity onPress={promoTagFormHandler}>
                        <Text style={styles.promoTagText}>Add Promo Tag</Text>
                    </TouchableOpacity>
                </View>
                {showPromoTag && <PromoTagForm />}
                <View style={styles.buttonGroup}>
                    <Button
                        title="Back"
                        type="solid"
                        titleStyle={styles.backButtonTitle}
                        onPress={() => goBack()}
                        buttonStyle={styles.backButton}
                    />
                    <Button
                        title="Submit"
                        type="solid"
                        onPress={submitProduct}
                        buttonStyle={styles.nextButton}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 0,
        margin: 0,
        width: "100%",
    },
    buttonView: {
        flexDirection: "column",
    },
    checkboxView: {},
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
    promoTagText: {
        color: colors.mallBlue5,
        fontFamily: "RobotoBold",
        margin: 10,
    },
    extra: {
        color: colors.black,
        fontFamily: "RobotoBold",
        fontSize: 14,
        letterSpacing: 0.0025,
        margin: 10,
    },
    buttonGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "92%",
        margin: 10,
        marginTop: 30,
    },
    productButtonGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "86%",
        margin: 10,
        marginTop: 30,
    },
    error: {
        color: colors.accentRed,
        fontSize: 13,
        marginLeft: 10,
    },
    productAvailabiltyButtonGroup: {
        marginTop: 5,
    },
});

export default AddProductOtherDetailsForm;
