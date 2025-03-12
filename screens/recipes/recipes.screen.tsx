import {FlatList, View} from "react-native";
import {useMemo} from "react";
import {MEALS} from "@/data/dummy_data";
import Meal from "@/models/meal";
import ImageCard from "@/components/image-card/image-card";
import {RecipesScreenStyles} from "@/screens/recipes/recipes.screen.styles";

type RecipesScreenProps = {
    id: string;
}

const RecipesScreen = ({id}: RecipesScreenProps) => {
    debugger

    const getMeals = useMemo((): Meal[] => {
            return MEALS.filter((meal) => meal.categoryIds.includes(id));
        }
        , [id]);

    return (
        <FlatList style={{flex: 1, backgroundColor: '#513226'}} data={getMeals} keyExtractor={(mealItem) => mealItem.id}
                  renderItem={(mealItem) => (
                      <View style={RecipesScreenStyles.container}>

                          <ImageCard imageUrl={mealItem.item.imageUrl} title={mealItem.item.title}
                                     description={`${mealItem.item.duration}  ${mealItem.item.complexity}  ${mealItem.item.affordability}`}/>

                      </View>)}/>

    )
}

export default RecipesScreen;