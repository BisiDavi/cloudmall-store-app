import React from "react";
import { View, Text } from "react-native";
import JollofRice from "@assets/jollofRice.png";
import orders from "@json/viewOrder.json";
import { Button, Image } from "react-native-elements";

export default function ViewOrderScreen() {
  return (
    <View>
      <View>
        <Text>Number of Packs</Text>
        <Text>2 Packs</Text>
        {orders.map((order, index) => (
          <View key={index}>
            <Image source={JollofRice} />
            <Text>
              {order.food}({order.quantity})
            </Text>
            <Text>N{order.price}</Text>
          </View>
        ))}
        <View>
          <Text>Total Amount</Text>
          <Text>N1200</Text>
        </View>
        <View>
          <Text>Dont put plenty oil in the beans</Text>
        </View>
        <View>
          <Button title="Recommend Replacement" />
          <Button title="Accept Order" />
        </View>
      </View>
    </View>
  );
}
