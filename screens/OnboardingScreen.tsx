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

import pizzaImage from "@assets/pizza.png";
import shopperImage from "@assets/shopper.jpg";
import trackSalesImage from "@assets/trackSales.png";
import { RootStackParamList } from "customTypes";

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

  const slides: slidesInteface[] = [
    {
      key: 1,
      title: "Create your store and sell on Cloudmall",
      description: "Shop at your convenience",
      image: pizzaImage,
      backgroundColor: "#E3E3EE;",
    },
    {
      key: 2,
      title: "Manage your orders as they come in",
      description: "Earn more with Cloudmall",
      image: shopperImage,
      backgroundColor: "#E3E3EE;",
    },
    {
      key: 3,
      title: "Track your finances and performances as you sell.",
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
          style={{
            width: Dimensions.get("window").width * 0.8,
            height: Dimensions.get("window").height * 0.45,
          }}
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
      buttonStyle={{ margin:20,marginTop: 10, }}
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
    justifyContent: "space-around",
    marginBottom: 100,
    margin: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontFamily: "Roboto-Light",
    marginBottom: 0,
    textAlign: "left",
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
    marginTop:-20,
  },
  button: {
    margin:20,
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
