import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { Formik } from "formik";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { Button } from "react-native-elements";
import colors from "@utils/colors";
import PromoTagForm from "./PromoTagForm";

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
    const extras = {
        main: ["main Extra 1", "main Extra 2", "main Extra 3"],
        secondary: [
            "secondary Extra 1",
            "secondary Extra 2",
            "secondary Extra 3",
        ],
    };
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
                    {extras.main.map((extra) => (
                        <DisplayCheckbox title={extra} key={extra} />
                    ))}
                </View>
            </View>
            <View>
                <Text style={styles.extra}>Secondary Extras</Text>
                <View style={styles.checkboxView}>
                    {extras.secondary.map((extra) => (
                        <DisplayCheckbox title={extra} key={extra} />
                    ))}
                </View>
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
});

export default AddProductOtherDetailsForm;
