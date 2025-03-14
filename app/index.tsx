import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {GlobalStyles} from "@/constants/styles";
import IconButton from "@/components/UI/IconButton";
import RecentExpenses from "@/screens/RecentExpenses";
import AllExpenses from "@/screens/AllExpenses";
import ExpensesContextProvider from "@/store/expenses-context";
import ManageExpense from "@/screens/ManageExpense";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();



export default function Index() {
    return (
        <>

        </>
    );
}
