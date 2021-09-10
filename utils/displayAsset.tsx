import * as React from "react";
import InfoIcon from "@assets/infoIcon.png";
import EditIcon from "@assets/editIcon.png";
import MenuIcon from "@assets/menuIcon.png";
import NotificationIcon from "@assets/notificationIcon.png";
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
    case "menuIcon": {
      return MenuIcon;
    }
    case "notificationIcon": {
      return NotificationIcon;
    }
    default:
      return null;
  }
}
