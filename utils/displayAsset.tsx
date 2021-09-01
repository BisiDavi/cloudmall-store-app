import * as React from "react";
import InfoIcon from "@assets/infoIcon.png";
import DashboardIcon from "@assets/DashboardSvg";
import StoresIcon from "@assets/StoreSvg";
import ProfileIcon from "@assets/ProfileSvg";
import OrdersIcon from "@assets/OrderSvg";

import AddressIcon from "@assets/icons/AddressIcon";

export default function displayAsset(assetName: string | undefined) {
  switch (assetName) {
    case "infoIcon": {
      return InfoIcon;
    }
    case "address": {
      return <AddressIcon />;
    }
    case "storeIcon": {
      return <StoresIcon />;
    }
    case "profileIcon": {
      return <ProfileIcon />;
    }
    case "dashboardIcon": {
      return <DashboardIcon />;
    }
    case "ordersIcon": {
      return <OrdersIcon />;
    }
    default:
      return null;
  }
}
