import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

export default function AppModal({
  children,
  toggleOverlay,
  visible,
  style,
}: PropsWithChildren<AppModalProps>) {
  return (
    <View>
      <Modal style={style} isVisible={visible}>
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
