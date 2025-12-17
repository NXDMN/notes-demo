import { FooterButton } from "@/components/FooterButton";
import { PageHeader } from "@/components/PageHeader";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const router = useRouter();
  const deleteAllNotes = async () => {
    router.back();
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
        <FooterButton buttonText="Delete All Notes" onPress={deleteAllNotes} />
      </LinearGradient>
    </>
  );
}
