import { View } from "react-native";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import "@/global/global.css";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
	const [appIsReady, setAppIsReady] = useState(false);

	async function prepare() {
		try {
			await Font.loadAsync({
				Inter_400Regular,
				Inter_500Medium,
				Inter_600SemiBold,
			});
		} catch (error) {
			console.log(error);
		} finally {
			setAppIsReady(true);
		}
	}

	useEffect(() => {
		prepare();
	}, []);

	useEffect(() => {
		if (appIsReady) {
			SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	return (
		<View className="flex-1 bg-zinc-950">
			<StatusBar backgroundColor="transparent" style="auto" translucent />
			<GestureHandlerRootView>
				<Slot />
				<Toast />
			</GestureHandlerRootView>
		</View>
	);
}
