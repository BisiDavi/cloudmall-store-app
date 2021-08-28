import React from "react";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

import colors from "../utils/colors";

export default function ProgressIndicator({ selected }: ProgressIndicator) {
  const numberofIndicators = new Array(4).fill("");

  return (
    <View style={styles.progressIndicator}>
      {numberofIndicators.map((_, index) => {
        const indicatorStyle =
          index < selected ? styles.selected : styles.notSelected;
        return <View style={indicatorStyle} key={index}></View>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  progressIndicator: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selected: {
    height: 5,
    width: Dimensions.get("window").width * 0.21,
    borderColor: colors.gray,
    borderWidth: 1,
    margin: 0,
    backgroundColor: colors.cloudOrange5,
  },
  notSelected: {
    backgroundColor: "white",
    height: 5,
    margin: 0,
    width: Dimensions.get("window").width * 0.21,
    borderColor: colors.gray,
    borderWidth: 1,
  },
});

interface ProgressIndicator {
  selected: number;
}
