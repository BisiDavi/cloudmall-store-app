import * as React from "react";
import InfoIcon from "@assets/infoIcon.png";
import DashboardIcon from "@assets/dashboard.svg";
import StoresIcon from "@assets/store.svg";
import ProfileIcon from "@assets/profile.svg";
import OrdersIcon from "@assets/order.svg";

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
