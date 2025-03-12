import {StyleSheet, Text} from 'react-native';
import {PropsWithChildren} from "react";

function Title({children}: PropsWithChildren) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 15,
        maxWidth: '80%'
    },
});
