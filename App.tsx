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

export default function App() {
    const isLoadingComplete = useCachedResources();
    const { persistor, store } = configureStore();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
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
