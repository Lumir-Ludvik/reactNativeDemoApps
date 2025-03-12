import RecipesScreen from "@/screens/recipes/recipes.screen";
import {useLocalSearchParams} from "expo-router";
import {View} from "react-native";

const Recipes = () => {
    const {id} = useLocalSearchParams<{ id: string }>();

    return (<View style={{flex: 1}}>
        <RecipesScreen id={id}/>
    </View>)
}

export default Recipes;