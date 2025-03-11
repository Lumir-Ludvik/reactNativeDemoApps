import {Image, StyleSheet, Text, View} from "react-native";
import Colors from "@/constants/colors";

const GameOverScreen = () => {
    return (
        <View style={GameOverScreenStyles.rootContainer}>
            <Text style={{color: Colors.accent500, textAlign: 'center'}}>Game over</Text>
            <View style={GameOverScreenStyles.imageContainer}>
                <Image style={GameOverScreenStyles.image}
                       source={require('../assets/images/success.png')}/>
            </View>
            <Text>My highlighted <Text style={GameOverScreenStyles.highliht}>X</Text> and <Text>Y</Text></Text>
        </View>
    );
}

export default GameOverScreen

const GameOverScreenStyles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        margin: 36,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    highliht: {
        fontFamily: 'open-sense-bold',
        color: Colors.primary500
    }
})