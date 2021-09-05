import React, { useCallback } from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import { ListItem } from "react-native-elements";
import amountPaidContent from "@json/amount-paid.json";

export default function AmountPaidScreen() {
  const amountPaid = useCallback(function renderItem({ item }: ItemType) {
    return (
      <ListItem key={item?.id} bottomDivider>
        <ListItem.Content>
          <View style={styles.amountPaid}>
            <View style={styles.column1}>
              <Text>{item.price}</Text>
            </View>
            <View style={styles.column2}>
              <Text>{item.method}</Text>
              <Text>{item.duration}</Text>
            </View>
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
    justifyContent: "center",
  },
  row: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  amountPaid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: Dimensions.get("window").width * 0.9,
  },
  column1: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  column2: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
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
