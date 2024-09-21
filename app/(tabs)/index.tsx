import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet } from "react-native";
import { SearchBar, ButtonGroup, Button, Avatar } from "@rneui/themed";
import { useState } from "react";
import playersJson from "../../assets/json/players.json";
import teamsJson from "../../assets/json/teams.json";
import { ListItem } from "@rneui/themed";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const [players, setPlayers] = useState(playersJson.players);
  const [teams, setTeams] = useState(teamsJson.teams);

  const updateSearch = (search: string) => {
    setSearch(search);

    selectedIndex === 0 ? searchPlayers(search) : searchTeams(search);
  };

  const searchPlayers = (search: string) => {
    // Seed search from static data each time
    const searchPlayers = playersJson.players;

    setPlayers(
      searchPlayers.filter((p: any) => {
        return p.strPlayer.toLowerCase().includes(search.toLowerCase());
      })
    );
  };
  const searchTeams = (search: string) => {
    // Seed search from static data each time
    const searchTeams = teamsJson.teams;

    setTeams(
      searchTeams.filter((t: any) => {
        return t.strTeam.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <ThemedView>
        <ThemedText type="title" style={styles.title}>
          Home
        </ThemedText>
        <SearchBar
          placeholder="Search..."
          onChangeText={updateSearch}
          value={search}
        />
        <ButtonGroup
          buttons={[
            <Button
              title="Players"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "rgba(29, 66, 138, 1",
                shadowColor: "rgba(200, 16, 46, 0.3)",
                borderRadius: 15,
              }}
              titleStyle={{
                fontWeight: "normal",
                fontSize: 23,
                color: "black",
              }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => {
                console.log("Players");
                setSearch("");
                setPlayers(playersJson.players);
                setSelectedIndex(0);
              }}
            />,
            <Button
              title="Teams"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "rgba(29, 66, 138, 1",
                shadowColor: "rgba(200, 16, 46, 0.3)",
                borderBottomEndRadius: 15,
              }}
              titleStyle={{
                fontWeight: "normal",
                fontSize: 23,
                color: "black",
              }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => {
                console.log("Teams");
                setSearch("");
                setTeams(teamsJson.teams);
                setSelectedIndex(1);
              }}
            />,
          ]}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{
            marginBottom: 20,
            borderRadius: 15,
          }}
        />
      </ThemedView>

      <ScrollView style={styles.scrollView}>
        {selectedIndex === 0 ? (
          <>
            {players &&
              players.map((p: any) => (
                <ListItem key={p.idPlayer} bottomDivider>
                  <Avatar
                    rounded
                    size="large"
                    source={{
                      uri: p.strCutout,
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{p.strPlayer}</ListItem.Title>
                    <ListItem.Subtitle>{p.strNumber}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))}
          </>
        ) : (
          <>
            {teams &&
              teams.map((t) => (
                <ListItem key={t.idTeam} bottomDivider>
                  <Avatar
                    rounded
                    size="large"
                    source={{
                      uri: t.strBadge,
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{t.strTeam}</ListItem.Title>
                    <ListItem.Subtitle>{t.strTeamShort}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))}
          </>
        )}
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
    marginTop: 5,
    backgroundColor: "pink",
    marginHorizontal: 5,
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
