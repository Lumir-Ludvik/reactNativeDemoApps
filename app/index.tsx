import StartGameScreen from "@/screens/startGameScreen";
import {ImageBackground, SafeAreaView, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "@/screens/gameScreen";
import GameOverScreen from "@/screens/gameOverScreen";

const backgroundImage = require('../assets/images/background.png');

export default function Index() {
    const [userNumber, setUserNumber] = useState<number | null>(null);
    const [gameIsOver, setGameIsOver] = useState(false);

    const startGame = (number: number) => {
        setUserNumber(number);
    }

    const showGameOver = () => {
        setGameIsOver(true);
    }


    return (
        <>
            <LinearGradient colors={['#4e0329', '#ddb52f']} style={IndexStyles.container}>
                <ImageBackground source={backgroundImage} imageStyle={IndexStyles.image} style={IndexStyles.container}
                                 resizeMode="cover">
                    <SafeAreaView style={IndexStyles.container}>
                        {gameIsOver && <GameOverScreen/>}
                        {!userNumber && !gameIsOver && <StartGameScreen userNumber={userNumber} onConfirm={startGame}/>}
                        {userNumber && !gameIsOver && <GameScreen userNumber={userNumber} showGameOver={showGameOver}/>}
                    </SafeAreaView>

                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const IndexStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        opacity: 0.1
    }
})