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
import RegisterScreen from "./SignupScreen";
import pizzaImage from "../assets/images/pizza.png";
import shopperImage from "../assets/images/shopper.jpg";
import trackSalesImage from "../assets/images/trackSales.png";

export default function OnboardingScreen() {
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
          style={{ width: 300, height: 300 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  }

  const renderNextButton = () => <Button style={styles.button} title="Next" />;
  const renderSkipButton = () => (
    <Button style={styles.button} onPress={onSkip} title="Skip" />
  );
  const renderDoneButton = () => (
    <Button style={styles.button} onPress={onDone} title="Done" />
  );

  return (
    <>
      {showApp ? (
        <SafeAreaView>
          <RegisterScreen />
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          showSkipButton={true}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          renderDoneButton={renderDoneButton}
          bottomButton
        />
      )}
    </>
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
    paddingBottom: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },
  description: {
    fontSize: 16,
    fontWeight: "normal",
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
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
