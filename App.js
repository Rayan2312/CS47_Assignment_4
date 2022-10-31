import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthPage from "./assets/pages/authPage";
import MainPage from "./assets/pages/mainPage";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  const Stack = createStackNavigator();
  let contentDisplayed = token === undefined || tracks.length === 0? <AuthPage useSpotifyAuth={getSpotifyAuth} /> : <MainPage tracks={tracks} />;
  return ( <View style={styles.container}>
    {contentDisplayed}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
