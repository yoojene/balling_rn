import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { FavouritesContext, useFavourites } from "@/context/favorites";

export default function Favour() {
  // const favourites = useContext(FavouritesContext);
  const { favourites } = useFavourites();

  console.log(favourites);
  return (
    <ThemedView>
      {favourites &&
        favourites.map((favourite, idx) => (
          <ThemedText key={idx}>{favourite}</ThemedText>
        ))}
      {!favourites.length && (
        <ThemedText type="title">No favourites yet</ThemedText>
      )}
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: "center",
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
