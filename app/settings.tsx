import { FooterButton } from "@/components/FooterButton";
import { PageHeader } from "@/components/PageHeader";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  const settingsMenu = [
    {
      name: "Online Customer",
      icon: require("@/assets/images/online-customer-icon.png"),
    },
    {
      name: "User Agreement",
      icon: require("@/assets/images/user-agreement-icon.png"),
    },
    {
      name: "Privacy Policy",
      icon: require("@/assets/images/privacy-policy-icon.png"),
    },
    { name: "About Us", icon: require("@/assets/images/about-us-icon.png") },
  ];
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(false);
      router.back();
    }, 2000);
    return () => clearTimeout(timer);
  }, [modalVisible]);

  const deleteAllNotes = async () => {
    setModalVisible(true);
  };

  return (
    <>
      <PageHeader title="Settings" hasBackButton={true} />
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
        {settingsMenu.map((menu) => (
          <View key={menu.name} style={styles.menuCard}>
            <Image source={menu.icon} style={{ height: 24, width: 24 }} />
            <Text style={{ ...styles.text, flexGrow: 1 }}>{menu.name}</Text>
            <Ionicons
              name="chevron-forward"
              color="#F94695"
              size={22}
              style={{
                marginLeft: 15,
              }}
            />
          </View>
        ))}
        <FooterButton buttonText="Delete All Notes" onPress={deleteAllNotes} />
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <LinearGradient
              colors={["#C724E1", "#4E22CC"]}
              locations={[0, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                height: 76,
                width: 173,
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 10,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                backdropFilter: "blur(42px)",
              }}
            >
              <Text
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: "400",
                  fontStyle: "normal",
                  fontSize: 16,
                  lineHeight: 16,
                  letterSpacing: -0.32,
                  textAlign: "center",
                  color: "#FFF",
                }}
              >
                All notes have been cleared
              </Text>
            </LinearGradient>
          </View>
        </Modal>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  menuCard: {
    borderColor: "#FFFFFF1F",
    borderStyle: "solid",
    borderWidth: 1,
    backdropFilter: "blur(42px)",
    backgroundColor: "#FFFFFF0D",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  text: {
    fontFamily: "PingFang SC",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19.2,
    letterSpacing: -0.32,
    color: "#FFFFFFE5",
  },
});
