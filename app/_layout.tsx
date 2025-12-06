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
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="create"
          options={{
            title: "New Note",
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
