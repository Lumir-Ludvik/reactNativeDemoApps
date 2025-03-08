import {Button, FlatList, StyleSheet, View} from "react-native";
import {useCallback, useState} from "react";
import GoalItem from "@/components/goalItem";
import {GoalType} from "@/types";
import GoalInputModal from "@/components/goalInputModal";
import {StatusBar} from "expo-status-bar";


export default function Index() {
    const [goals, setGoals] = useState<GoalType[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const addGoalPressed = useCallback((goal: string | null) => {
        console.log("ufo pressed", goal);
        if (!goal) {
            return;
        }

        setGoals((prev) => [...prev, {text: goal, id: Math.random().toString()}]);
    }, []);

    const deleteItem = useCallback((id: string) => {
        setGoals((prev) => prev.filter((goal) => goal.id != id))
    }, [])

    const changeModalState = (state: boolean) => setIsModalVisible(state);

    return (
        <>
            <StatusBar style="auto"/>
            <View style={styles.container}>
                <Button title="Add new goal" onPress={changeModalState.bind(null, true)}/>

                <GoalInputModal onCancel={changeModalState.bind(null, false)} onPress={addGoalPressed}
                                visible={isModalVisible}/>
                <View style={styles.list}>
                    <FlatList keyExtractor={(item) => item.id} data={goals} renderItem={(goal) => (
                        <GoalItem onDelete={deleteItem} goal={goal.item}/>
                    )}/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e0955',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        gap: 24
    },

    list: {
        flex: 5,
        paddingHorizontal: 24,
        backgroundColor: '#2d0e77',
        borderRadius: 8,
        paddingTop: 8,
        gap: 8,

    },

})