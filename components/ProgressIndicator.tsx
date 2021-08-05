import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ButtonGroup } from "react-native-elements";

export default function ProgressIndicator() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  return (
    <ButtonGroup
      buttonStyle={{ width: 50, height: 10, backgroundColor: "blue" }}
      buttonContainerStyle={{}}
      buttons={["", "", "", "", ""]}
      containerStyle={{}}
      disabled={[1, 2, 3, 4]}
      disabledStyle={{}}
      disabledTextStyle={{}}
      disabledSelectedStyle={{}}
      disabledSelectedTextStyle={{}}
      innerBorderStyle={{}}
      selectedButtonStyle={{}}
      selectedIndex={selectedIndex}
      selectedIndexes={selectedIndexes}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
