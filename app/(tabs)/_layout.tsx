import { LinearGradient } from "expo-linear-gradient";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";

export default function TabLayout() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#1B284F", "#351159", "#421C45", "#3B184E"]}
      locations={[0.1445, 0.4917, 0.7482, 1.0]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{ flex: 1 }}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#F94695",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#280843",
          },
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#220C3A",
            height: 100,
            paddingTop: 10,
            paddingHorizontal: 50,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/home-selected-icon.png")
                    : require("@/assets/images/home-icon.png")
                }
                style={{ width: 28, height: 28 }}
              />
            ),
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
                    style={{ width: 28, height: 28 }}
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
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("@/assets/images/summary-selected-icon.png")
                    : require("@/assets/images/summary-icon.png")
                }
                style={{ width: 28, height: 28 }}
              />
            ),
          }}
        />
      </Tabs>
    </LinearGradient>
  );
}
