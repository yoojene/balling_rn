import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Avatar } from "@rneui/themed";
import { useState } from "react";

export default function PlayerDetail() {
  const { id, name, number, photo, position, description } =
    useLocalSearchParams();

  const [favourite, setFavourite] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Avatar
        size={48}
        rounded
        icon={{
          name: favourite ? "heart" : "heart-outline",
          type: "ionicon",
          size: 30,
          color: "black",
        }}
        containerStyle={{ backgroundColor: "rgba(29, 66, 138, 0.5)" }}
        onPress={() => setFavourite(!favourite)}
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
