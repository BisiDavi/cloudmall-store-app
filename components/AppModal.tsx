import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { Overlay } from "react-native-elements";

export default function AppModal({
  children,
  toggleOverlay,
  visible,
  style,
}: PropsWithChildren<AppModalProps>) {
  return (
    <View>
      <Overlay
        style={style}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        {children}
      </Overlay>
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
