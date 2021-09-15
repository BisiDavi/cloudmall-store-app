import * as React from "react";
import InfoIcon from "@assets/infoIcon.png";
import EditIcon from "@assets/editIcon.png";
import MenuIcon from "@assets/menuIcon.png";
import NotificationIcon from "@assets/notificationIcon.png";
import JollofRice from "@assets/jollofRice.png";
import Spaghetti from "@assets/spaghetti.png";
import pizzaImage from "@assets/pizza.png";
import shopperImage from "@assets/shopper.jpg";
import trackSalesImage from "@assets/trackSales.png";
import MapSvg from "@assets/MapSvg";
import InfoSvg from "@assets/InfoSvg";

export default function displayAsset(assetName: string | undefined) {
    switch (assetName) {
        case "infoIcon": {
            return <InfoSvg />;
        }
        case "address": {
            return <MapSvg />;
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
        case "jollofRice": {
            return JollofRice;
        }
        case "spaghetti": {
            return Spaghetti;
        }
        case "pizzaImage": {
            return pizzaImage;
        }
        case "shopperImage": {
            return shopperImage;
        }
        case "trackSalesImage": {
            return trackSalesImage;
        }
        default:
            return null;
    }
}
