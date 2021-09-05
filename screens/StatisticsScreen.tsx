import React, { useCallback } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { ListItem } from "react-native-elements";
import DashboardChart from "@components/DashboardChart";
import ordersStatisticsJson from "@json/statistics.json";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function StatisticsChart() {
  return (
    <View>
      <Text style={styles.chartTitle}>
        Performance: Number of orders vs days.
      </Text>
      <DashboardChart />
    </View>
  );
}

export default function StatisticsScreen() {
  const ordersStatistics = useCallback(function renderItem({ item }) {
    return (
      <ListItem key={item.date} bottomDivider>
        <ListItem.Content>
          <View>
            <Text>{item.date}</Text>
            <Text>{item.orders}</Text>
          </View>
        </ListItem.Content>
      </ListItem>
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ordersStatisticsJson}
        renderItem={ordersStatistics}
        initialNumToRender={7}
        ListHeaderComponent={StatisticsChart}
        scrollEnabled={true}
        keyExtractor={function (item) {
          return item.date;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  row: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  chartTitle: {
    fontFamily: "RobotoRegular",
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 10,
  },
  category: {
    fontWeight: "bold",
  },
});
