import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomStatusBar from "./components/custom-status-bar";
import { favourites, FavouritesContext } from "@/context/favorites";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <FavouritesContext.Provider value={favourites}>
          {/** Dont need this with expo **/}
          {/* <CustomStatusBar backgroundColor="rgba(29, 66, 138, 0.5)" /> */}
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "rgba(29, 66, 138, 0.5)",
              },
            }}
          >
            <Stack.Screen
              name="(tabs)"
              options={({ route }) => ({
                // headerTitle: "Home",
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="player/[id]"
              options={({ route }) => ({
                headerTitle: (route?.params as any).name, // TODO create models
                headerBackTitleVisible: false,
              })}
            />
            <Stack.Screen
              name="team/[id]"
              options={({ route }) => ({
                headerTitle: (route?.params as any).name, // TODO create models
                headerBackTitleVisible: false,
              })}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </FavouritesContext.Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
