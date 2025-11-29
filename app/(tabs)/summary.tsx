import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const CATEGORIES = [
  {
    name: "Work and Study",
    count: 10,
    icon: require("@/assets/images/emoji1.png"),
  },
  { name: "Life", count: 5, icon: require("@/assets/images/emoji2.png") },
  {
    name: "Health and Well-being",
    count: 8,
    icon: require("@/assets/images/emoji3.png"),
  },
];

export default function SummaryScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          "linear-gradient(104.46deg, rgba(28, 11, 55, 0.85) -3.39%, rgba(29, 8, 55, 0.85) 102.44%);",
        padding: 20,
        gap: 20,
      }}
    >
      <View style={styles.titleContainer}>
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
          Summary
        </Text>
        <Image
          source={require("@/assets/images/robot.png")}
          style={{
            height: 100,
            width: 100,
          }}
        />
      </View>
      <View style={{ marginTop: 180 }}>
        {CATEGORIES.map((category) => (
          <View key={category.name} style={{ marginBottom: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Image
                  source={category.icon}
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 24,
                  }}
                />
                <Text style={{ color: "#fff" }}>{category.name}</Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: "#F94695",
                  height: 34,
                  width: 71,
                  borderRadius: 24,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Text style={{ color: "#fff" }}>Detail</Text>
              </Pressable>
            </View>
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: 8,
                padding: 10,
              }}
            >
              <Text style={{ color: "#fff" }}>
                This topic has a total of {category.count} records.
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 8,
    height: 180,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1C0B37",
  },
});
