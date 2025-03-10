import {Alert, PixelRatio, StyleSheet, Text, TextInput, View} from "react-native";
import Button from "@/components/button/button";
import {useEffect, useState} from "react";
import Colors from "@/constants/colors";
import Title from "@/components/title/title";

type StartGameScreenProps = {
    onConfirm: (number: number) => void
    userNumber: number | null
}


const StartGameScreen = ({userNumber, onConfirm}: StartGameScreenProps) => {
    const [number, setNumber] = useState<string>('');

    useEffect(() => {
        setNumber(userNumber?.toString() ?? '');
    }, [])

    const validateNumber = () => {

        if (number && (+number <= 0 || +number > 99)) {
            Alert.alert('you little shit!');
            setNumber('');
            return;
        }

        onConfirm(+number);
    }

    return (
        <View style={StartGameScreenStyles.rootContainer}>
            <View style={StartGameScreenStyles.title}>
                <Title>Guess my number</Title>
            </View>
            <View style={StartGameScreenStyles.container}>
                <Text style={StartGameScreenStyles.numberText}>Enter a number</Text>
                <TextInput keyboardType="number-pad" autoCapitalize="none" maxLength={2}
                           style={StartGameScreenStyles.numberInput} value={number?.toString() ?? ''}
                           onChangeText={(text) => {
                               setNumber(text)
                           }}/>
                <View style={StartGameScreenStyles.actions}>
                    <Button style={StartGameScreenStyles.action}
                            onPress={() => setNumber('')}><Text>Reset</Text></Button>
                    <Button style={StartGameScreenStyles.action} onPress={validateNumber}><Text>Confirm</Text></Button>
                </View>
            </View></View>
    );
}

export default StartGameScreen


const StartGameScreenStyles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
    },
    title: {
        alignSelf: 'center'
    },
    numberText: {
        textAlign: 'center',
        color: Colors.accent500,
        fontSize: 26
    },
    container: {
        borderRadius: 8,
        marginHorizontal: PixelRatio.roundToNearestPixel(24),
        marginTop: PixelRatio.roundToNearestPixel(100),
        padding: PixelRatio.roundToNearestPixel(16),
        backgroundColor: Colors.primary800,
        gap: 8,
        // android:
        elevation: 4,
        // ios:
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        alignItems: 'stretch',
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold'
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