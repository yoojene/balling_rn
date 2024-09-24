import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Avatar } from "@rneui/themed";
import { useFavourites, useFavouritesDispatch } from "@/context/favorites";

export default function PlayerDetail() {
  const { id, name, number, photo, position, description } =
    useLocalSearchParams();

  const { favourites } = useFavourites();
  const dispatch = useFavouritesDispatch();
  const hasFavourite =
    favourites.filter((fav) => fav.name === name).length === 1;

  return (
    <ScrollView style={styles.container}>
      <Avatar
        size={48}
        rounded
        icon={{
          name: hasFavourite ? "heart" : "heart-outline",
          type: "ionicon",
          size: 30,
          color: "black",
        }}
        containerStyle={{ backgroundColor: "rgba(29, 66, 138, 0.5)" }}
        onPress={() => {
          if (!hasFavourite) {
            dispatch({
              type: "ADD_FAVOURITE",
              payload: { name, number, photo, position, description },
            });
          } else {
            dispatch({
              type: "REMOVE_FAVOURITE",
              payload: { name, number, photo, position, description },
            });
          }
        }}
      />
      <Image style={{ height: 400 }} source={photo} contentFit="contain" />

      <ThemedText style={styles.subtitle}> Number</ThemedText>

      <ThemedText style={styles.detail}>{number} </ThemedText>

      <ThemedText style={styles.subtitle}> Position</ThemedText>

      <ThemedText style={styles.detail}>{position} </ThemedText>

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
