import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function EducationCard({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SimpleLineIcons name="graduation" size={24} color="black" />
      </View>
      <View style={styles.content}>
        <Text style={styles.degree}>{data.item.degree}</Text>
        <Text style={styles.school}>{data.item.school}</Text>

        <Text style={styles.year}>{data.item.year}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginHorizontal: "2%",
    borderRadius: 5,
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 10,
    gap: 15,
  },
  degree: {
    fontSize: 18,
    fontWeight: "bold",
  },
  school: {
    fontSize: 14,
    color: "#666",
  },
  year: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
});
