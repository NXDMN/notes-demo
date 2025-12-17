import { Planet } from "@/components/Planet";
import { LinearGradient } from "expo-linear-gradient";
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
    <LinearGradient
      colors={["#1B284F", "#351159", "#421C45", "#3B184E"]}
      locations={[0.1445, 0.4917, 0.7482, 1.0]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        gap: 20,
      }}
    >
      <View style={styles.titleContainer}>
        <Planet />
        <Text
          style={{
            color: "#fff",
            fontFamily: "PingFang SC",
            fontWeight: "600",
            fontStyle: "normal",
            fontSize: 24,
            lineHeight: 24 * 1.5,
            letterSpacing: 0,
          }}
        >
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
      <View
        style={{
          marginTop: 180,
          backgroundColor: "#FFFFFF0D",
          padding: 20,
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backdropFilter: "blur(42px)",
        }}
      >
        {CATEGORIES.map((category) => (
          <View key={category.name} style={{ marginBottom: 30 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
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
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "PingFang SC",
                    fontWeight: "400",
                    fontStyle: "normal",
                    fontSize: 16,
                    lineHeight: 16 * 1.2,
                    letterSpacing: 16 * -0.02,
                  }}
                >
                  {category.name}
                </Text>
              </View>
              <LinearGradient
                colors={["#F94695", "#F13A76"]}
                locations={[0, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  height: 34,
                  width: 71,
                  borderRadius: 24,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable onPress={() => {}}>
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: "PingFang SC",
                      fontWeight: "600",
                      fontStyle: "normal",
                      fontSize: 14,
                      lineHeight: 14 * 1.3,
                      letterSpacing: 0,
                    }}
                  >
                    Detail
                  </Text>
                </Pressable>
              </LinearGradient>
            </View>
            <View style={styles.glassContainer}>
              <Text
                style={{
                  color: "#FFFFFFB2",
                  fontFamily: "PingFang SC",
                  fontWeight: "400",
                  fontStyle: "normal",
                  fontSize: 14,
                  lineHeight: 14 * 1.3,
                  letterSpacing: 0,
                }}
              >
                This topic has a total of {category.count} records.
              </Text>
            </View>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
  },
  glassContainer: {
    borderColor: "#FFFFFF1F",
    borderStyle: "solid",
    borderWidth: 1,
    backdropFilter: "blur(42px)",
    backgroundColor: "#FFFFFF0D",
    borderRadius: 16,
    padding: 16,
  },
});
