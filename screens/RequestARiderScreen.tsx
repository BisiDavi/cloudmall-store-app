import React from "react";
import { View, Text, ScrollView } from "react-native";
import RequestRiderForm from "@components/forms/RequestRiderForm";
import InputField from "@components/InputField";

export default function RequestARiderScreen() {
    return (
        <ScrollView>
            <Text>Order Details</Text>
            <Text>Order Category</Text>
            <View>
                <Text>Number of Units</Text>
                <InputField />
            </View>
            <RequestRiderForm />
        </ScrollView>
    );
}
