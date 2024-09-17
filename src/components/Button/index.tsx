import { createContext, useContext } from "react";
import { ActivityIndicator, Text, TextProps } from "react-native";
import classNames from "clsx";

import { RectButton, BaseButtonProps } from "react-native-gesture-handler";

import { globalStyles } from "@/global/globalStyles";
import { colors } from "@/global/colors";
import { styles } from "./styles";

type ButtonProps = BaseButtonProps &
	Variant & {
		isLoading?: boolean;
	};

const ThemeContext = createContext<Variant>({} as Variant);

function Button({ variant, isLoading, children, ...rest }: ButtonProps) {
	const buttonStyles = [styles.button, variant === "secondary" && globalStyles.bgZinc800];

	return (
		<RectButton style={buttonStyles} enabled={!isLoading} {...rest}>
			<ThemeContext.Provider value={{ variant }}>
				{isLoading ? <ActivityIndicator color={colors.lime[950]} /> : children}
			</ThemeContext.Provider>
		</RectButton>
	);
}

function Title({ children }: TextProps) {
	const { variant } = useContext(ThemeContext);

	return (
		<Text
			className={classNames(
				"text-base font-semibold text-lime-950",
				variant === "secondary" && "text-zinc-200"
			)}
		>
			{children}
		</Text>
	);
}

Button.Title = Title;

export { Button };
