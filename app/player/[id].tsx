import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function PlayerDetail() {
  const { id, name, number, photo, position, description } =
    useLocalSearchParams();
  return (
    <View>
      <ThemedText>{number} </ThemedText>
      <ThemedText>{photo} </ThemedText>
      <ThemedText>{position} </ThemedText>
      <ThemedText>{description} </ThemedText>
    </View>
  );
}
