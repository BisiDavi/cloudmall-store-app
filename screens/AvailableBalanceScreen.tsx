import React, { useCallback } from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import { ListItem } from "react-native-elements";
import availableBalanceContent from "@json/available-balance.json";

export default function AvailableBalanceScreen() {
  const availableBalance = useCallback(function renderItem({ item }: ItemType) {
    return (
      <ListItem key={item?.id} bottomDivider>
        <ListItem.Content>
          <View style={styles.availableBalance}>
            <View style={styles.column1}>
              <Text>{item?.name}</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.price}>{item?.price}</Text>
              <Text>{item?.duration}</Text>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={availableBalanceContent}
        renderItem={availableBalance}
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
  availableBalance: {
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
  price: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});

type ItemType = {
  item: AvailableBalanceType;
};

type AvailableBalanceType = {
  id: number;
  name: string;
  price: string;
  duration: string;
};
