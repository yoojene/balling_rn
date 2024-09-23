import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { FavouritesContext } from "@/context/favorites";
export default function HomeScreen() {
  const favourites = useContext(FavouritesContext);
  return (
    <ThemedView>
      <ThemedText type="title" style={styles.title}>
        Favourites
      </ThemedText>
      {favourites &&
        favourites.map((favourite, idx) => (
          <ThemedText key={idx}>{favourite}</ThemedText>
        ))}
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "rgba(29, 66, 138, 0.5)",
    padding: 8,
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
