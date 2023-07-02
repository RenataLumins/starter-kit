module.exports = {
	prefix: 'tw-',
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./helpers/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				tertiary: 'var(--color-tertiary)',
				positive: 'var(--color-positive)',
				negative: 'var(--color-negative)',
			},
			fontFamily: {
				'pacifico': ['Pacifico'],
			},
			animation: {
				spinner: 'spinner 1.5s linear infinite',
			},
			keyframes: {
				spinner: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
			},
		},
	},
	plugins: [],
}
