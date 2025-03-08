import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState, useTransition} from "react";
import GoalImage from '../assets/images/goal.png';


type GoalInputProps = {
    onPress: (goal: string | null) => void
    onCancel: () => void
    visible: boolean
}

const GoalInputModal = ({visible, onPress, onCancel}: GoalInputProps) => {
    const [goal, setGoal] = useState<string | null>(null);
    const [, startTransition] = useTransition();
    const goalInput = (text: string) => {
        console.log(text);
        setGoal(text);
    }


    return (
        <Modal visible={visible} animationType="slide">
            <View style={GoalInputStyles.inputContainer}>
                <Image style={GoalInputStyles.image} source={GoalImage}/>
                <TextInput style={GoalInputStyles.textInput} value={goal ?? ''} placeholder="type something..."
                           onChangeText={goalInput}/>
                <View style={GoalInputStyles.actions}>
                    <View style={GoalInputStyles.button}>
                        <Button title="add goal" color="#5e0acc" onPress={() => {
                            startTransition(() => {
                                onPress(goal);
                                setGoal(null);
                                onCancel();
                            })
                        }}/>
                    </View>
                    <View style={GoalInputStyles.button}>
                        <Button color="#f31282" title="cancel" onPress={onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInputModal


const GoalInputStyles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#311b6b',
        flex: 1,
        justifyContent: 'center',
        gap: 16,
        alignItems: "center",
    },
    textInput: {
        color: '#ffffff',
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 6
    },
    actions: {
        flexDirection: 'row',
        gap: 16
    },
    button: {
        width: '40%'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})