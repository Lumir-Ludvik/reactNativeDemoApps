import {StyleSheet} from "react-native";
import Colors from "@/constants/colors";

export const ButtonStyles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        overflow: 'hidden',
    },
    container: {
        backgroundColor: Colors.primary500,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    iosRipple: {
        opacity: 0.75
    }
})