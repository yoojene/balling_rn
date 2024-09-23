import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View, ScrollView } from "react-native";
import { Image } from "expo-image";

export default function TeamDetail() {
  const { id, name, number, photo, stadium, description } =
    useLocalSearchParams();
  return (
    <ScrollView style={styles.container}>
      <Image style={{ height: 400 }} source={photo} contentFit="contain" />

      <ThemedText style={styles.subtitle}> Team Acronym</ThemedText>
      <ThemedText style={styles.detail}>{number} </ThemedText>

      <ThemedText style={styles.subtitle}> Stadium</ThemedText>
      <ThemedText style={styles.detail}>{stadium} </ThemedText>

      <ThemedText style={styles.subtitle}> Bio</ThemedText>
      <ThemedText style={styles.detail}>{description} </ThemedText>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, marginBottom: 30 },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  detail: {
    marginLeft: 5,
  },
});
