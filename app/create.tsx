import { Ionicons } from "@expo/vector-icons";
import { Header } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function CreateScreen() {
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
        headerTitleAlign="left"
        headerTitleStyle={{
          fontFamily: "PingFang SC",
          fontSize: 24,
          fontWeight: "600",
          verticalAlign: "middle",
          letterSpacing: 0,
        }}
        headerStyle={{ height: 120 }}
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
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
          );
        }}
      />
      <LinearGradient
        colors={["#1B284F", "#351159", "#421C45", "#3B184E"]}
        locations={[0.1445, 0.4917, 0.7482, 1.0]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
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
          textStyle={styles.text}
          dropDownContainerStyle={styles.glassContainer}
          style={{ ...styles.glassContainer, height: 56 }}
        />
        <TextInput
          style={{
            ...styles.glassContainer,
            ...styles.text,
            height: 260,
            textAlignVertical: "top",
          }}
          multiline={true}
          value={text}
          onChangeText={setText}
          placeholderTextColor="#FFFFFFE5"
          placeholder="Please input note content"
        />
        <LinearGradient
          colors={["#1D0837", "#1C0B37"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
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
            <LinearGradient
              colors={["#F94695", "#F13A76"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            >
              <Text
                style={{
                  ...styles.text,
                  color: "#fff",
                  fontWeight: "600",
                  lineHeight: 14 * 1.3,
                  letterSpacing: 0,
                  textAlign: "center",
                }}
              >
                Save
              </Text>
            </LinearGradient>
          </Pressable>
        </LinearGradient>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  glassContainer: {
    borderColor: "#FFFFFF1F",
    borderStyle: "solid",
    borderWidth: 1,
    backdropFilter: "blur(42px)",
    backgroundColor: "#FFFFFF0D",
    borderRadius: 16,
    padding: 16,
  },
  text: {
    color: "#FFFFFFE5",
    fontFamily: "PingFang SC",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 14 * 1.5,
    letterSpacing: -0.28,
  },
});
