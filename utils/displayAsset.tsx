import * as React from "react";
import InfoIcon from "@assets/infoIcon.png";
import AddressIcon from "@assets/icons/AddressIcon";

export default function displayAsset(assetName: string | undefined) {
  switch (assetName) {
    case "infoIcon": {
      return InfoIcon;
    }
    case "address": {
      return <AddressIcon />;
    }
    default:
      return null;
  }
}
