import {StyleSheet} from "react-native";

export const CategoryStyles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
        margin: 16,
    },
    categoryContainer: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    text: {
        color: '#ffffff'
    }
})