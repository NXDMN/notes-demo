import { Ionicons } from "@expo/vector-icons";
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
import DropDownPicker from "react-native-dropdown-picker";

const CreateScreen = () => {
  const [selected, setSelected] = useState();
  const CATEGORIES = ["Work and Study", "Life", "Health and Well-being"];
  const [text, setText] = useState("");
  const router = useRouter();
  const saveNote = async () => {
    router.back();
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Work and Study", value: "Work and Study" },
    { label: "Life", value: "Life" },
    { label: "Health and Well-being", value: "Health and Well-being " },
  ]);

  return (
    <>
      <Header
        title="New Note"
        headerTintColor="white"
        headerBackground={() => (
          <LinearGradient
            colors={["#1D0837", "#1C0B37"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
          />
        )}
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
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          mode="SIMPLE"
          theme="DARK"
          placeholder="Choose a category"
          textStyle={{
            color: "#FFFFFFE5",
            fontFamily: "PingFang SC",
            fontSize: 14,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 14 * 1.5,
            letterSpacing: -0.28,
          }}
          dropDownContainerStyle={{
            borderColor: "#FFFFFF1F",
            borderStyle: "solid",
            borderWidth: 1,
            backdropFilter: "blur(42px)",
            backgroundColor: "#FFFFFF0D",
            borderRadius: 16,
          }}
          style={{
            borderColor: "#FFFFFF1F",
            borderStyle: "solid",
            borderWidth: 1,
            backdropFilter: "blur(42px)",
            backgroundColor: "#FFFFFF0D",
            borderRadius: 16,
          }}
        />
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
