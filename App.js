import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import StateGameScreen from "./screens/StateGameScreen";
const backgroundImage = require("./assets/images/background.jpg");

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [userNumber, setUserNumber] = useState();
  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.gradientLight, Colors.gradientDark]}
    >
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.45 }}
      >
        <SafeAreaView>
          {startGame ? (
            <GameScreen userNumber={userNumber} />
          ) : (
            <StateGameScreen
              onStartGame={setStartGame}
              setUserNumber={setUserNumber}
            />
          )}
        </SafeAreaView>
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
