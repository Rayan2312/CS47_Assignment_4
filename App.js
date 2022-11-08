import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthPage from "./assets/pages/authPage";
import MainPage from "./assets/pages/mainPage";
import SongDetailPage from "./assets/pages/songDetailPage";
import SongPreviewPage from "./assets/pages/songPreviewPage";
import Constants from "expo-constants";

export default function App() {

  const Stack = createStackNavigator();


  return ( 
    <NavigationContainer>
      <Stack.Navigator  style={styles.container}>
      <Stack.Screen options={{headerStyle: styles.container, headerTitleStyle: styles.title}} name="authPage" component={AuthPage} />
      <Stack.Screen options={{headerShown: false}} name="mainPage" component={MainPage} />
      <Stack.Screen options={{headerStyle: styles.container, headerTitleStyle: styles.title, title: "", headerTintColor: Themes.colors.white}} name="songDetailsPage" component={SongDetailPage}/>
      <Stack.Screen options={{headerStyle: styles.container, headerTitleStyle: styles.title, title: "", headerTintColor: Themes.colors.white}} name="songPreviewPage" component={SongPreviewPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
  },
  title: {
    color: Themes.colors.white,
  }
});
