import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import CustomInput from "./CustomInput";
import { CvContext } from "../context/cvContext";

export default function AddSkill() {
  const { data, setData } = useContext(CvContext);
  const [newskill, setSkill] = useState("");
  //   const addSkill = (skill) => {
  //     const newSkills = [...data.skills, skill];
  //     setData({ ...data, skills: newSkills });
  //   };
  const handlePress = () => {
    const nSkillArray = [newskill, ...data.skills];
    setData({ ...data, skills: nSkillArray });
    setSkill("");
  };
  return (
    <View>
      <CustomInput
        icon={"edit"}
        placeholder={"New skill"}
        handleChange={setSkill}
        value={newskill}
      />
      <Button title="Add" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({});
