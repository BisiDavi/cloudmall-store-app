import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Card } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../customTypes";

export default function DashboardCard({
  content,
  navigation,
  link,
}: DashboardCardProps) {
  return (
    <View style={styles.dashboardCard}>
      <Text
        onPress={() => {
          navigation.navigate(link);
        }}
      >
        {content.title}
      </Text>
      <Card containerStyle={styles.card}>
        <Text>{content.amount}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardCard: {
    display: "flex",
    flexDirection: "column",
  },
  card: {
    height: 100,
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

interface DashboardCardProps {
  content: {
    title: string;
    amount: string;
  };
  link: string;
  navigation: any;
}
