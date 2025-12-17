import { Ionicons } from "@expo/vector-icons";
import { Header } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  hasBackButton?: boolean;
  action?: React.ReactNode;
};

export function PageHeader({ title, hasBackButton = false, action }: Props) {
  const router = useRouter();

  return (
    <View style={{ backgroundColor: "#1B284F" }}>
      <Header
        title={title}
        headerTintColor="white"
        headerTitleAlign="left"
        headerTitleStyle={{
          fontFamily: "PingFang SC",
          fontSize: 24,
          fontWeight: "600",
          verticalAlign: "middle",
          letterSpacing: 0,
        }}
        headerStyle={{
          height: 120,
        }}
        headerBackground={() => (
          <LinearGradient
            colors={["#1D0837", "#1C0B37"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              flex: 1,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
        )}
        headerLeft={() =>
          hasBackButton ? (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginHorizontal: 20 }}
            >
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
          ) : null
        }
        headerRight={() => action}
        headerRightContainerStyle={{ paddingRight: 15 }}
      />
    </View>
  );
}

// export function PageHeader({ title, hasBackButton }: Props) {
//   const router = useRouter();

//   return (
//     <LinearGradient
//       colors={["#1D0837", "#1C0B37"]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={{
//         paddingLeft: 6,
//         flexDirection: "row",
//         gap: 10,
//         justifyContent: "flex-start",
//         alignItems: "center",
//         borderBottomLeftRadius: 20,
//         borderBottomRightRadius: 20,
//       }}
//     >
//       {hasBackButton && (
//         <TouchableOpacity
//           onPress={() => router.back()}
//           style={{ marginHorizontal: 20 }}
//         >
//           <Ionicons name="chevron-back" size={24} color="white" />
//         </TouchableOpacity>
//       )}

//       <Text
//         style={{
//           fontFamily: "PingFang SC",
//           color: "#fff",
//           fontSize: 24,
//           fontWeight: "600",
//           verticalAlign: "middle",
//           letterSpacing: 0,
//         }}
//       >
//         {title}
//       </Text>
//     </LinearGradient>
//   );
// }
