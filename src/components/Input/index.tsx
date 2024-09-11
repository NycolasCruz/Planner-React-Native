import { ReactNode } from "react";
import { TextInput, View } from "react-native";
import classNames from "clsx";

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

function Field() {
	return <TextInput />;
}

Input.Field = Field;

export { Input };
