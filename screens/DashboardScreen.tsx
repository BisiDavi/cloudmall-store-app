import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
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
      <View style={styles.dashboardCards}>
        {dashboardContent.card.map((item: dashboardContentType, index) => (
          <View style={styles.category} key={`${item.category}-${index}`}>
            <Text style={styles.categoryText}>{item.category}</Text>
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
    // justifyContent: "center",
    padding: 20,
  },
  row: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 0,
    width:Dimensions.get("window").width * 0.875
  },
  dashboardCards: {
    display: "flex",
    alignItems: "flex-start",
  },
  categoryText: {
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 16,
    marginBottom:10
  },
  category: {
    margin: 0,
    marginBottom: 30,
    display: "flex",
    alignItems: "flex-start",
  },
});
