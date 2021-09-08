import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function PaymentApprovedScreen() {
  return (
    <View>
      <Text>Payment Approved</Text>
      <Text>N7,000 has been transferred to your account</Text>
      <Button type="clear" title="Back to Home" />
    </View>
  );
}
