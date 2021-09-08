import RequestRiderForm from "@components/forms/RequestRiderForm";
import InputField from "@components/InputField";
import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";

export default function RequestARiderScreen() {
  return (
    <View>
      <Text>Order Details</Text>
      <Text>Order Category</Text>
      <View>
        <Text>Number of Units</Text>
        <InputField />
      </View>
      <RequestRiderForm />
    </View>
  );
}
