import { Note } from "@/models/Note";
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
      content: "Complete project proposal by Friday",
      createdAt: Date.now() - 3600000,
    },
    {
      id: 2,
      category: "Work and Study",
      content: "Review code changes from team",
      createdAt: Date.now() - 7200000,
    },
    {
      id: 3,
      category: "Life",
      content: "Buy groceries: milk, eggs, bread",
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

  const truncateContent = (content: string) => {
    return content.length > 20 ? content.substring(0, 20) + "..." : content;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          "linear-gradient(104.46deg, rgba(28, 11, 55, 0.85) -3.39%, rgba(29, 8, 55, 0.85) 102.44%);",
        padding: 20,
      }}
    >
      <ScrollView>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Image
            source={require("@/assets/images/recent.png")}
            style={{
              tintColor: "#FFFFFFB2",
              height: 20,
              width: 20,
            }}
          />
          <Text style={{ color: "#FFFFFFB2" }}>Recently created notes</Text>
        </View>

        <View style={{ height: 20 }} />

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
                <Text style={{ color: "#fff" }}>{category.name}</Text>
              </View>

              {categoryNotes.length === 0 ? (
                <></>
              ) : (
                categoryNotes.map((note) => (
                  <View key={note.id} style={styles.noteCard}>
                    <Text style={{ color: "#fff" }}>
                      {truncateContent(note.content)}
                    </Text>
                    <Image
                      source={require("@/assets/images/arrow.png")}
                      style={{
                        tintColor: "#F94695",
                        height: 14,
                        width: 14,
                        marginRight: 4,
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
    </View>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
});
