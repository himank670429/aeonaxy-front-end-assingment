/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				yellow: {
					text: "#0F6BAD",
					bg: "#89C8F4",
				},
				link: "#3642AE",
				gray: {
					extralight: "#FAFAFA",
					light: "#F3F3F3",
					base: "#9F9EA4",
					dark: "#43424A",
				},
				pink: {
					disable: "#B0D7F3",
					active: "#148CE2",
				},
				warning: {
					light: "#FEEEEE",
					dark: "#F95756",
				},
			},
		},
	},
	plugins: [],
};
