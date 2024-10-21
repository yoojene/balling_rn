import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet, View } from "react-native";
import { useFavourites } from "@/context/favourites";
import { Avatar } from "@rneui/base";
import { HeartBroken } from "@/components/HeartBroken";
import { router } from "expo-router";

export default function Favourites() {
  const { favourites } = useFavourites();

  const favouritePlayers = favourites.filter((fav) => fav.isPlayer === true);
  const favouriteTeams = favourites.filter((fav) => fav.isPlayer === false);

  return (
    <>
      <ThemedView>
        {favourites && (
          <>
            {favouritePlayers.length > 0 && (
              <View style={styles.title}>
                <ThemedText type="subtitle"> Favourite Players </ThemedText>
              </View>
            )}
            <ScrollView horizontal={true} style={styles.scroll}>
              {favouritePlayers.map((favourite, idx) => (
                <View style={styles.avatar} key={idx}>
                  <Avatar
                    rounded
                    size="large"
                    source={{
                      uri: favourite.photo,
                    }}
                    onPress={() => {
                      router.push({
                        pathname: "/player/[id]",
                        params: {
                          id: favourite.id,
                          name: favourite.name,
                          number: favourite.number,
                          photo: favourite.photo,
                          position: favourite.position,
                          team: favourite.name,
                          description: favourite.description,
                        },
                      });
                    }}
                  />
                  <ThemedText type="defaultSemiBold">
                    {favourite.name}
                  </ThemedText>
                </View>
              ))}
            </ScrollView>

            {!favouritePlayers.length && (
              <View style={styles.title}>
                <ThemedText type="subtitle">No favourite players</ThemedText>
                <HeartBroken />
              </View>
            )}

            {favouriteTeams.length > 0 && (
              <View style={styles.title}>
                <ThemedText type="subtitle"> Favourite Teams </ThemedText>
              </View>
            )}
            <ScrollView horizontal={true} style={styles.scroll}>
              {favouriteTeams.map((favourite, idx) => (
                <View style={styles.avatar} key={idx}>
                  <Avatar
                    rounded
                    size="large"
                    source={{
                      uri: favourite.photo,
                    }}
                    onPress={() => {
                      router.push({
                        pathname: "/team/[id]",
                        params: {
                          id: favourite.id,
                          name: favourite.name,
                          number: favourite.number,
                          photo: favourite.photo,
                          position: favourite.position,
                          team: favourite.name,
                          description: favourite.description,
                        },
                      });
                    }}
                  />
                  <ThemedText type="defaultSemiBold">
                    {favourite.name}
                  </ThemedText>
                </View>
              ))}
            </ScrollView>

            {!favouriteTeams.length && (
              <View style={styles.title}>
                <ThemedText type="subtitle">No favourite teams</ThemedText>
                <HeartBroken />
              </View>
            )}
          </>
        )}
      </ThemedView>
    </>
  );
}
const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    fontSize: 18,
    // justifyContent: "center",
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
  avatar: {
    padding: 8,
    textAlign: "center",
    alignItems: "center",
  },
  scroll: {
    backgroundColor: "aliceblue",
  },
});
