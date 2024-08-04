import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			"@typescript-eslint/no-unused-vars": "warn",
			"react/react-in-jsx-scope": "off",
		},
	},
	{
		// Override configuration for files in the @types directory
		files: ["**/@types/**/*"],
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
		},
	},
];
