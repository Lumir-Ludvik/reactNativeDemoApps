import {Image, Text, View} from "react-native";
import {ImageCardStyles} from "@/components/image-card/image-card.styles";
import React from "react";

type ImageCardProps = {
    imageUrl: string,
    title: string;
    description: string;
}

const ImageCard = ({imageUrl, description, title}: ImageCardProps) => {
    return (
        <View style={ImageCardStyles.container}>
            <View style={{flex: 0.8}}>
                <Image style={ImageCardStyles.image} source={{uri: imageUrl}}/>
            </View>
            <View style={ImageCardStyles.textContainer}>
                <Text style={[ImageCardStyles.text, {fontSize: 16, fontWeight: 'bold'}]}>{title}</Text>
                <Text style={ImageCardStyles.text}>{description}</Text>
            </View>
        </View>
    )
}

export default React.memo(ImageCard);