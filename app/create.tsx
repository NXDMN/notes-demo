import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Header } from "@react-navigation/elements";
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
        headerStyle={{ backgroundColor: "#1C0B37" }}
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
      <View
        style={{
          flex: 1,
          backgroundColor:
            "linear-gradient(104.46deg, rgba(28, 11, 55, 0.85) -3.39%, rgba(29, 8, 55, 0.85) 102.44%);",
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
            backgroundColor: "#1C0B37",
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
      </View>
    </>
  );
};

export default CreateScreen;
