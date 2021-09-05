import React from "react";
import { Card } from "react-native-elements";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function DashboardCard({
  content,
  navigation,
}: DashboardCardProps) {
  return (
    <View style={styles.dashboardCard}>
      <Text style={styles.title}>{content.title}</Text>
      {content.link ? (
        <TouchableOpacity onPress={() => navigation.navigate(content.link)}>
          <Card containerStyle={styles.card}>
            <Text style={styles.cardText}>{content.amount}</Text>
          </Card>
        </TouchableOpacity>
      ) : (
        <Card containerStyle={styles.card}>
          <Text style={styles.cardText}>{content.amount}</Text>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 0,
    justifyContent: "flex-start",
    padding: 0,
  },
  card: {
    height: 80,
    width: Dimensions.get("window").width * 0.38,
    display: "flex",
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  cardText: {
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 16,
  },
  title: {
    fontWeight: "500",
    fontFamily: "RobotoRegular",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
});

interface DashboardCardProps {
  content: {
    title: string;
    amount: string;
    link?: string | undefined;
  };
  navigation: any;
}
