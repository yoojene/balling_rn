import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, StyleSheet } from "react-native";
import { SearchBar, ButtonGroup, Button } from "@rneui/themed";
import { useState } from "react";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const updateSearch = (search: string) => {
    setSearch(search);
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
            // backgroundColor: "red",
          }}
        />
      </ThemedView>

      <ScrollView style={styles.scrollView}>

        {selectedIndex === 0 ? (
          <>
          <ThemedText>players</ThemedText>
          <HelloWave />
          </>
        ) : (
          <>
          <ThemedText>teams</ThemedText>
           <HelloWave />
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
