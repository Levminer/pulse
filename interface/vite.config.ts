import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import sveltePreprocess from "svelte-preprocess"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
		}),
		tsconfigPaths(),
	],
	server: {
		port: 3000,
	},
	build: {
		outDir: "../dist",
	},
})
