import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Image } from "react-native-elements";
import { Button } from "react-native-elements";
import { useSelector } from "react-redux";
import profileJson from "@json/profile.json";
import { SafeAreaView } from "react-native-safe-area-context";
import JollofRice from "@assets/jollofRice.png";
import colors from "@utils/colors";
import { ScrollView } from "react-native-gesture-handler";
import { RootState } from "@store/RootReducer";

export default function ProfileScreen() {
    const { storeProfile }: any = useSelector(
        (state: RootState) => state.storeProfile,
    );
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.profileDetails}>
                    <Image style={styles.profileImage} source={JollofRice} />
                    <View>
                        <Text>{storeProfile?.name}</Text>
                        <Text>Store ID: 11</Text>
                    </View>
                    <Button
                        buttonStyle={styles.reviewBtn}
                        titleStyle={styles.btnTitle}
                        title="In review"
                    />
                </View>
                <View>
                    {profileJson.map((profile, index) => (
                        <ListItem key={index} bottomDivider>
                            <ListItem.Content>
                                <Text style={styles.profileText}>
                                    {profile.title}
                                </Text>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: colors.neutralWhite,
    },
    profileText: {
        color: "black",
    },
    profileImage: {
        height: 50,
        width: 50,
    },
    profileDetails: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: 20,
        paddingTop: 0,
        backgroundColor: colors.neutralWhite,
    },
    reviewBtn: {
        height: 20,
    },
    btnTitle: {
        fontSize: 14,
    },
});
