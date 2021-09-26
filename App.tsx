import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import useCachedResources from "@hooks/useCachedResources";
import Navigation from "@navigation/.";
import AuthProvider from "context/AuthProvider";
import configureStore from "./store/Store";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "@utils/colors";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const { persistor, store } = configureStore();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <PersistGate
                        loading={<Spinner color={colors.cloudOrange5} />}
                        persistor={persistor}
                    >
                        <AuthProvider>
                            <Navigation />
                            <StatusBar style="auto" />
                        </AuthProvider>
                    </PersistGate>
                </Provider>
            </SafeAreaProvider>
        );
    }
}
