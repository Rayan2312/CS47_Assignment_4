import { StyleSheet, Text, View, Dimensions, Image} from "react-native";
import { Themes, trackTextSize, titleTextSize, iconSize, previewIconSize } from "../Themes";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function SongDetails({title, artist, image, album, duration, navigation, prevUri}){
    return (<View style={styles.container}>
        <View style={styles.tinyBox}>
       <Text style={styles.textArtist} >Song</Text>
        </View>

        <View style={styles.largeBox}>
        <View style={styles.titleBox}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.textArtist} numberOfLines={1}>{artist + " . " + duration}</Text>
        </View>
        </View>

        <View style={styles.footer}> 
        <AntDesign  name="hearto" size={iconSize} color="grey" />
        <Entypo style={{paddingLeft: "5%"}} name="dots-three-horizontal" size={iconSize} color="grey" />
        <AntDesign onPress={()=>{navigation.navigate('songPreviewPage', {prevUri})}} style={{paddingLeft: "65%"}} name="play" size={previewIconSize} color="green" />
        </View>
        
         </View>);
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column",
      flex: 1,

    }, 
    tinyBox: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: "5%",
    }, 
    mediumBox: {
        width: "100%",
        height: Dimensions.get('window').height*0.1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }, 
    largeBox: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: "5%",
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
    },
     titleText: {
        fontSize: titleTextSize,
        color: Themes.colors.white,
     },
     footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "5%",
        marginTop: "3%",

     }, titleView: {
        flexDirection: "row",
        justifyContent: "flex-start",
     },

  });