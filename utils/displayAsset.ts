import InfoIcon from "@assets/infoIcon.png";

export default function displayAsset(assetName: string | undefined) {
  switch (assetName) {
    case "infoIcon": {
      return InfoIcon;
    }
    default:
      return null;
  }
}
