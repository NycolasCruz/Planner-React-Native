import { Image, Text, View } from "react-native";

import { MapPin, Calendar as CalendarIcon } from "lucide-react-native";

import { Separator } from "@/components/Separator";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import logo from "@/assets/logo.png";
import { colors } from "@/global/styles/colors";

export default function App() {
	return (
		<View className="flex-1 items-center justify-center px-5">
			<Image source={logo} className="h-8" resizeMode="contain" />

			<Text className="text-zinc-400 font-regular text-center text-lg mt-3">
				Convide seus amigos e planeje sua{"\n"}próxima viagem
			</Text>

			<View className="w-full bg-zinc-900 rounded-xl border border-zinc-800 p-4 my-8">
				<Input>
					<MapPin color={colors.zinc[400]} size={20} />
					<Input.Field placeholder="Para onde?" />
				</Input>
				<Input>
					<CalendarIcon color={colors.zinc[400]} size={20} />
					<Input.Field placeholder="Para onde?" />
				</Input>

				<Separator>
					<Button>
						<Button.Title>Buscar</Button.Title>
					</Button>
				</Separator>
			</View>
		</View>
	);
}
