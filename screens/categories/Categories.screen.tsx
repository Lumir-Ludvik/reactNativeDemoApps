import {FlatList, View} from "react-native";
import Category from "@/components/category/category";
import {CATEGORIES} from "@/data/dummy_data";
import {CategoriesScreenStyles} from "@/screens/categories/categories.screen.styles";

const CategoriesScreen = () => {
    return (
        <View style={CategoriesScreenStyles.container}>
            <FlatList numColumns={2} data={CATEGORIES} keyExtractor={(item) => item.id}
                      renderItem={(categoryItem) => (

                          <Category id={categoryItem.item.id} text={categoryItem.item.title}
                                    color={categoryItem.item.color}/>


                      )}
            /></View>
    )
}

export default CategoriesScreen;