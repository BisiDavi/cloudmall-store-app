import colors from "@utils/colors";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-elements";

interface SwitchViewProps {
  label: string;
}

interface SwitchFieldsProps {
  content: {
    name: string;
    label: string;
    fields: [{ name: string; label: string }];
  };
}

function SwitchView({ label }: SwitchViewProps) {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.switchView}>
      <Text style={styles.switchText}>{label}</Text>
      <Switch
        color={colors.mallBlue5}
        value={open}
        onValueChange={() => setOpen(!open)}
      />
      <Text style={styles.switchText}>{open ? "Open" : "Close"}</Text>
    </View>
  );
}

export default function SwitchFields({ content }: SwitchFieldsProps) {
  return (
    <View style={styles.SwitchFields}>
      <Text style={styles.label}>{content.label}</Text>
      {content.fields.map((item, index) => (
        <SwitchView label={item.label} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  switchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  SwitchFields: {
    marginTop: 0,
    margin: 10,
  },
  label: {
    fontFamily: "RobotoRegular",
    fontSize: 14,
    lineHeight: 20,
    marginBottom:10
  },
  switchText: {
    fontFamily: "RobotoRegular",
    fontSize: 17,
    lineHeight: 20,
  },
});
