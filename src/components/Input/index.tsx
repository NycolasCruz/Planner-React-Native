import { Platform, TextInput, TextInputProps, View, ViewProps } from "react-native";
import classNames from "clsx";

import { colors } from "@/global/colors";

type InputProps = ViewProps & Variant;

function Input({ children, variant }: InputProps) {
	return (
		<View
			className={classNames(
				"flex-row items-center w-full h-16 gap-2",
				variant && "h-14 px-4 rounded-lg border border-zinc-800",
				variant === "primary" && "bg-zinc-950",
				variant === "secondary" && "bg-zinc-900"
			)}
		>
			{children}
		</View>
	);
}

function Field({ ...rest }: TextInputProps) {
	return (
		<TextInput
			className="flex-1 text-zinc-100 text-lg"
			placeholderTextColor={colors.zinc[400]}
			cursorColor={colors.zinc[100]}
			selectionColor={Platform.OS === "ios" ? colors.zinc[100] : undefined}
			{...rest}
		/>
	);
}

Input.Field = Field;

export { Input };
