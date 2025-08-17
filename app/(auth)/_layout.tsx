import { Redirect, Slot } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const _Layout = () => {
  const isAuthenticated = false;
  if (isAuthenticated) {
    return <Redirect href="/" />;
  }
  return (
    <SafeAreaView>
      <Text>Auth Layout</Text>
      <Slot />
    </SafeAreaView>
  );
};

export default _Layout;
