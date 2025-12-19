import { PageHeader } from "@/components/PageHeader";
import { useNotes } from "@/contexts/NotesContext";
import { Note, NoteCategory } from "@/types/Note";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const { notes, loaded } = useNotes();

  const groupNotesByCategory: Record<NoteCategory, Note[]> = notes.reduce(
    (acc, note) => {
      if (!acc[note.category]) {
        acc[note.category] = [];
      }
      acc[note.category].push(note);
      return acc;
    },
    {} as Record<NoteCategory, Note[]>
  );

  const getLatestNotes = (category: NoteCategory) => {
    const notesInCategory = groupNotesByCategory[category] || [];
    return notesInCategory
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, 3);
  };

  const router = useRouter();

  const getIcon = (category: NoteCategory) => {
    switch (category) {
      case NoteCategory.Work:
        return require("@/assets/images/work.png");
      case NoteCategory.Life:
        return require("@/assets/images/life.png");
      case NoteCategory.Health:
        return require("@/assets/images/health.png");
      default:
        return require("@/assets/images/work.png");
    }
  };

  const goDetail = (id: string) =>
    router.push({ pathname: "/detail/[id]", params: { id: id } });

  return (
    <>
      <PageHeader
        title="Home"
        action={
          <Pressable onPress={() => router.push("/settings")}>
            <Image
              source={require("@/assets/images/settings-icon.png")}
              style={{ height: 24, width: 24 }}
            />
          </Pressable>
        }
      />
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

          {loaded ? (
            Object.entries(NoteCategory).map(([key, val]) => {
              const categoryNotes = getLatestNotes(val);
              return (
                <View key={key}>
                  <View style={styles.categoryHeader}>
                    <Image
                      source={getIcon(val)}
                      style={{
                        tintColor: "#C724E1",
                        height: 20,
                        width: 20,
                      }}
                    />
                    <Text style={styles.text}>{val}</Text>
                  </View>

                  {categoryNotes.length === 0 ? (
                    <></>
                  ) : (
                    categoryNotes.map((note) => (
                      <Pressable
                        key={note.id}
                        style={styles.noteCard}
                        onPress={() => goDetail(note.id)}
                      >
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
                      </Pressable>
                    ))
                  )}
                  <View style={{ height: 20 }} />
                </View>
              );
            })
          ) : (
            <ActivityIndicator />
          )}
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
