import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, Image } from "react-native";
import Modal from "react-native-modal";
import HandWave from "@assets/hand-wave.png";
import { colors } from "@utils/.";
import { RootState } from "@store/RootReducer";

export default function WelcomeModal({ onToggle, visible }: AppModalProps) {
    const { name }: string | any = useSelector(
        (state: RootState) => state.storeDetails,
    );
    const storeFirstLetter = name.split("");
    function toggleModal() {
        return onToggle(!visible);
    }
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onBackdropPress={toggleModal}
        >
            <View style={styles.modalTitle}>
                <View style={styles.userNameView}>
                    <Text style={styles.userName}>{storeFirstLetter}</Text>
                </View>
                <Text style={styles.welcome}>Welcome {name}. </Text>
                <Image source={HandWave} />
            </View>
            <Text style={styles.modalContent}>
                Thank you for creating your store’s account. We will verify your
                details in the next 24 -48 hours. Set up your store while at
                this.
            </Text>
        </Modal>
    );
}

interface AppModalProps {
    onToggle: (visible: boolean) => boolean;
    visible: boolean;
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
    },
    modal: {
        margin: 20,
        flexDirection: "column",
    },
    modalTitle: {
        flexDirection: "row",
        alignItems: "center",
    },
    userNameView: {
        borderRadius: 50,
        borderWidth: 1,
        height: 40,
        width: 40,
        borderColor: colors.mallBlue5,
    },
    userName: {
        color: "black",
        fontSize: 34,
        fontFamily: "MontserratBold",
        lineHeight: 32,
    },
    welcome: {
        fontSize: 14,
        fontFamily: "MontserratBold",
        lineHeight: 16,
        color: colors.textColor,
    },
    modalContent: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        lineHeight: 20,
        color: colors.textColor,
        marginTop: 20,
    },
});
