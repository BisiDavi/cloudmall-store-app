import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "@hooks/useCachedResources";
import Navigation from "@navigation/.";
import AuthProvider from "context/AuthProvider";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <Navigation />
          <StatusBar style="auto" />
        </AuthProvider>
      </SafeAreaProvider>
    );
  }
}
