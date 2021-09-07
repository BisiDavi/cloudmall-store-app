import * as React from "react";
import InfoIcon from "@assets/infoIcon.png";
import EditIcon from "@assets/editIcon.png";

import AddressIcon from "@assets/icons/AddressIcon";

export default function displayAsset(assetName: string | undefined) {
  switch (assetName) {
    case "infoIcon": {
      return InfoIcon;
    }
    case "address": {
      return <AddressIcon />;
    }
    case "editIcon": {
      return EditIcon;
    }
    default:
      return null;
  }
}
