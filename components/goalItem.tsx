import {Pressable, StyleSheet, Text} from "react-native";
import {GoalType} from "@/types";

type GoalItemProps = {
    goal: GoalType
    onDelete: (id: string) => void
}

const GoalItem = ({goal, onDelete}: GoalItemProps) => {
    return (
        <Pressable style={({pressed}) => pressed && GoalItemStyles.iosPressedItem} android_ripple={{color: '#dddddd'}}
                   onPress={onDelete.bind(this, goal.id)}>
            <Text style={GoalItemStyles.goalText}>{goal.text}</Text>
        </Pressable>
    )
}

export default GoalItem

const GoalItemStyles = StyleSheet.create({
    goalText: {
        color: '#268f1b',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 3,
        textAlign: 'justify'
    },
    iosPressedItem: {
        opacity: 0.5
    }
})