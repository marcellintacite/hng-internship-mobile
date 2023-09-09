import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  const openGithub = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://ca.slack-edge.com/T05FFAA91JP-U05RA4ZEGS2-98d82ebe054b-512",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.text}>Slack username</Text>
        <Text style={styles.name}>Aksanti BAhiga</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={openGithub}>
        <Text style={styles.btnText}>Open GitHub</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#352F44",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  content: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    width: 200,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    color: "#352F44",
    fontSize: 16,
    fontWeight: "700",
  },
});
