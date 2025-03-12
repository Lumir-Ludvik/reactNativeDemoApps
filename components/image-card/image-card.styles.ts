import {StyleSheet} from "react-native";

export const ImageCardStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: 250,
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    textContainer: {
        paddingTop: 4,
        flex: 0.2
    },
    text: {
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
})