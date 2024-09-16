import { createContext, useContext } from "react";
import { Text, TextProps } from "react-native";

import { RectButton, BaseButtonProps } from "react-native-gesture-handler";

import { globalStyles } from "@/global/globalStyles";
import { styles } from "./styles";

type ButtonProps = BaseButtonProps &
	Variant & {
		isLoading?: boolean;
	};

const ThemeContext = createContext<Variant>({});

function Button({ variant, isLoading, children, ...rest }: ButtonProps) {
	const buttonStyles = [styles.button, variant === "secondary" && globalStyles.bgZinc800];

	return (
		<RectButton style={buttonStyles} {...rest} enabled={!isLoading}>
			<ThemeContext.Provider value={{ variant }}>{children}</ThemeContext.Provider>
		</RectButton>
	);
}

function Title({ children }: TextProps) {
	const { variant } = useContext(ThemeContext);

	return <Text>{children}</Text>;
}

Button.Title = Title;

export { Button };
