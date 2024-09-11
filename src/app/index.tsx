import { Image, Text, View } from "react-native";

import { Input } from "@/components/Input";

import logo from "@/assets/logo.png";

export default function App() {
	return (
		<View className="flex-1 items-center justify-center">
			<Image source={logo} className="h-8" resizeMode="contain" />

			<Text className="text-zinc-400 font-regular text-center text-lg mt-3">
				Convide seus amigos e planeje sua{"\n"}próxima viagem
			</Text>

			<View>
				<Input>
					<Input.Field />
				</Input>
			</View>
		</View>
	);
}
