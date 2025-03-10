import {Text, View} from "react-native";
import {PropsWithChildren} from "react";
import {GuessTextStyles} from "@/components/guessText/guessText.styles";

const GuessText = ({children}: PropsWithChildren) => {
    return (
        <View style={GuessTextStyles.container}><Text style={GuessTextStyles.numberText}>{children}</Text></View>
    )
}

export default GuessText;