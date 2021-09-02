import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Platform,
  Dimensions,
} from "react-native";
import DashboardCard from "@components/DashboardCard";
import dashboardContent from "@json/dashboard.json";
import { BottomTabParamList } from "../customTypes";
import DashboardChart from "@components/DashboardChart";
import colors from "@utils/colors";
import SelectField from "@components/SelectField";
import selectContent from "@json/dasboard-select.json";

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
    >
      <ScrollView>
        <View style={styles.container}>
          <SelectField style={styles.selectField} content={selectContent} />
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
            <Text style={styles.categoryText}>Statistics</Text>
            <Text style={styles.chartTitle}>
              Performance: Number of orders vs days.
            </Text>
            <DashboardChart />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: colors.neutralWhite,
    padding: 20,
    paddingTop: 0,
    position: "relative",
  },
  selectField: {
    width: Dimensions.get("window").width * 0.4,
    marginTop: 10,
    marginBottom: 0,
  },
  row: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 0,
    width: Dimensions.get("window").width * 0.875,
  },
  dashboardCards: {
    display: "flex",
    alignItems: "flex-start",
  },
  categoryText: {
    fontFamily: "MontserratBold",
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 10,
  },
  chartTitle: {
    fontFamily: "RobotoRegular",
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 10,
  },
  category: {
    margin: 0,
    marginBottom: 30,
    display: "flex",
    alignItems: "flex-start",
  },
});
