import {SafeAreaView} from "react-native";
import {StatusBar} from "expo-status-bar";
import CategoriesScreen from "@/screens/categories/Categories.screen";

export default function Index() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style="dark"/>
            <CategoriesScreen/>
        </SafeAreaView>
    );
}
