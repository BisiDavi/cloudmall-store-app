import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { Formik } from "formik";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import colors from "@utils/colors";
import productExtras from "@json/add-product-extras.json";
import PromoTagForm from "./PromoTagForm";
import InputGroup from "@components/InputGroup";

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
    const [showPromoTag, setShowPromoTag] = useState(false);
    const [isProductAvailable, setIsProductAvailable] = useState({
        isAvailable: false,
        duration: {
            from: null,
            to: null,
        },
    });
    const { main, secondary, productAvailabilty } = productExtras;

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
                    Is product always available?
                </Text>
                <View
                    style={{
                        ...styles.buttonGroup,
                        ...styles.productAvailabiltyButtonGroup,
                    }}
                >
                    <Button
                        onPress={() => isAvailableHandler(false)}
                        type="outline"
                        buttonStyle={styles.backButton}
                        titleStyle={styles.backButtonTitle}
                        title="Yes"
                    />
                    <Button
                        onPress={() => isAvailableHandler(true)}
                        buttonStyle={styles.nextButton}
                        title="No"
                    />
                </View>
                {isProductAvailable.isAvailable && (
                    <View>
                        <InputGroup
                            inputGroup={productAvailabilty}
                            //onChangeText={props?.handleChange(formElement.name)}
                        />
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
                    // disabled={!isValid}
                    title="Submit"
                    type="solid"
                    // onPress={handleSubmit}
                    buttonStyle={styles.nextButton}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 0,
        margin: 0,
        width: "100%",
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
    productAvailabiltyButtonGroup: {
        marginTop: 5,
    },
});

export default AddProductOtherDetailsForm;
