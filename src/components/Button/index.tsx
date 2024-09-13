import { Text, TextProps } from "react-native";

import { RectButton, BaseButtonProps } from "react-native-gesture-handler";

type ButtonProps = BaseButtonProps & {};

function Button({ children }: ButtonProps) {
	return <RectButton>{children}</RectButton>;
}

function Title({ children }: TextProps) {
	return <Text>{children}</Text>;
}

Button.Title = Title;

export { Button };
