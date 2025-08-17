import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <TouchableOpacity onPress={() => router.push("/sign-up")}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
