import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import DashboardCard from "@components/DashboardCard";
import dashboardContent from "@json/dashboard.json";
import { BottomTabParamList } from "../customTypes";

type DashboardScreenNavigationProps = StackNavigationProp<
  BottomTabParamList,
  "Dashboard"
>;

type DashboardScreenRouteProps = RouteProp<BottomTabParamList, "Dashboard">;

type Props = {
  route?: DashboardScreenRouteProps;
  navigation: DashboardScreenNavigationProps;
};

type dashboardContentType = {
  category: string;
  link: string;
  content: { title: string; amount: string }[];
};

export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View>
        {dashboardContent.card.map((item: dashboardContentType, index) => (
          <View key={`${item.category}-${index}`}>
            <Text style={styles.category}>{item.category}</Text>
            <View style={styles.row}>
              {item.content.map((content, index) => (
                <DashboardCard
                  key={index}
                  link={item.link}
                  navigation={navigation}
                  content={content}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
      <View>
        <Text>Statistics</Text>
        <Text>Performance: Number of orders vs days.</Text>
      </View>
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
