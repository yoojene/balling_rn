import { View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// https://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native
export default function CustomStatusBar({
  backgroundColor,
  barStyle = "dark-content",
}: {
  backgroundColor: string;
  barStyle?: "default" | "light-content" | "dark-content";
}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        hidden={false}
      />
    </View>
  );
}
