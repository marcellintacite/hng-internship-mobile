import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { CvContext } from "../context/cvContext";

export default function SkillEdit({ name }) {
  const { data, setData } = useContext(CvContext);

  const handleRemove = (name) => {
    const newSkills = data.skills.filter((i) => i != name);
    setData({ ...data, skills: newSkills });
  };
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TouchableOpacity onPress={() => handleRemove(name)}>
        <FontAwesome name="times" size={16} color={"#ff6b80"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ebebebaa",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 5,
    gap: 7,
  },
});
