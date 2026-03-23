import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StateGameScreen from "./screens/StateGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StateGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
