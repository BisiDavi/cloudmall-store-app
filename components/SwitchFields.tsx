import React, { useState } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-elements";

interface SwitchViewProps {
  label: string;
}

function SwitchView({ label }: SwitchViewProps) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Text>{label}</Text>
      <Switch value={open} onValueChange={() => setOpen(!open)} />
      <Text>{open ? "Open" : "Close"}</Text>
    </View>
  );
}

interface SwitchFieldsProps {
  content: {
    name: string;
    label: string;
    fields: [{ name: string; label: string }];
  };
}

export default function SwitchFields({ content }: SwitchFieldsProps) {
  return (
    <View>
      <Text>{content.label}</Text>
      {content.fields.map((item, index) => (
        <View key={index}>
          <SwitchView label={item.label} key={index} />
        </View>
      ))}
    </View>
  );
}
