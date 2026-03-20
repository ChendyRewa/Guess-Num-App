import { StyleSheet, Text, View, Pressable } from "react-native";

function PrimaryButton({ children }) {
  const onPressHandler = () => {
    console.log("Button Pressed");
  };
  return (
    <Pressable onPress={onPressHandler}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#720633",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
