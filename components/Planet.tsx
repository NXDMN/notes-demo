import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

const SIZE = 300;
const RADIUS = SIZE / 2;
const BORDER_WIDTH = 1;

export function Planet() {
  return (
    <View style={styles.shadowWrapper}>
      <LinearGradient
        colors={["#2E1756", "rgba(127, 59, 138, 0.16)"]}
        locations={[0.572, 0.9009]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.border}
      >
        <LinearGradient
          colors={["#240D38", "rgba(51, 15, 82, 0)"]}
          locations={[0.4573, 0.6058]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.inner}
        >
          <LinearGradient
            colors={["#1B284F", "#351159", "#713294"]}
            locations={[0.2642, 0.6832, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.fill}
          />
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    top: -129,
    right: -90,
    borderRadius: RADIUS,

    // shadow
    shadowColor: "#713294",
    shadowOffset: { width: 4, height: 15 },
    shadowOpacity: 0.38,
    shadowRadius: 30,
    elevation: 15,
  },

  border: {
    flex: 1,
    padding: BORDER_WIDTH,
    borderRadius: RADIUS,
  },

  inner: {
    flex: 1,
    borderRadius: RADIUS - BORDER_WIDTH,
  },

  fill: {
    flex: 1,
    borderRadius: RADIUS - BORDER_WIDTH,
    opacity: 1,
  },
});
