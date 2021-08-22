import React, { PropsWithChildren } from "react";
import { StyleSheet, View, Modal } from "react-native";
import { Overlay } from "react-native-elements";

export default function AppModal({
  children,
  toggleOverlay,
  visible,
  style,
}: PropsWithChildren<AppModalProps>) {
  return (
    <View>
      <Modal
        style={style}
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={toggleOverlay}
      >
        {children}
      </Modal>
    </View>
  );
}

interface AppModalProps {
  toggleOverlay: () => void;
  visible: boolean;
  style: any;
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
});
