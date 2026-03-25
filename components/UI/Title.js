import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 16,
    color: Colors.accent,
    borderColor: Colors.accent,
    borderWidth: 2,
    padding: 8,
  },
});

export default Title;
