import React from "react";
import colors from "../utils/colors";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import { Image } from "react-native-elements";
import displayAsset from "../utils/displayAsset";

export default function RadioField({ content, onPress }: RadioFieldProps) {
  return (
    <View style={styles.storeType}>
      <View style={styles.typeView}>
        <Text style={styles.storeTypeText}>{content.label}</Text>
        <Image
          source={displayAsset(content?.iconName)}
          style={styles.iconImage}
        />
      </View>
      <View style={styles.radioFields}>
        {content.fields?.map((item: itemType, index: number) => (
          <View key={index} style={styles.radioField}>
            <Text style={styles.label}>{item.label}</Text>
            <RadioButton
              value={item.label}
              onPress={onPress}
              uncheckedColor={colors.mallBlue4}
              status="checked"
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  storeType: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  typeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.85,
    marginBottom: 10,
  },
  radioField: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.mallBlue5,
    borderWidth: 1,
    borderRadius: 5,
    width: 130,
    height: 50,
    justifyContent: "space-around",
  },
  radioFields: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
    width: Dimensions.get("window").width * 0.85,
  },
  label: {
    fontWeight: "500",
  },
  storeTypeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  iconImage: {
    height: 20,
    width: 10,
  },
});

interface RadioFieldProps {
  content: {
    name: string;
    label: string;
    icon: boolean;
    type: string;
    fields: itemType[] | undefined;
    iconName?: string | undefined;
  };
  onPress: any;
}

type itemType = {
  label?: any;
  status?: "checked" | "unchecked";
};
