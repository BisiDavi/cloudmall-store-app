import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ImageSourcePropType,
} from "react-native";
import { Button, Image } from "react-native-elements";
import AppIntroSlider from "react-native-app-intro-slider";
import SignupScreen from "./SignupScreen";

import pizzaImage from "@assets/images/pizza.png";
import shopperImage from "@assets/images/shopper.jpg";
import trackSalesImage from "@assets/images/trackSales.png";
import { RootStackParamList } from "customTypes";

export default function OnboardingScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "OnboardingScreen">) {
  const [showApp, setShowApp] = useState(false);

  function onDone() {
    return setShowApp(true);
  }
  function onSkip() {
    return setShowApp(true);
  }
  const slides: slidesInteface[] = [
    {
      key: 1,
      title: "Welcome to Cloudmall",
      description: "Shop at your convenience",
      image: pizzaImage,
      backgroundColor: "#E3E3EE;",
    },
    {
      key: 2,
      title: "Partner your store with Cloudmall",
      description: "Earn more with Cloudmall",
      image: shopperImage,
      backgroundColor: "#E3E3EE;",
    },
    {
      key: 3,
      title: "Track your sales with Cloudmall",
      description: "Track daily, weekly, monthly sales",
      image: trackSalesImage,
      backgroundColor: "#E3E3EE;",
    },
  ];
  function RenderItem({ item }: RenderItemProps) {
    return (
      <View
        style={[styles.renderItem, { backgroundColor: item.backgroundColor }]}
        key={item.key}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image
          source={item.image}
          style={{ width: 300, height: 250 }}
          PlaceholderContent={
            <ActivityIndicator size="large" color="#0000ff" />
          }
        />
        <Text style={styles.description}>{item.description}</Text>
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
      buttonStyle={{ marginTop: 10 }}
      onPress={onSkip}
      type="outline"
      title="Skip"
    />
  );
  const renderDoneButton = () => (
    <Button buttonStyle={styles.button} onPress={onDone} title="Done" />
  );

  return showApp ? (
    <SafeAreaView>
      <SignupScreen navigation={navigation} />
    </SafeAreaView>
  ) : (
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
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 0,
    textAlign: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 60,
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    backgroundColor: "blue",
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
  description: string;
  image: ImageSourcePropType;
  backgroundColor: string;
};

interface slidesInteface extends itemTypes {}

interface RenderItemProps {
  item: itemTypes;
}
