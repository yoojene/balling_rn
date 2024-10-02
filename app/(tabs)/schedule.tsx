import { ThemedText } from "@/components/ThemedText";
import { Avatar, Card } from "@rneui/themed";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import scheduleJson from "../../assets/json/events.json";

export default function Schedule() {
  const [events, setEvents] = useState(scheduleJson.events);

  return (
    <ScrollView>
      <>
        {events &&
          events.map((event, idx) => (
            <Card key={idx}>
              <View style={styles.stepContainer}>
                <ThemedText type="default">{event.strEvent}</ThemedText>
                <ThemedText type="default">{event.dateEvent}</ThemedText>
                <View style={styles.avatarContainer}>
                  <View style={styles.avatar}>
                    <Avatar
                      rounded
                      size="medium"
                      source={{
                        uri: event.strHomeTeamBadge,
                      }}
                    />
                    {event.intHomeScore !== null ? (
                      <Text
                        style={[
                          styles.scoreText,
                          {
                            color:
                              parseInt(event?.intHomeScore) >
                              parseInt(event?.intAwayScore)
                                ? "green"
                                : "red",
                          },
                        ]}
                      >
                        {event.intHomeScore}
                      </Text>
                    ) : (
                      <Text>Not Played</Text>
                    )}
                  </View>
                  <View style={styles.avatar}>
                    <Avatar
                      rounded
                      size="medium"
                      source={{
                        uri: event.strAwayTeamBadge,
                      }}
                    />
                    {event.intAwayScore !== null ? (
                      <Text
                        style={[
                          styles.scoreText,
                          {
                            color:
                              parseInt(event?.intHomeScore) <
                              parseInt(event?.intAwayScore)
                                ? "green"
                                : "red",
                          },
                        ]}
                      >
                        {event.intAwayScore}
                      </Text>
                    ) : (
                      <Text>Not Played</Text>
                    )}
                  </View>
                </View>
              </View>
              <Text style={{ alignItems: "flex-start" }}>
                {event.strResult.replaceAll(`<br>`, `\n`)}
              </Text>
            </Card>
          ))}
      </>
    </ScrollView>
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
  avatarContainer: {
    flexDirection: "row",
  },
  avatar: {
    padding: 8,
    alignItems: "flex-start",
  },
  scoreText: {
    padding: 8,
    width: 50,
    textAlign: "center",
  },
});
