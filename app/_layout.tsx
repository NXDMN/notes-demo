import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1C0B37" }}>
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
            headerStyle: {
              backgroundColor: "#1C0B37",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </View>
  );
}
