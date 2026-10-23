/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '992px',
			xl: '1200px'
		},
		extend: {
			colors: {
				cream: '#F2E4D0',
				paper: '#FBF6EE',
				line: '#E6D8C2',
				navy: '#1B4A74',
				navydeep: '#0F2E4A',
				ink: '#17324D',
				body: '#3D5468',
				muted: '#5E6E7C',
				teal: '#76B29F',
				tealdeep: '#2E7D69'
			},
			fontFamily: {
				display: ['sfprorounded', 'Nunito', 'ui-rounded', 'system-ui', 'sans-serif'],
				sans: ['Montserrat', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				mac: '4px 4px 0 rgba(27, 74, 116, 0.16)',
				macsm: '3px 3px 0 rgba(27, 74, 116, 0.16)',
				button: '0 3px 0 #0F2E4A'
			}
		}
	},
	plugins: []
};
