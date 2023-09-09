import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const Spinner = () => (
  <View style={styles.activityContainer}>
    <ActivityIndicator size="large" color={"#fff"} />
  </View>
);

const Github = (props) => {
  return (
    <WebView
      bounces={false}
      startInLoadingState={true}
      renderLoading={Spinner}
      style={styles.container}
      source={{ uri: "https://github.com/marcellintacite" }}
      showsHorizontalScrollIndicator={false}
      scalesPageToFit
    />
  );
};

export default Github;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#352F44",
    height: "100%",
    width: "100%",
  },
});
