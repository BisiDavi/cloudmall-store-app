import {
    DrawerOneStackNavigator,
    DrawerTwoStackNavigator,
    DrawerThreeStackNavigator,
    DrawerFourStackNavigator,
    DrawerFiveStackNavigator,
} from "@navigation/DrawerStackNavigator";

export default function displayNavigators(navigator: string) {
    switch (navigator) {
        case "myStore": {
            return DrawerOneStackNavigator;
        }

        case "products": {
            return DrawerTwoStackNavigator;
        }

        case "confirmRider": {
            return DrawerThreeStackNavigator;
        }

        case "settings": {
            return DrawerFourStackNavigator;
        }
        case "help": {
            return DrawerFiveStackNavigator;
        }
        default:
            return null;
    }
}
