import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StateGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} maxLength={2} inputMode="numeric" />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StateGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#3f031cff",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 16,
    shadowColor: "green",
    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  input: {
    color: "yellow",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#720633",
    width: "100%",
    height: 50,
    borderRadius: 8,
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
});
