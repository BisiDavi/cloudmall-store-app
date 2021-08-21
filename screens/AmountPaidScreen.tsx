import React, { useCallback } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import amountPaidContent from "@json/amount-paid.json";

export default function AmountPaidScreen() {
  const amountPaid = useCallback(function renderItem({ item }: ItemType) {
    return (
      <ListItem key={item?.id} bottomDivider>
        <ListItem.Content>
          <View style={styles.row}>
            <Text>{item.price}</Text>
            <Text>{item.duration}</Text>
          </View>
          <View style={styles.row}>
            <Text>{item.method}</Text>
          </View>
        </ListItem.Content>
      </ListItem>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={amountPaidContent}
        renderItem={amountPaid}
        initialNumToRender={7}
        keyExtractor={function (item) {
          return item.id.toString();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  category: {
    fontWeight: "bold",
  },
});

type ItemType = {
  item: amountPaidType;
};

type amountPaidType = {
  id: number;
  price: string;
  duration: string;
  method: string;
};
