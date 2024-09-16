import { Text, TextProps } from "react-native";

import { RectButton, BaseButtonProps } from "react-native-gesture-handler";

import { globalStyles } from "@/global/globalStyles";
import { styles } from "./styles";

type ButtonProps = BaseButtonProps &
	Variant & {
		isLoading?: boolean;
	};

function Button({ variant, isLoading, children, ...rest }: ButtonProps) {
	const buttonStyles = [styles.button, variant === "secondary" && globalStyles.bgZinc800];

	return (
		<RectButton style={buttonStyles} {...rest} enabled={!isLoading}>
			{children}
		</RectButton>
	);
}

function Title({ children }: TextProps) {
	return <Text>{children}</Text>;
}

Button.Title = Title;

export { Button };
