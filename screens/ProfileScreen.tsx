import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Overlay } from "react-native-elements";

export default function ProfileScreen() {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
