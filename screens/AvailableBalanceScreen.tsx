import React, { useCallback } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import availableBalanceContent from "@json/available-balance.json";

export default function AvailableBalanceScreen() {
  const availableBalance = useCallback(function renderItem({ item }: ItemType) {
    return (
      <ListItem key={item?.id} bottomDivider>
        <ListItem.Content>
          <View style={styles.row}>
            <Text>{item?.name}</Text>
            <Text>{item?.price}</Text>
          </View>
          <View style={styles.row}>
            <Text>{item?.duration}</Text>
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
  item: AvailableBalanceType;
};

type AvailableBalanceType = {
  id: number;
  name: string;
  price: string;
  duration: string;
};
