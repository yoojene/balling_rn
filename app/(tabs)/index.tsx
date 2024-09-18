import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <ThemedView>
        <ThemedText type="title" style={styles.title}>
          Home
        </ThemedText>
      </ThemedView>
      <ScrollView style={styles.scrollView}>
        <HelloWave />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "rgba(29, 66, 138, 0.5)",
    padding: 8,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
