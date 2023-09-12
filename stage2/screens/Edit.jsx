import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import CustomInput from "../components/CustomInput";
import { CvContext } from "../context/cvContext";

import SkillEdit from "../components/SkillEdit";
import AddSkill from "../components/AddSkill";

export default function Edit({ navigation }) {
  const { data, setData } = useContext(CvContext);
  const [textContent, setTextContent] = useState({
    name: data.name,
    title: data.title,
    github: data.github,
    email: data.email,
    slack: data.slack,
    personalInfo: data.personalInfo,
  });

  const handleChage = (text) => {
    setTextContent(text);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Edit</Text>
      <Text style={styles.headtxt}>Header</Text>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <CustomInput
            placeholder="Name"
            value={data.name}
            handleChange={(text) => setData({ ...data, name: text })}
          />
          <CustomInput
            placeholder="Title"
            value={data.title}
            handleChange={(text) => setData({ ...data, title: text })}
          />
        </View>
        <View style={styles.headerContent}>
          <CustomInput
            placeholder="Github"
            value={data.github}
            handleChange={(text) => setData({ ...data, github: text })}
          />
          <CustomInput
            placeholder="Email"
            value={data.email}
            handleChange={(text) => setData({ ...data, email: text })}
          />
          <CustomInput
            placeholder="Slack"
            value={data.slack}
            handleChange={(text) => setData({ ...data, slack: text })}
          />
        </View>
      </View>
      <View style={styles.about}>
        <Text style={styles.headtxt}>About</Text>
        <CustomInput
          placeholder="About"
          style={styles.aboutInput}
          value={data.personalInfo}
          handleChange={(text) => setData({ ...data, personalInfo: text })}
        />
      </View>
      <View style={styles.about}>
        <Text style={styles.headtxt}>Skils</Text>
        <FlatList
          data={data.skills}
          renderItem={({ item, index }) => (
            <SkillEdit key={index} name={item} />
          )}
          style={styles.skillItem}
          keyExtractor={({ item }) => item}
          horizontal
        />
        <AddSkill />
      </View>
      <View style={styles.btn}></View>
      <Button
        title="Save"
        onPress={() => navigation.navigate("Home")}
        color={"#333"}
      />
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
  aboutInput: {
    height: 100,
  },
  skillItem: {
    paddingVertical: 5,
    marginTop: 5,
  },
  btn: {
    marginTop: 20,
  },
});
