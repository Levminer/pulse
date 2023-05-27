/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./interface/**/*.html", "./interface/**/*.svelte"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
}
