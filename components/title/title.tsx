import {Text} from 'react-native';
import {TitleStyles} from "@/components/title/title.styles";
import {PropsWithChildren} from "react";


const Title = ({children}: PropsWithChildren) => {
    return (
        <Text style={TitleStyles.title}>{children}</Text>
    )
}

export default Title