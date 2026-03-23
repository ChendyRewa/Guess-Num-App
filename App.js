import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import StateGameScreen from "./screens/StateGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.container}  colors={["#92e1ed", "#e663f4"]}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.45 }}
      >
        <StateGameScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
