import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useContext } from "react";
import { CvContext } from "../context/cvContext";
import { Feather } from "@expo/vector-icons";
import IconTitle from "../components/Icon";
import Skill from "../components/Skill";
import EducationCard from "../components/EducationCard";

export default function Home({ navigation }) {
  const { data } = useContext(CvContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Feather name="user" size={34} color="#fff" />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>{data.name}</Text>
          <Text style={styles.headertext}>{data.title}</Text>
          <View style={styles.headerSocial}>
            <IconTitle name={data.github} icon="github" />
            <IconTitle name={data.email} icon="mail" />
            <IconTitle name={data.slack} icon="slack" />
          </View>
        </View>
      </View>
      <View style={styles.about}>
        <Text style={styles.aboutText}>About</Text>
        <Text style={styles.aboutTextDetail}>{data.personalInfo}</Text>
      </View>
      <View style={styles.skills}>
        <Text style={styles.aboutText}>Skills</Text>
        <View style={styles.skillsContent}>
          {data.skills.map((skill) => (
            <Skill key={skill.id} name={skill} />
          ))}
        </View>
      </View>

      <View style={styles.education}>
        <Text style={styles.aboutText}>Education</Text>
        <FlatList
          data={data.education}
          renderItem={(item) => <EducationCard data={item} />}
          style={styles.educationContent}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Edit")}
        style={styles.edit}
      >
        <Feather name="edit" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  header: {
    width: "95%",
    marginHorizontal: "2%",
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "#f9f9f9",
    height: 140,
    flexDirection: "row",
    alignItems: "center",
  },
  headerContent: {
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginHorizontal: 20,
  },
  headerTitle: {
    flexDirection: "column",
  },
  headerTitleText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  headerSocial: {
    marginTop: 5,
    gap: 3,
  },

  about: {
    width: "95%",
    marginHorizontal: "2%",
    marginTop: 20,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
  },
  aboutText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  aboutTextDetail: {
    fontSize: 14,
    color: "#4b4b4b",
  },
  skills: {
    width: "95%",
    marginHorizontal: "2%",
    marginTop: 20,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
    paddingBottom: 20,
  },
  skillsContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },

  education: {
    width: "95%",
    marginHorizontal: "2%",
    marginTop: 20,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
  },
  educationContent: {
    paddingBottom: 20,
    marginBottom: 20,
  },
  edit: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#2978b5",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
