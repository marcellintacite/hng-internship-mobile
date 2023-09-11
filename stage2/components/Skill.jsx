import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Skill({ name }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#ebebebaa",
    borderRadius: 5,
  },
});
