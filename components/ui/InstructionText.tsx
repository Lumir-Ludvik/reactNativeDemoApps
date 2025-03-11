import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

import Colors from '../../constants/colors';
import {PropsWithChildren} from "react";

function InstructionText({children, style}: PropsWithChildren & { style?: StyleProp<TextStyle> }) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
});
