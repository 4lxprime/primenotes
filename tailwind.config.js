/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['poppins', 'sans-serif'],
				rubik: ['rubik variable', 'sans-serif']
			}
		}
	},
	plugins: []
}
