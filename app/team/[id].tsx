import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function TeamDetail() {
  const { id, name, number, photo, stadium, description } =
    useLocalSearchParams();
  return (
    <View>
      <ThemedText>{number} </ThemedText>
      <ThemedText>{photo} </ThemedText>
      <ThemedText>{stadium} </ThemedText>
      <ThemedText>{description} </ThemedText>
    </View>
  );
}
