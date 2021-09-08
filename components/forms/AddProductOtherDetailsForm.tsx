import React from "react";
import { CheckBox } from "react-native-elements";
import { Formik } from "formik";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import colors from "@utils/colors";

const AddProductOtherDetailsForm = ({ navigation: { goBack } }: any) => {
  return (
    <View>
      <View>
        <Text>Main Extras</Text>
        <View style={styles.checkboxView}>
          <CheckBox />
          <CheckBox />
          <CheckBox />
        </View>
      </View>
      <View>
        <Text>Secondary Extras</Text>
        <View style={styles.checkboxView}>
          <CheckBox />
          <CheckBox />
          <CheckBox />
        </View>
      </View>
      <View>
        <Text style={styles.promoTagText}>Add Promo Tag</Text>
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
  promoTagText: {},
  buttonGroup: {
    //   display:"flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "92%",
    margin: 10,
    marginTop: 0,
  },
});

export default AddProductOtherDetailsForm;
