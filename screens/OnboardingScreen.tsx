import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Button } from "react-native-elements";
import AppIntroSlider from "react-native-app-intro-slider";
import RegisterScreen from "./RegisterScreen";

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
      image: require("./assets/pizza.png"),
      backgroundColor: "red",
    },
    {
      key: 2,
      title: "Partner your store with Cloudmall",
      description: "Earn more with Cloudmall",
      image: require("./assets/shopper.png"),
      backgroundColor: "blue",
    },
    {
      key: 3,
      title: "Track your sales with Cloudmall",
      description: "Track daily, weekly, monthly sales",
      image: require("./assets/trackSales.png"),
      backgroundColor: "green",
    },
  ];
  function RenderItem({ item }: RenderItemProps) {
    return (
      <View style={styles.renderItem}>
        <Text>{item.title}</Text>
        <Image source={item.image} />
        <Text>{item.description}</Text>
      </View>
    );
  }

  const renderNextButton = () => <Button title="Next" />;

  const renderSkipButton = () => <Button title="Skip" />;

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
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
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
