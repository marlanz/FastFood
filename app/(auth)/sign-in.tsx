import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { signIn } from "@/lib/appwrite";
import { Link, router, usePathname } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignIn = () => {
  const pathName = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    const { email, password } = form;
    if (!email || !password) {
      Alert.alert("Error", "Please enter valid email address and password");
      return;
    }
    setIsSubmitting(true);
    try {
      await signIn({ email, password });
      Alert.alert("Success", "User signed in successfully");
      router.replace("/");
    } catch (err: any) {
      Alert.alert("Error", err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => {
          setForm({ ...form, email: text });
        }}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => {
          setForm({ ...form, password: text });
        }}
        label="Password"
        secureTextEntry={true}
      />
      <CustomButton
        title="Sign In"
        isLoading={isSubmitting}
        onPress={handleSubmit}
      />
      <View className="flex justify-center flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Dont`t have an account?
        </Text>
        <Link href={"/sign-up"} className="base-bold text-primary">
          Sign up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
