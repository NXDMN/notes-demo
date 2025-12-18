import { FooterButton } from "@/components/FooterButton";
import { PageHeader } from "@/components/PageHeader";
import { useNotes } from "@/contexts/NotesContext";
import { NoteCategory } from "@/types/Note";
import * as Crypto from "expo-crypto";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function CreateScreen() {
  const [text, setText] = useState("");

  const { addNote } = useNotes();

  const router = useRouter();
  const saveNote = async () => {
    addNote({
      id: Crypto.randomUUID(),
      category: category as NoteCategory,
      content: text,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    router.back();
  };

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<NoteCategory | null>(null);
  const [items, setItems] = useState(
    Object.entries(NoteCategory).map(([key, val]) => ({
      label: val,
      value: val,
    }))
  );

  return (
    <>
      <PageHeader title="New Note" hasBackButton={true} />
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
          value={category}
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
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
        <FooterButton buttonText="Save" onPress={saveNote} />
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
