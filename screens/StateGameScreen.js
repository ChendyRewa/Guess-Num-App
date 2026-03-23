import { StyleSheet, TextInput, View,Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";

function StateGameScreen() {
  const [userInput, setUserInput] = useState("");

 function inputHandler(enteredText) {
  setUserInput(enteredText);
 }

 function resetInputHandler() {  setUserInput("");
 }  
 function confirmInputHandler() {
  const chosenNumber = parseInt(userInput);
  if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
    // Show an alert or error message
    Alert.alert("Invalid number!", "Please enter a number between 1 and 99.", [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]);
    return;
  }
  // Proceed with the valid chosen number
 }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" value={userInput} onChangeText={inputHandler} />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
    flex: 1,
  },
  buttonsView: {
    flex: 1,
  },
});
