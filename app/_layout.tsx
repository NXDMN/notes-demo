import { NotesProvider } from "@/contexts/NotesContext";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const router = useRouter();

  return (
    <NotesProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#1B284F",
          },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="detail/[id]" />
        <Stack.Screen name="settings" />
      </Stack>
      <StatusBar style="light" />
    </NotesProvider>
  );
}
