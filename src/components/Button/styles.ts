import { StyleSheet } from "react-native";

import { colors } from "@/global/colors";

// Property 'className' does not exist on RectButtonProps

export const styles = StyleSheet.create({
	button: {
		height: 44,
		width: "100%",
		backgroundColor: colors.lime[300],
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		gap: 8,
	},
});
