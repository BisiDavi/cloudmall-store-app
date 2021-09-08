import React from "react";
import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";

export default function ConfirmPayment() {
  return (
    <View>
      <Text>Input Total Amount</Text>
      <Input />
      <Button title="Scan to Accept Payment" />
    </View>
  );
}
