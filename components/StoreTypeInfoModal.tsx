import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "@utils/colors";
import Modal from "react-native-modal";

interface StoreTypeInfoModalProps {
    modal: boolean;
    toggleModal: () => void;
}

export default function StoreTypeInfoModal({
    modal,
    toggleModal,
}: StoreTypeInfoModalProps) {
    return (
        <Modal
            style={styles.modal}
            onBackdropPress={toggleModal}
            isVisible={modal}
            animationIn="slideInUp"
        >
            <View style={styles.modalView}>
                <Text style={styles.title}>Pick up Shopping Store</Text>
                <Text style={styles.text}>
                    Help sort and package the orders. The dispatcher, just picks
                    up (this comes with a little reward from us)
                </Text>
                <Text style={styles.title}>In-store Shipping Store</Text>
                <Text style={styles.text}>
                    Leave the shopping and sorting of orders to the dispatcher
                </Text>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modalView: {
        backgroundColor: colors.neutralWhite,
        height: 260,
        borderRadius: 10,
        padding: 20,
        justifyContent: "center",
    },
    title: {
        color: colors.cloudOrange5,
        fontFamily: "RobotoBold",
        fontSize: 18,
        textAlign: "center",
        margin: 10,
    },
    text: {
        fontFamily: "RobotoRegular",
        fontSize: 15,
        textAlign: "left",
        color: "black",
        lineHeight: 18,
        marginBottom: 10,
    },
});
