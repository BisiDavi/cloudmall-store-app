import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, Image } from "react-native";
import Modal from "react-native-modal";
import HandWave from "@assets/hand-wave.png";
import { colors } from "@utils/.";
import { RootState } from "@store/RootReducer";

export default function WelcomeModal({ closeModal, visible }: AppModalProps) {
    const { storeProfile } = useSelector(
        (state: RootState) => state.storeProfile,
    );

    const { name }: any = storeProfile;

    const storeFirstLetter = name.split("")[0];

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onBackdropPress={closeModal}
        >
            <View style={styles.modalView}>
                <View style={styles.modalTitle}>
                    <View style={styles.userNameView}>
                        <Text style={styles.userName}>{storeFirstLetter}</Text>
                    </View>
                    <Text style={styles.welcome}>Welcome {name}. </Text>
                    <Image source={HandWave} />
                </View>
                <Text style={styles.modalContent}>
                    Thank you for creating your store’s account. We will verify
                    your details in the next 24 -48 hours. Set up your store
                    while at this.
                </Text>
            </View>
        </Modal>
    );
}

interface AppModalProps {
    closeModal: () => void;
    visible: boolean;
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: colors.neutralWhite,
        height: 180,
        borderRadius: 10,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
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
        margin: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    userName: {
        color: "black",
        fontSize: 24,
        fontFamily: "MontserratBold",
        lineHeight: 32,
        textAlign: "center",
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
        marginTop: 10,
    },
});
