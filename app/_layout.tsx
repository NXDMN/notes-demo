import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor:
                "linear-gradient(104.46deg, rgba(28, 11, 55, 0.85) -3.39%, rgba(29, 8, 55, 0.85) 102.44%);",
            },
          }}
        />
        <Stack.Screen
          name="create"
          options={{
            title: "New Note",
            presentation: "modal",
            headerStyle: {
              backgroundColor: "#1C0B37",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
