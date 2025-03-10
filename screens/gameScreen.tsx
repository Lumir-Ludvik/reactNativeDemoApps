import {Alert, StyleSheet, View} from 'react-native';
import Button from "@/components/button/button";
import Title from "@/components/title/title";
import {useEffect, useState} from "react";
import GuessText from "@/components/guessText/guessText";
import {Ionicons} from '@expo/vector-icons'

const generateRandomBetween = (min: number, max: number, exclude: number) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


type GameScreenProps = {
    userNumber: number;
    showGameOver: () => void;
}

let min = 1;
let max = 100;

const GameScreen = ({userNumber, showGameOver}: GameScreenProps) => {
    const [guess, setGuess] = useState<number>(generateRandomBetween(1, 100, userNumber))


    useEffect(() => {
        if (guess === userNumber) {
            showGameOver();
        }
    }, [guess])

    const handleNextGuess = (direction: 'lower' | 'greater') => {
        if ((direction === 'lower' && guess < userNumber) || (direction === 'greater' && guess > userNumber)) {
            Alert.alert('you little shit!');
            return;
        }

        if (direction === 'lower') {
            max = guess;
        } else {
            min = guess + 1;
        }

        setGuess(generateRandomBetween(min, max, guess))
    }

    return (
        <View style={GameScreenStyles.container}>
            <Title>Opponent's Guess</Title>
            <GuessText>{guess}</GuessText>
            <View style={GameScreenStyles.actions}>
                <Button style={GameScreenStyles.action}
                        onPress={handleNextGuess.bind(this, 'greater')}><Ionicons name="add"/> </Button>
                <Button style={GameScreenStyles.action} onPress={handleNextGuess.bind(this, 'lower')}><Ionicons
                    name="remove"/></Button>
            </View>
        </View>
    )
}

export default GameScreen;

const GameScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        gap: 16
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8
    },
    action: {
        flex: 1
    }
})