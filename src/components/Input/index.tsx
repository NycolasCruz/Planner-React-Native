import { ReactNode } from "react";
import { Platform, TextInput, TextInputProps, View } from "react-native";
import classNames from "clsx";

import { colors } from "@/global/styles/colors";

type InputProps = Variant & {
	children: ReactNode;
};

function Input({ children, variant }: InputProps) {
	return (
		<View
			className={classNames(
				"flex-row items-center w-full h-16 gap-2",
				variant && "h-14 px-4 rounded-lg border border-zinc-800",
				variant === "secondary" && "bg-zinc-950",
				variant === "tertiary" && "bg-zinc-900"
			)}
		>
			{children}
		</View>
	);
}

function Field({ ...rest }: TextInputProps) {
	return (
		<TextInput
			className="flex-1 text-zinc-100 text-lg font-regular"
			placeholderTextColor={colors.zinc[400]}
			cursorColor={colors.zinc[100]}
			selectionColor={Platform.OS === "ios" ? colors.zinc[100] : undefined}
			{...rest}
		/>
	);
}

Input.Field = Field;

export { Input };
