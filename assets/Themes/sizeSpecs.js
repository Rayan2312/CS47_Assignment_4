import { Platform } from "react-native";

const btnTextSize = Platform.isPad? 24 : 12;
const trackTextSize = Platform.isPad? 24 : 12;
const titleTextSize = Platform.isPad? 72 : 36;
const iconSize = Platform.isPad? 48: 24;
const previewIconSize = Platform.isPad? 96 : 48;
export {btnTextSize, trackTextSize, titleTextSize, iconSize, previewIconSize}