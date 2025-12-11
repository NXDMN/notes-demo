import { PageHeader } from "@/components/PageHeader";
import { Note } from "@/models/Note";
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
      </LinearGradient>
    </>
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
