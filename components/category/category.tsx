import {Pressable, Text, View} from "react-native";
import React from "react";
import {CategoryStyles} from "@/components/category/category.styles";
import {router} from "expo-router";

const navigateToCategory = (id: string) => {
    router.push({
        pathname: '/(recipes)/[id]',
        params: {id}
    })
}

type CategoryProps = {
    text: string;
    color: string;
    id: string;
}

const Category = ({text, color, id}: CategoryProps) => {
    return (
        <View style={[CategoryStyles.outerContainer]}>
            <Pressable style={[CategoryStyles.categoryContainer, {backgroundColor: color}]}
                       android_ripple={{color: '#cccccc'}} onPress={navigateToCategory.bind(this, id)}>
                {/*<Link href={{pathname: "/(recipes)/[id]", params: {id}}}>*/}
                <Text style={CategoryStyles.text}>{text}</Text>
                {/*</Link>*/}
            </Pressable>
        </View>
    )
}

export default React.memo(Category);