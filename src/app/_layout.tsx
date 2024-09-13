import { View } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

import { Loading } from "@/components/Loading";

import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import "@/global/styles/global.css";

export default function Layout() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
	});

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<View className="flex-1 bg-zinc-950">
			{/* <StatusBar backgroundColor="transparent" barStyle="light-content" translucent /> */}

			<GestureHandlerRootView>
				<Slot />
			</GestureHandlerRootView>
		</View>
	);
}
