import { StyleSheet, Text, View, Pressable } from "react-native";
import { Themes, btnTextSize } from "../Themes";
import images from "../Images/images";
import { AntDesign } from '@expo/vector-icons'; 

export default function AuthPage({navigation, route, useSpotifyAuth}){
    return (<View style={styles.container}>
        <Pressable style={styles.btn} onPress={()=>useSpotifyAuth()}>
        <View style={styles.btnRow}>
        <AntDesign name="login" size={24} color="white" />
        <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
        </View>
        </Pressable>
    </View>);
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      flex: 1,
    },
    btnRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    },
    image: {
        height: "20%",
        width: "20%"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        paddingLeft: "4%",
        fontSize: btnTextSize,
    }, 
    btn: {
        backgroundColor: Themes.colors.spotify,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        height: "8%",
        width: "60%",
        borderRadius: 99999,
    }
  });