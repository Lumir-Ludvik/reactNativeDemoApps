import {Stack} from "expo-router";
import {Text} from 'react-native';

type HeaderTitleProps = {
    title: string
}

const HeaderTitle = ({title}: HeaderTitleProps) => {
    return <Text style={{color: '#ffffff', fontSize: 26, textAlign: 'center'}}>{title}</Text>
}

export default function RootLayout() {
    return <Stack
        screenOptions={{
            headerTitle: () => (
                <HeaderTitle title="Zchujena appka"/>
            ),
            headerStyle: {backgroundColor: '#572c1a'},
            headerBackVisible: true
        }}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="(recipes)/[id]" options={{
            headerTitle: () => (
                <HeaderTitle title="Zchujeny recept"/>
            ),
        }}/>
    </Stack>;
}
