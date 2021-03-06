import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoadingActivityIndicator from "@components/LoadingActivityIndicator";
import RootNavigator from "./RootNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation() {
    return (
        <NavigationContainer fallback={<LoadingActivityIndicator />}>
            <RootNavigator />
        </NavigationContainer>
    );
}
