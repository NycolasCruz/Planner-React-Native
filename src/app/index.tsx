import { useState } from "react";
import { Image, Text, View } from "react-native";

import { MapPin, Calendar, Settings2, UserRoundPlus, ArrowRight } from "lucide-react-native";

import { StepForm } from "@/enums/StepForm";

import { Separator } from "@/components/Separator";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import background from "@/assets/background.png";
import logo from "@/assets/logo.png";
import { colors } from "@/global/colors";

export default function App() {
	const [stepForm, setStepForm] = useState(StepForm.tripDetails);

	const isTripDetails = stepForm === StepForm.tripDetails;

	return (
		<View className="flex-1 items-center justify-center px-5">
			<Image source={logo} className="h-8" resizeMode="contain" />

			<Image source={background} className="absolute" />

			<Text className="text-zinc-400 text-center text-lg mt-3">
				Convide seus amigos e planeje sua{"\n"}próxima viagem
			</Text>

			<View className="w-full bg-zinc-900 rounded-xl border border-zinc-800 p-4 my-8">
				<Input>
					<MapPin color={colors.zinc[400]} size={20} />
					<Input.Field placeholder="Para onde?" editable={isTripDetails} />
				</Input>

				<Input>
					<Calendar color={colors.zinc[400]} size={20} />
					<Input.Field placeholder="Quando?" editable={isTripDetails} />
				</Input>

				{stepForm === StepForm.addEmail && (
					<>
						<Separator>
							<Button variant="secondary" onPress={() => setStepForm(StepForm.tripDetails)}>
								<Button.Title>Alterar local / data</Button.Title>
								<Settings2 color={colors.zinc[200]} size={20} />
							</Button>
						</Separator>

						<Input>
							<UserRoundPlus color={colors.zinc[400]} size={20} />
							<Input.Field placeholder="Quem estará na viagem?" />
						</Input>
					</>
				)}

				<Button onPress={() => setStepForm(StepForm.addEmail)}>
					<Button.Title>{isTripDetails ? "Continuar" : "Confirmar Viagem"}</Button.Title>
					<ArrowRight color={colors.lime[950]} size={20} />
				</Button>
			</View>

			<Text className="text-zinc-500 text-center text-base">
				Ao planejar sua viagem pela plann.er, você automaticamente concorda com nossos{" "}
				<Text className="text-zinc-300 underline">termos de uso e políticas de privacidade</Text>
			</Text>
		</View>
	);
}
