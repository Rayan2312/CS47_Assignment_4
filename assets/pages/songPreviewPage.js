import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";
import { Themes, btnTextSize } from "../Themes";
import Song from "../components/song";
import { WebView } from 'react-native-webview';

export default function SongPreviewPage({route, navigation}){
    const {prevUri} = route.params;
    return (
        <WebView  source={{uri: prevUri }}/>
    );
}