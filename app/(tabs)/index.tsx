import { StyleSheet } from "react-native";

import WebView from "react-native-webview";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default function HomeScreen() {
  return (
    <WebView style={styles.container} source={{ uri: "https://theugli.com" }} />
  );
}
