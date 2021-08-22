import { Dimensions } from "react-native";

export default function getDeviceDimensions() {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;

  return { deviceHeight, deviceWidth };
}
