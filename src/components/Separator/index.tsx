import { View, ViewProps } from "react-native";

export function Separator({ children }: ViewProps) {
	return <View className="w-full border-b border-zinc-800 py-3">{children}</View>;
}
