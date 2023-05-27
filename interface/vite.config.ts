import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import sveltePreprocess from "svelte-preprocess"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
		}),
	],
	server: {
		port: 3000,
	},
	build: {
		outDir: "../dist",
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./"),
		},
	},
})
