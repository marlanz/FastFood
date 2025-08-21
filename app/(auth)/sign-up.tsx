import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { createUser, getCurrentUser } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        // console.log(currentUser);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async () => {
    if (!form.email || !form.password || !form.name) {
      Alert.alert("Error", "Please enter valid email address and password");
      return;
    }
    setIsSubmitting(true);
    try {
      await createUser({
        email: form.email,
        password: form.password,
        name: form.name,
      });
      Alert.alert("Success", "User signed up successfully");
      router.replace("/sign-in");
    } catch (err: any) {
      Alert.alert("Error", err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your full name"
        value={form.name}
        onChangeText={(text) => {
          setForm({ ...form, name: text });
        }}
        label="Full Name"
      />
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
        title="Sign Up"
        isLoading={isSubmitting}
        onPress={handleSubmit}
      />
      <View className="flex justify-center  flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Already have an account?
        </Text>
        <Link href={"/sign-in"} className="base-bold text-primary">
          Sign in
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
