import CustomInput from "@/components/CustomInput";
import { images } from "@/constants";
import { Redirect } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

const _Layout = () => {
  const isAuthenticated = false;
  if (isAuthenticated) {
    return <Redirect href="/" />;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full relative"
          style={{ height: Dimensions.get("screen").height / 2.25 }}
        >
          <ImageBackground
            source={images.loginGraphic}
            className="size-full rounded-b-lg"
            resizeMode="stretch"
          />
          <Image
            source={images.logo}
            className="self-center size-48 absolute -bottom-16 z-10"
          />
        </View>
        <CustomInput
          placeholder="Enter your email"
          value=""
          onChangeText={(text) => {}}
          label="Email"
          keyboardType="email-address"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default _Layout;
