/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#005ad3',
        secondaryDark: '#3d75ff',
        dark: '#121212',
        available: '#149603',
        availableDark: '#1ee204',

      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
}

