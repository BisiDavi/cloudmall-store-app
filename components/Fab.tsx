import colors from "@utils/colors";
import React from "react";
import { View, StyleSheet } from "react-native";
import { FAB } from "react-native-elements";

const Fab = ({ onPress }: FabProps) => {
  return (
    <FAB
      color={colors.mallBlue3}
      title="+"
      onPress={onPress}
      buttonStyle={styles.fab}
      titleStyle={styles.fabStyle}
      placement="right"
    />
  );
};

export default Fab;

const styles = StyleSheet.create({
  fab: {
    borderRadius: 100,
    borderWidth: 0,
    height: 60,
    width: 60,
    padding: 0,
    backgroundColor: colors.mallBlue3,
  },
  fabStyle: {
    fontSize: 40,
    marginTop: -5,
    width: 40,
  },
});

interface FabProps {
  onPress: () => void;
}
