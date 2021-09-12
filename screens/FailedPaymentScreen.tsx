import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function FailedPaymentScreen() {
  return (
    <View>
      <Text>Failed Payment</Text>
      <Text>Total amount contradiction. Please verify again</Text>
      <Button type="clear" title="Back" />
    </View>
  );
}
