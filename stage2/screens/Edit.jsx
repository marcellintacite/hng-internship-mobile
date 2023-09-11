import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../components/CustomInput";

export default function Edit() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Edit</Text>
      <Text style={styles.headtxt}>Header</Text>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <CustomInput placeholder="Name" />
          <CustomInput placeholder="Title" />
        </View>
        <View style={styles.headerContent}>
          <CustomInput placeholder="Github" />
          <CustomInput placeholder="Email" />
          <CustomInput placeholder="Slack" />
        </View>
      </View>
      <View style={styles.about}>
        <Text style={styles.headtxt}>About</Text>
        <CustomInput placeholder="About" numberOfLines={20} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    borderRadius: 5,
    marginTop: 5,
    flexDirection: "row",
    gap: 10,
  },
  headerContent: {
    flex: 1,
  },
  headtxt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  about: {
    marginTop: 20,
  },
});
