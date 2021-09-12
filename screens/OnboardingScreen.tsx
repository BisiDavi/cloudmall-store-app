import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    ImageSourcePropType,
    Dimensions,
} from "react-native";
import { Button, Image } from "react-native-elements";
import AppIntroSlider from "react-native-app-intro-slider";

import { RootStackParamList } from "customTypes";
import colors from "@utils/colors";
import onboardingScreenJson from "@json/onboarding.json";
import displayAsset from "@utils/displayAsset";

export default function OnboardingScreen({
    navigation,
}: StackScreenProps<RootStackParamList, "SignupScreen">) {
    const [showApp, setShowApp] = useState(false);

    function onDone() {
        return setShowApp(true);
    }
    function onSkip() {
        return setShowApp(true);
    }

    useEffect(() => {
        showApp && showSignupScreen();
    }, [showApp]);

    const slides: slidesInteface[] = onboardingScreenJson.map((item) => ({
        key: item.key,
        title: item.title,
        image: displayAsset(item.image),
    }));

    function RenderItem({ item }: RenderItemProps) {
        return (
            <View style={styles.renderItem} key={item.key}>
                <Text style={styles.title}>{item.title}</Text>
                <Image
                    source={item.image}
                    style={styles.image}
                    PlaceholderContent={
                        <ActivityIndicator size="large" color="#0000ff" />
                    }
                />
            </View>
        );
    }

    function renderNextButton() {
        return (
            <View style={styles.button}>
                <Text style={styles.text}>Next</Text>
            </View>
        );
    }
    const renderSkipButton = () => (
        <Button
            buttonStyle={{ margin: 20, marginTop: 10 }}
            onPress={onSkip}
            type="outline"
            title="Skip"
        />
    );
    const renderDoneButton = () => (
        <Button buttonStyle={styles.button} onPress={onDone} title="Done" />
    );

    function showSignupScreen() {
        navigation.push("SignupScreen");
    }

    return (
        <AppIntroSlider
            data={slides}
            keyExtractor={(item) => item.key.toString()}
            renderItem={RenderItem}
            showSkipButton={true}
            renderNextButton={renderNextButton}
            renderSkipButton={renderSkipButton}
            renderDoneButton={renderDoneButton}
            bottomButton
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    renderItem: {
        flex: 1,
        justifyContent: "flex-start",
        marginBottom: 100,
        margin: Dimensions.get("window").height * 0.05,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontFamily: "RobotoLight",
        marginBottom: 0,
        textAlign: "left",
        color: colors.mallBlue5,
    },
    image: {
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height * 0.45,
        marginTop: Dimensions.get("window").height * 0.05,
        marginBottom: Dimensions.get("window").height * 0.05,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    button: {
        margin: 20,
        marginTop: 5,
        marginBottom: 5,
        justifyContent: "center",
        backgroundColor: colors.mallBlue5,
        padding: 20,
        height: 45,
        borderRadius: 5,
        flex: 1,
        alignItems: "center",
    },
});

type itemTypes = {
    key: number;
    title: string;
    image: ImageSourcePropType;
};

interface slidesInteface extends itemTypes {}

interface RenderItemProps {
    item: itemTypes;
}
