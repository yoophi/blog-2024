/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    typography: {
      default: {
        css: {
          code: {
            '&::before': {
              display: 'none',
            },
            '&::after': {
              display: 'none',
            },
          }
        },
      },
    },
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
