import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import { Themes, btnTextSize, trackTextSize } from "../Themes";

export default function Song({title, artist, index, image, album, duration}){
    return (<View style={styles.container}>
        <View style={styles.tinyBox}>
        <Text style={ styles.text} numberOfLines={1}>{index}</Text>
        </View>

        <Image style={[styles.mediumBox]} source={ {uri: image} } />

        <View style={styles.largeBox}>
        <View style={styles.titleBox}>
            <Text style={styles.text} numberOfLines={1}>{title}</Text>
            <Text style={styles.textArtist} numberOfLines={1}>{artist}</Text>
        </View>
        </View>
        <View style={styles.largeBox}> 
        <Text style={ styles.text} numberOfLines={1}>{album}</Text>
        </View>
        <View style={styles.tinyBox}>
        <Text style={styles.text} numberOfLines={1}>{duration}</Text>
        </View>
         </View>);
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",

    }, 
    tinyBox: {
        width: "10%",
        height: Dimensions.get('window').height*0.1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }, 
    mediumBox: {
        width: "20%",
        height: Dimensions.get('window').height*0.1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }, 
    largeBox: {
        width: "20%",
        height: Dimensions.get('window').height*0.1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    titleBox: {
        backgroundColor: "transparent",
        flexDirection: "column",
        alignItems: "flex-start",
    }, 
    text: {
        fontSize: trackTextSize,
        color: Themes.colors.white,
    }, 
    textArtist: {
        fontSize: trackTextSize,
        color: Themes.colors.gray,
    }
  });