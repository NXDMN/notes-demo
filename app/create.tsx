import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Header } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CreateScreen = () => {
  const [selected, setSelected] = useState();
  const CATEGORIES = ["Work and Study", "Life", "Health and Well-being"];
  const [text, setText] = useState("");
  const router = useRouter();
  const saveNote = async () => {
    router.back();
  };

  return (
    <>
      <Header
        title="New Note"
        headerTintColor="white"
        headerStyle={{ backgroundColor: "#280843" }}
        headerLeft={() => {
          return (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginHorizontal: 20 }}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          );
        }}
      />
      <LinearGradient
        colors={["#1B284F", "#351159", "#421C45", "#3B184E"]}
        locations={[0.1445, 0.4917, 0.7482, 1.0]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{
          flex: 1,
          padding: 20,
          gap: 20,
        }}
      >
        <Picker
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            borderRadius: 8,
          }}
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
        >
          {CATEGORIES.map((category) => (
            <Picker.Item label={category} value={category} key={category} />
          ))}
        </Picker>
        <TextInput
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            borderRadius: 8,
            height: 200,
            textAlignVertical: "top",
            padding: 10,
          }}
          value={text}
          onChangeText={setText}
          placeholder="Write a note..."
        />
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
            height: 120,
            justifyContent: "center",
            backgroundColor: "#220C3A",
            borderRadius: 20,
          }}
        >
          <Pressable
            onPress={saveNote}
            style={{
              backgroundColor: "#F94695",
              width: 200,
              height: 34,
              borderRadius: 24,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#fff" }}>Save</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </>
  );
};

export default CreateScreen;
