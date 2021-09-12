import {
    DrawerFiveStackNavigator,
    DrawerFourStackNavigator,
    DrawerOneStackNavigator,
    DrawerThreeStackNavigator,
    DrawerTwoStackNavigator,
} from "@navigation/DrawerStackNavigator";

export default function displayNavigators(navigator: string) {
    switch (navigator) {
        case "myStore": {
            return DrawerOneStackNavigator;
        }

        case "products": {
            return DrawerTwoStackNavigator;
        }

        case "products": {
            return DrawerThreeStackNavigator;
        }

        case "confirmRider": {
            return DrawerFourStackNavigator;
        }

        case "settings": {
            return DrawerFiveStackNavigator;
        }
        default:
            return null;
    }
}
