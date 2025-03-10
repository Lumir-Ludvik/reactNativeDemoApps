import {ButtonProps as NativeButtonProps, Pressable, StyleProp, Text, View, ViewStyle} from "react-native";
import {ButtonStyles} from "@/components/button/button.styles";
import Colors from "@/constants/colors";
import {PropsWithChildren} from "react";

type ButtonProps = Omit<NativeButtonProps, 'title'> & PropsWithChildren & {
    style?: StyleProp<ViewStyle>
}

const Button = ({children, style, ...rest}: ButtonProps) => {
    return (
        <View style={[ButtonStyles.outerContainer, style]}>
            <Pressable android_ripple={{color: Colors.primary600}}
                       style={({pressed}) =>
                           pressed ? [ButtonStyles.container, ButtonStyles.iosRipple] : ButtonStyles.container}
                       {...rest}>
                <Text style={ButtonStyles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default Button;