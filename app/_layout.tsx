import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const router = useRouter();

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#1B284F",
          },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="create" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
