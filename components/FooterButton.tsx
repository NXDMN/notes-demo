import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  buttonText: string;
  onPress: () => {};
};

export function FooterButton({ buttonText, onPress }: Props) {
  return (
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
        onPress={onPress}
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
            {buttonText}
          </Text>
        </LinearGradient>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
