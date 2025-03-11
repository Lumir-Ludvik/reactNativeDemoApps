import StartGameScreen from "@/screens/startGameScreen";
import {ImageBackground, SafeAreaView, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "@/screens/gameScreen";
import GameOverScreen from "@/screens/gameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

const backgroundImage = require('../assets/images/background.png');

export default function Index() {
    const [userNumber, setUserNumber] = useState<number | null>(null);
    const [gameIsOver, setGameIsOver] = useState(false);

    const [isLoaded] = useFonts({
        'open-sense': require('../assets/fonts/OpenSans-Regular.ttf'),
        'open-sense-bold': require('../assets/fonts/OpenSans-Bold.ttf')
    });

    const startGame = (number: number) => {
        setUserNumber(number);
    }

    const showGameOver = () => {
        setGameIsOver(true);
    }


    return (
        <>
            {!isLoaded && <AppLoading/>}
            {isLoaded && <LinearGradient colors={['#4e0329', '#ddb52f']} style={IndexStyles.container}>
                <ImageBackground source={backgroundImage} imageStyle={IndexStyles.image} style={IndexStyles.container}
                                 resizeMode="cover">
                    <SafeAreaView style={IndexStyles.container}>
                        {gameIsOver && <GameOverScreen/>}
                        {!userNumber && !gameIsOver && <StartGameScreen userNumber={userNumber} onConfirm={startGame}/>}
                        {userNumber && !gameIsOver && <GameScreen userNumber={userNumber} showGameOver={showGameOver}/>}
                    </SafeAreaView>

                </ImageBackground>
            </LinearGradient>}
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