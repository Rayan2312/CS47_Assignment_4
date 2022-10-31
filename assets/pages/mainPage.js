import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";
import { Themes, btnTextSize } from "../Themes";
import Song from "../components/song";

export default function MainPage({tracks}){
   
    return (<View style={styles.container}>
        <FlatList
         data={tracks} 
         renderItem={({item, index}) => (<Song title={item.name} artist={item.artists[0].name} index={index+1} image={item.album.images[0].url} album={item.album.name} duration={millisToMinutesAndSeconds(item.duration_ms)}/>)}
         keyExtractor={(item, index) => index} />
    </View>);
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
        backgroundColor: Themes.colors.spotify,
        fontSize: btnTextSize,
        flexDirection: "row",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 99999,
        height: "12%",
        width: "80%",
        paddingTop: "7%",
    },
    image: {
        height: "20%",
        width: "20%"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        paddingLeft: "4%",
    }
  });