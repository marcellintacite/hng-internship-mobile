import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function IconTitle({ name, icon }) {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={16} color="#4b4b4b" />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    gap: 10,
  },
  text: {
    fontSize: 12,
    color: "#4b4b4b",
  },
});
