import { TabButton } from "@/components/TabButton";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs, useRouter, useSegments } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";

export default function TabLayout() {
  const router = useRouter();
  const segments = useSegments();
  const currentRoute = segments[segments.length - 1];
  return (
    <LinearGradient
      colors={["#1B284F", "#351159", "#421C45", "#3B184E"]}
      locations={[0.1445, 0.4917, 0.7482, 1.0]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#F94695",
          headerShown: true,
          headerBackground: () => (
            <LinearGradient
              colors={["#1D0837", "#1C0B37"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1 }}
            />
          ),
          headerTintColor: "#fff",
          tabBarBackground: () => (
            <LinearGradient
              colors={["#1D0837", "#1C0B37"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1, borderRadius: 20 }}
            />
          ),
          tabBarStyle: {
            height: 120,
            paddingHorizontal: 50,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0,
            paddingTop: 30,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarButton: (props) => {
              const { ref, ...rest } = props as any;
              const isSelected = currentRoute === "(tabs)";
              return (
                <TabButton
                  label="Home"
                  selectedIcon={require("@/assets/images/home-selected-icon.png")}
                  unSelectedIcon={require("@/assets/images/home-icon.png")}
                  isSelected={isSelected}
                  {...rest}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="dummy"
          options={{
            title: "Create",
            tabBarButton: (props) => {
              const { ref, ...rest } = props as any;
              return (
                <Pressable
                  {...rest}
                  onPress={(event) => {
                    event.preventDefault();
                    router.push("/create");
                  }}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@/assets/images/create-icon.png")}
                    style={{ width: 36, height: 36 }}
                  />
                </Pressable>
              );
            },
          }}
        />
        <Tabs.Screen
          name="summary"
          options={{
            title: "Summary",
            headerShown: false,
            tabBarButton: (props) => {
              const { ref, ...rest } = props as any;
              const isSelected = currentRoute === "summary";
              return (
                <TabButton
                  label="Summary"
                  selectedIcon={require("@/assets/images/summary-selected-icon.png")}
                  unSelectedIcon={require("@/assets/images/summary-icon.png")}
                  isSelected={isSelected}
                  {...rest}
                />
              );
            },
          }}
        />
      </Tabs>
    </LinearGradient>
  );
}
