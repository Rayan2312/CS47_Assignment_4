import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";
import { Themes, titleTextSize } from "../Themes";
import Song from "../components/song";
import SongDetails from "../components/songDetails";

export default function SongDetailPage({ navigation, route }) {
    const { song, tracks } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: song.image }} />

            <View style={styles.detailsBox}>
                <SongDetails navigation={navigation} prevUri={song.prevUri} title={song.title} artist={song.title} image={song.image} album={song.album} duration={song.duration} />
            </View>


            <View style={styles.artistBox}>
                <Image style={styles.artistAvatar} source={{ uri: song.image }} />
                <View style={styles.artisTitle}>
                    <Text style={styles.textLabel}>Artist</Text>
                    <Text style={styles.text}>{song.artist}</Text>
                </View>
            </View>


            <View style={styles.list}>
                <Text style={styles.listTitle}>Other Tracks: </Text>
                <FlatList
                    data={tracks}
                    renderItem={({ item, index }) => (<Song prevUri={item.preview_url} tracks={tracks} navigation={navigation} title={item.name} artistImage={item.artists[0].uri} artist={item.artists[0].name} index={index + 1} image={item.album.images[0].url} album={item.album.name} duration={millisToMinutesAndSeconds(item.duration_ms)} />)}
                    keyExtractor={(item, index) => index} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: Themes.colors.background,
        alignItems: 'center',
        justifyContent: "flex-start",
        flex: 1,
    },
    image: {
        height: "25%",
        width: "25%",
    },
    text: {
        color: Themes.colors.white,
        fontWeight: "bold",
    },
    detailsBox: {
        width: '100%',
        flex: 3,
    },
    artistBox: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 2,
        width: "100%",
        paddingLeft: "5%",
    },
    artistAvatar: {
        overflow: "hidden",
        borderRadius: 99999,
        height: "70%",
        aspectRatio: 1,
    },
    artisTitle: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: "3%",
    },
    textLabel: {
        color: Themes.colors.gray,
        fontWeight: "normal",
    },
    outerBox: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: "2%",

    },
    list: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flex: 4,
    },
    listTitle: {
        fontSize: titleTextSize,
        color: Themes.colors.white,
    }
});