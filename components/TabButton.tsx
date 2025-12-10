import { Image, ImageSourcePropType, Pressable, Text } from "react-native";

type Props = {
  label: string;
  selectedIcon: ImageSourcePropType;
  unSelectedIcon: ImageSourcePropType;
  isSelected: boolean;
};

export function TabButton({
  label,
  selectedIcon,
  unSelectedIcon,
  isSelected,
  ...rest
}: Props) {
  return (
    <Pressable
      {...rest}
      style={{
        flex: 1,
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={isSelected ? selectedIcon : unSelectedIcon}
        style={{ width: 50, height: 47 }}
      />
      <Text
        style={{
          fontFamily: "PingFang SC",
          fontWeight: "500",
          fontStyle: "normal",
          fontSize: 12,
          lineHeight: 12 * 1.2,
          letterSpacing: 12 * -0.02,
          textAlign: "center",
          color: isSelected ? "#F94695" : "#918DAC",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
