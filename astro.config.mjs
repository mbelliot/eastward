// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

export default defineConfig({
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Jost",
			cssVariable: "--font-jost",
			weights: [300, 400, 500],
			styles: ["normal", "italic"],
		},
		{
			provider: fontProviders.google(),
			name: "Tenor Sans",
			cssVariable: "--font-tenor",
			weights: [300, 400],
			styles: ["normal"],
		},
	],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"~": "/src",
				"@": "/src/components",
			},
		},
	},
})
