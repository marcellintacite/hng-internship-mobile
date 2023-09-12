import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomInput = ({
  placeholder,
  icon,
  style,
  numberOfLines,
  handleChange,
  value,
  ...restProps
}) => {
  return (
    <View style={styles.container}>
      {icon && <FontAwesome5 name={icon} style={styles.icon} />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        multiline={true}
        numberOfLines={4}
        style={{ ...styles.input, ...style }}
        onChangeText={(text) => handleChange(text)}
        {...restProps}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc", // Customize the border color
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
    color: "#333", // Customize the icon color
  },
  input: {
    flex: 1,
    height: 40,
    color: "#333", // Customize the text color
  },
});

export default CustomInput;
