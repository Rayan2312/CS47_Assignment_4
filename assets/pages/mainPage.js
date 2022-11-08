import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";
import { Themes, titleTextSize } from "../Themes";
import Song from "../components/song";
import  Constants  from "expo-constants";
export default function MainPage({route, navigation}){
   const {tracks} = route.params;

    return (<View style={styles.container}>
        <Text style={styles.text}>Tracks List</Text>
        <FlatList
         data={tracks} 
         renderItem={({item, index}) => (<Song prevUri={item.preview_url} tracks={tracks} navigation={navigation} title={item.name} artistImage={item.artists[0].uri} artist={item.artists[0].name} index={index+1} image={item.album.images[0].url} album={item.album.name} duration={millisToMinutesAndSeconds(item.duration_ms)}/>)}
         keyExtractor={(item, index) => index} />
    </View>);
}

const styles = StyleSheet.create({
    container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: Themes.colors.background,
    flexDirection: "column",
    alignItems: "center",
    },
    image: {
        height: "20%",
        width: "20%"
    },
    text: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: titleTextSize,
    }
  });