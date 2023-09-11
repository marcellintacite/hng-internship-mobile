import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Edit from "./screens/Edit";
import { CvContext } from "./context/cvContext";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  const [data, setData] = React.useState({
    name: "Aksanti Bahiga",
    title: "Software Engineer",
    address: "Jl. Raya Cipadung No. 9, Bandung",
    phone: "+62 812 3456 7890",
    slack: "@tacite",
    email: "tacite.bahiga@gmail.com",
    github: "github.com/marcellintacite",
    personalInfo:
      "I am a software engineer with 5 years of experience in web development. I have a strong background in both frontend and backend development, and I am proficient in several programming languages and frameworks. I am a fast learner and a team player, and I am constantly learning new skills and technologies to improve my work.",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
      "Firebase",
      "HTML",
      "CSS",
      "Git",
      "React native",
    ],
    education: [
      {
        school: "Université Catholique de Bukavu",
        degree: "Bachelor of Computer Science",
        year: "2021 - current",
      },
      {
        school: "Ecole d'application ISP Bukavu",
        degree: "High School Diploma",
        year: "2015 - 2020",
      },
    ],
  });
  return (
    <CvContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {/* Hide status bar */}
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
      </NavigationContainer>
    </CvContext.Provider>
  );
}
