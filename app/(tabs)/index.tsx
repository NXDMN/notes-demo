import { PageHeader } from "@/components/PageHeader";
import { Note } from "@/models/Note";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const CATEGORIES = [
  { name: "Work and Study", icon: require("@/assets/images/work.png") },
  { name: "Life", icon: require("@/assets/images/life.png") },
  {
    name: "Health and Well-being",
    icon: require("@/assets/images/health.png"),
  },
];

export default function HomeScreen() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      category: "Work and Study",
      content: "Overview of basic computer networking knowledge",
      createdAt: Date.now() - 3600000,
    },
    {
      id: 2,
      category: "Work and Study",
      content:
        "How to calculate float multiplication and division in JavaScript?",
      createdAt: Date.now() - 7200000,
    },
    {
      id: 3,
      category: "Life",
      content: "Pan-fried chicken breast with vegetable salad",
      createdAt: Date.now() - 1800000,
    },
    {
      id: 4,
      category: "Life",
      content: "Call mom this weekend",
      createdAt: Date.now() - 900000,
    },
    {
      id: 5,
      category: "Health and Well-being",
      content: "Morning yoga at 7am",
      createdAt: Date.now() - 5400000,
    },
  ]);

  const getNotesByCategory = (category: string) => {
    return notes
      .filter((note) => note.category === category)
      .sort((a, b) => b.createdAt - a.createdAt);
  };

  const getLatestNotes = (category: string) => {
    return getNotesByCategory(category).slice(0, 3);
  };

  return (
    <>
      <PageHeader title="Home" />
      <LinearGradient
        colors={["#1B284F", "#351159", "#421C45", "#3B184E"]}
        locations={[0.1445, 0.4917, 0.7482, 1.0]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <ScrollView>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image
              source={require("@/assets/images/recent.png")}
              style={{
                tintColor: "#FFFFFFB2",
                height: 20,
                width: 20,
              }}
            />
            <Text
              style={{
                ...styles.text,
                color: "#FFFFFFB2",
              }}
            >
              Recently created notes
            </Text>
          </View>

          <View style={{ height: 30 }} />

          {CATEGORIES.map((category) => {
            const categoryNotes = getLatestNotes(category.name);
            return (
              <View key={category.name}>
                <View style={styles.categoryHeader}>
                  <Image
                    source={category.icon}
                    style={{
                      tintColor: "#C724E1",
                      height: 20,
                      width: 20,
                    }}
                  />
                  <Text style={styles.text}>{category.name}</Text>
                </View>

                {categoryNotes.length === 0 ? (
                  <></>
                ) : (
                  categoryNotes.map((note) => (
                    <View key={note.id} style={styles.noteCard}>
                      <Text
                        style={{
                          ...styles.text,
                          color: "#FFFFFFE5",
                          flexShrink: 1,
                        }}
                      >
                        {note.content}
                      </Text>
                      <View style={{ flex: 1 }} />
                      <Ionicons
                        name="chevron-forward"
                        color="#F94695"
                        size={22}
                        style={{
                          marginLeft: 15,
                        }}
                      />
                    </View>
                  ))
                )}
                <View style={{ height: 20 }} />
              </View>
            );
          })}
        </ScrollView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "PingFang SC",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 16 * 1.2,
    letterSpacing: 16 * -0.02,
    color: "#fff",
  },
  categoryHeader: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  noteCount: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
  },
  noteCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    borderColor: "#FFFFFF1F",
    borderStyle: "solid",
    borderWidth: 1,
    backdropFilter: "blur(42px)",
    backgroundColor: "#FFFFFF0D",
    borderRadius: 16,
    padding: 16,
  },
});
